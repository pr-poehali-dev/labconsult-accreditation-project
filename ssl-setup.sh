#!/bin/bash

# Скрипт для автоматической настройки SSL сертификата через Let's Encrypt
# Для домена ЛабКонсалт

set -e

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Функция для логирования
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Проверяем наличие root прав
if [[ $EUID -ne 0 ]]; then
   error "Этот скрипт должен запускаться с правами root"
   exit 1
fi

# Запрашиваем домен у пользователя
read -p "Введите ваш домен (например: labkonsalt.com): " DOMAIN
read -p "Введите email для уведомлений Let's Encrypt: " EMAIL

if [[ -z "$DOMAIN" || -z "$EMAIL" ]]; then
    error "Домен и email обязательны для заполнения"
    exit 1
fi

log "Настройка SSL для домена: $DOMAIN"
log "Email для уведомлений: $EMAIL"

# Обновляем систему
log "Обновление системы..."
apt update && apt upgrade -y

# Устанавливаем необходимые пакеты
log "Установка необходимых пакетов..."
apt install -y nginx certbot python3-certbot-nginx curl wget unzip

# Проверяем статус Nginx
log "Запуск Nginx..."
systemctl enable nginx
systemctl start nginx

# Создаем временную конфигурацию Nginx для получения сертификата
log "Создание временной конфигурации Nginx..."
cat > /etc/nginx/sites-available/temp-ssl <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    
    location ~ /.well-known/acme-challenge {
        allow all;
        root /var/www/html;
    }
    
    location / {
        return 301 https://\$server_name\$request_uri;
    }
}
EOF

# Активируем временную конфигурацию
ln -sf /etc/nginx/sites-available/temp-ssl /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Проверяем конфигурацию Nginx
nginx -t
systemctl reload nginx

# Получаем SSL сертификат
log "Получение SSL сертификата от Let's Encrypt..."
certbot certonly \
    --webroot \
    --webroot-path=/var/www/html \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    --domains $DOMAIN,www.$DOMAIN

if [[ $? -ne 0 ]]; then
    error "Не удалось получить SSL сертификат"
    exit 1
fi

# Создаем основную конфигурацию Nginx с SSL
log "Создание основной конфигурации Nginx с SSL..."
cat > /etc/nginx/sites-available/$DOMAIN <<EOF
# HTTP to HTTPS redirect
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    return 301 https://\$server_name\$request_uri;
}

# Main HTTPS server
server {
    listen 443 ssl http2;
    server_name $DOMAIN www.$DOMAIN;
    
    # SSL Configuration
    ssl_certificate /etc/letsencrypt/live/$DOMAIN/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/$DOMAIN/privkey.pem;
    ssl_trusted_certificate /etc/letsencrypt/live/$DOMAIN/chain.pem;
    
    # SSL Settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    
    # OCSP Stapling
    ssl_stapling on;
    ssl_stapling_verify on;
    resolver 1.1.1.1 1.0.0.1 valid=300s;
    resolver_timeout 5s;
    
    # Security Headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;" always;
    
    # Document root
    root /var/www/$DOMAIN/dist;
    index index.html;
    
    # SPA routing
    location / {
        try_files \$uri \$uri/ /index.html;
        
        # Static file caching
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
    
    # Security: Block access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
    
    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
EOF

# Активируем новую конфигурацию
rm -f /etc/nginx/sites-enabled/temp-ssl
ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/

# Создаем директорию для сайта
mkdir -p /var/www/$DOMAIN
chown -R www-data:www-data /var/www/$DOMAIN

# Проверяем конфигурацию и перезагружаем Nginx
nginx -t
systemctl reload nginx

# Настраиваем автоматическое обновление сертификата
log "Настройка автоматического обновления SSL сертификата..."
(crontab -l 2>/dev/null; echo "0 12 * * * /usr/bin/certbot renew --quiet && systemctl reload nginx") | crontab -

# Создаем systemd сервис для автоматического обновления
cat > /etc/systemd/system/certbot-renewal.service <<EOF
[Unit]
Description=Certbot Renewal
After=network.target

[Service]
Type=oneshot
ExecStart=/usr/bin/certbot renew --quiet --post-hook "systemctl reload nginx"
EOF

cat > /etc/systemd/system/certbot-renewal.timer <<EOF
[Unit]
Description=Run certbot renewal twice daily
Requires=certbot-renewal.service

[Timer]
OnCalendar=*-*-* 00,12:00:00
RandomizedDelaySec=3600
Persistent=true

[Install]
WantedBy=timers.target
EOF

systemctl daemon-reload
systemctl enable certbot-renewal.timer
systemctl start certbot-renewal.timer

# Проверяем SSL конфигурацию
log "Проверка SSL конфигурации..."
echo | openssl s_client -servername $DOMAIN -connect $DOMAIN:443 2>/dev/null | openssl x509 -noout -dates

log "✅ SSL сертификат успешно настроен!"
log "🌐 Ваш сайт доступен по адресу: https://$DOMAIN"
log "🔒 SSL оценка: https://www.ssllabs.com/ssltest/analyze.html?d=$DOMAIN"

warn "Не забудьте:"
warn "1. Загрузить файлы сайта в директорию /var/www/$DOMAIN/dist"
warn "2. Настроить DNS записи для домена $DOMAIN"
warn "3. Проверить firewall настройки (порты 80, 443)"

log "Настройка завершена!"
EOF