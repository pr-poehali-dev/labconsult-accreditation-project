#!/bin/bash

# Скрипт автоматического развертывания ЛабКонсалт в production
# Включает SSL, мониторинг, резервное копирование

set -e

# Цвета для логирования
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log() { echo -e "${GREEN}[INFO]${NC} $1"; }
warn() { echo -e "${YELLOW}[WARN]${NC} $1"; }
error() { echo -e "${RED}[ERROR]${NC} $1"; }
info() { echo -e "${BLUE}[INFO]${NC} $1"; }

# Проверяем права root
if [[ $EUID -ne 0 ]]; then
   error "Запустите скрипт с правами root: sudo $0"
   exit 1
fi

# Баннер
echo -e "${BLUE}"
echo "╔════════════════════════════════════════╗"
echo "║      🧪 ЛабКонсалт Deployment         ║"
echo "║   Автоматическое развертывание с SSL   ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"

# Проверяем наличие Docker и Docker Compose
log "Проверка зависимостей..."
if ! command -v docker &> /dev/null; then
    error "Docker не установлен. Установите Docker и повторите попытку."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    error "Docker Compose не установлен. Установите Docker Compose и повторите попытку."
    exit 1
fi

# Запрашиваем данные для развертывания
info "Введите данные для развертывания:"
read -p "Домен (например: labkonsalt.com): " DOMAIN
read -p "Email для SSL сертификатов: " SSL_EMAIL
read -s -p "SMTP пароль для отправки писем: " SMTP_PASSWORD
echo
read -s -p "Пароль для Redis: " REDIS_PASSWORD
echo
read -s -p "Пароль для Grafana админа: " GRAFANA_PASSWORD
echo

# Валидация введенных данных
if [[ -z "$DOMAIN" || -z "$SSL_EMAIL" || -z "$SMTP_PASSWORD" || -z "$REDIS_PASSWORD" || -z "$GRAFANA_PASSWORD" ]]; then
    error "Все поля обязательны для заполнения!"
    exit 1
fi

# Создаем .env файл для production
log "Создание production конфигурации..."
cat > .env <<EOF
DOMAIN=$DOMAIN
SSL_EMAIL=$SSL_EMAIL
SMTP_USER=Konsalting-Lab@yandex.ru
SMTP_PASSWORD=$SMTP_PASSWORD
REDIS_PASSWORD=$REDIS_PASSWORD
GRAFANA_PASSWORD=$GRAFANA_PASSWORD
JWT_SECRET=$(openssl rand -base64 32)
NODE_ENV=production
PORT=3000
LOG_LEVEL=info
ENABLE_METRICS=true
METRICS_PORT=9091
EOF

# Создаем директории
log "Создание необходимых директорий..."
mkdir -p monitoring/grafana/{dashboards,datasources}
mkdir -p logs
mkdir -p backups

# Создаем конфигурацию Prometheus
cat > monitoring/prometheus.yml <<EOF
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'labkonsalt-app'
    static_configs:
      - targets: ['app:9091']
  
  - job_name: 'nginx'
    static_configs:
      - targets: ['nginx:9113']
  
  - job_name: 'redis'
    static_configs:
      - targets: ['redis:6379']
EOF

# Создаем datasource для Grafana
cat > monitoring/grafana/datasources/prometheus.yml <<EOF
apiVersion: 1

datasources:
  - name: Prometheus
    type: prometheus
    access: proxy
    url: http://prometheus:9090
    isDefault: true
EOF

# Создаем базовый dashboard для Grafana
cat > monitoring/grafana/dashboards/labkonsalt.json <<EOF
{
  "dashboard": {
    "title": "ЛабКонсалт Мониторинг",
    "panels": [
      {
        "title": "HTTP Requests",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(nginx_http_requests_total[5m])"
          }
        ]
      }
    ]
  }
}
EOF

# Обновляем конфигурацию Nginx с актуальным доменом
log "Настройка Nginx конфигурации..."
sed -i "s/labkonsalt\.com/$DOMAIN/g" nginx.conf

# Строим приложение
log "Сборка приложения..."
npm run build || bun run build

# Настраиваем firewall
log "Настройка firewall..."
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 22/tcp
ufw --force enable

# Первоначальная настройка SSL (HTTP-01 challenge)
log "Подготовка к получению SSL сертификата..."
docker-compose -f docker-compose.prod.yml up -d nginx

sleep 10

# Получаем SSL сертификат
log "Получение SSL сертификата от Let's Encrypt..."
docker-compose -f docker-compose.prod.yml run --rm certbot \
    certonly --webroot --webroot-path=/var/www/certbot \
    --email $SSL_EMAIL --agree-tos --no-eff-email \
    -d $DOMAIN -d www.$DOMAIN

if [[ $? -ne 0 ]]; then
    error "Не удалось получить SSL сертификат!"
    error "Проверьте:"
    error "1. DNS записи указывают на этот сервер"
    error "2. Порты 80 и 443 открыты"
    error "3. Домен корректно прописан"
    exit 1
fi

# Запускаем все сервисы
log "Запуск всех сервисов..."
docker-compose -f docker-compose.prod.yml up -d

# Ждем запуска всех сервисов
log "Ожидание запуска сервисов..."
sleep 30

# Проверяем статус сервисов
log "Проверка статуса сервисов..."
docker-compose -f docker-compose.prod.yml ps

# Настраиваем автоматическое обновление сертификатов
log "Настройка автоматического обновления SSL..."
cat > /etc/cron.d/certbot-renewal <<EOF
0 12 * * * root docker-compose -f $(pwd)/docker-compose.prod.yml run --rm certbot renew --quiet && docker-compose -f $(pwd)/docker-compose.prod.yml restart nginx
EOF

# Создаем скрипт резервного копирования
cat > backup.sh <<'EOF'
#!/bin/bash
BACKUP_DIR="/root/backups"
DATE=$(date +%Y%m%d_%H%M%S)
mkdir -p $BACKUP_DIR

# Архивируем SSL сертификаты
tar -czf $BACKUP_DIR/ssl_$DATE.tar.gz -C /var/lib/docker/volumes docker-compose-prod_certbot-certs

# Архивируем данные Redis
docker exec labkonsalt-redis redis-cli BGSAVE
tar -czf $BACKUP_DIR/redis_$DATE.tar.gz -C /var/lib/docker/volumes docker-compose-prod_redis-data

# Удаляем старые бэкапы (старше 30 дней)
find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete

echo "Backup completed: $BACKUP_DIR"
EOF

chmod +x backup.sh

# Добавляем в cron
(crontab -l 2>/dev/null; echo "0 2 * * * $(pwd)/backup.sh") | crontab -

# Финальные проверки
log "Выполнение финальных проверок..."

# Проверяем SSL
if curl -f -s "https://$DOMAIN" > /dev/null; then
    log "✅ HTTPS работает корректно"
else
    warn "⚠️  Проблемы с HTTPS подключением"
fi

# Проверяем HTTP редирект
if curl -s -I "http://$DOMAIN" | grep -q "301"; then
    log "✅ HTTP редирект на HTTPS работает"
else
    warn "⚠️  Проблемы с HTTP редиректом"
fi

# Выводим итоговую информацию
echo -e "${GREEN}"
echo "╔════════════════════════════════════════╗"
echo "║        🎉 Развертывание завершено!     ║"
echo "╚════════════════════════════════════════╝"
echo -e "${NC}"

info "🌐 Ваш сайт доступен по адресу: https://$DOMAIN"
info "📊 Grafana мониторинг: http://$DOMAIN:3001 (admin/$GRAFANA_PASSWORD)"
info "📈 Prometheus метрики: http://$DOMAIN:9090"
info "🔒 SSL рейтинг: https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN"

warn "Важные заметки:"
warn "1. SSL сертификат автоматически обновляется каждые 12 часов"
warn "2. Резервные копии создаются ежедневно в 2:00"
warn "3. Логи доступны через: docker-compose -f docker-compose.prod.yml logs"
warn "4. Перезапуск: docker-compose -f docker-compose.prod.yml restart"

log "Развертывание успешно завершено! 🚀"