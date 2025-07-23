import nodemailer from 'nodemailer';

// Интерфейс для данных письма
export interface EmailData {
  name: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
}

// Создаем транспорт для отправки писем
const createTransporter = () => {
  // Конфигурация для Yandex SMTP (поскольку почта Konsalting-Lab@yandex.ru)
  return nodemailer.createTransporter({
    host: 'smtp.yandex.ru',
    port: 587,
    secure: false, // true для порта 465, false для других портов
    auth: {
      user: process.env.SMTP_USER || 'your-email@yandex.ru', // Замените на реальный email
      pass: process.env.SMTP_PASSWORD || 'your-app-password', // Пароль приложения Yandex
    },
  });
};

// Функция отправки письма с заявкой
export const sendConsultationEmail = async (data: EmailData): Promise<boolean> => {
  try {
    const transporter = createTransporter();

    // Проверяем соединение
    await transporter.verify();

    // Формируем HTML-содержимое письма
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #1e40af; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1e40af; }
          .value { margin-top: 5px; }
          .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666; }
          .highlight { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>🧪 Новая заявка на консультацию</h1>
          <p>ЛабКонсалт - Профессиональные услуги для лабораторий</p>
        </div>
        
        <div class="content">
          <div class="highlight">
            <strong>⚡ Срочно!</strong> Новый клиент запросил консультацию. Рекомендуется связаться в течение часа.
          </div>
          
          <div class="field">
            <div class="label">👤 Имя клиента:</div>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <div class="label">📞 Телефон:</div>
            <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">
              ${data.email ? `<a href="mailto:${data.email}">${data.email}</a>` : 'Не указан'}
            </div>
          </div>
          
          <div class="field">
            <div class="label">💬 Сообщение:</div>
            <div class="value" style="background: #f9fafb; padding: 10px; border-radius: 5px;">
              ${data.message}
            </div>
          </div>
        </div>
        
        <div class="footer">
          <p>📅 Дата заявки: ${new Date(data.timestamp).toLocaleString('ru-RU')}</p>
          <p>🌐 Источник: Сайт ЛабКонсалт (poehali.dev)</p>
          <p>Это автоматическое уведомление. Не отвечайте на это письмо.</p>
        </div>
      </body>
      </html>
    `;

    // Отправляем письмо
    const mailOptions = {
      from: `"ЛабКонсалт - Заявки" <${process.env.SMTP_USER}>`,
      to: 'Konsalting-Lab@yandex.ru',
      subject: `🧪 Новая заявка от ${data.name} - ЛабКонсалт`,
      html: htmlContent,
      // Дублируем в текстовом формате для совместимости
      text: `
Новая заявка на консультацию - ЛабКонсалт

Имя: ${data.name}
Телефон: ${data.phone}
Email: ${data.email || 'Не указан'}
Сообщение: ${data.message}

Дата: ${new Date(data.timestamp).toLocaleString('ru-RU')}
Источник: Сайт ЛабКонсалт
      `.trim()
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Письмо успешно отправлено:', result.messageId);
    return true;

  } catch (error) {
    console.error('Ошибка отправки письма:', error);
    return false;
  }
};

// Функция для отправки уведомления клиенту (опционально)
export const sendClientConfirmation = async (clientEmail: string, clientName: string): Promise<boolean> => {
  if (!clientEmail) return true; // Если email не указан, пропускаем

  try {
    const transporter = createTransporter();

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .header { background: #10b981; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; }
          .footer { background: #f3f4f6; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>✅ Заявка принята!</h1>
          <p>ЛабКонсалт</p>
        </div>
        
        <div class="content">
          <p>Здравствуйте, <strong>${clientName}</strong>!</p>
          
          <p>Спасибо за обращение к нам. Ваша заявка на консультацию успешно получена и принята в работу.</p>
          
          <p><strong>Что дальше:</strong></p>
          <ul>
            <li>Наш специалист свяжется с вами в течение часа</li>
            <li>Проведем бесплатную консультацию по телефону</li>
            <li>Подготовим индивидуальное предложение</li>
          </ul>
          
          <p>Если у вас есть срочные вопросы, звоните: <strong>+7 (999) 964-56-17</strong></p>
          
          <p>С уважением,<br>Команда ЛабКонсалт</p>
        </div>
        
        <div class="footer">
          <p>ЛабКонсалт - Профессиональные услуги по аккредитации испытательных лабораторий</p>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"ЛабКонсалт" <${process.env.SMTP_USER}>`,
      to: clientEmail,
      subject: '✅ Ваша заявка принята - ЛабКонсалт',
      html: htmlContent
    };

    await transporter.sendMail(mailOptions);
    return true;

  } catch (error) {
    console.error('Ошибка отправки подтверждения клиенту:', error);
    return false;
  }
};