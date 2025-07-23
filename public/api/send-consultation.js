// API endpoint для отправки заявок на консультацию
// Этот файл будет обрабатывать POST запросы на /api/send-consultation

export default async function handler(req, res) {
  // Разрешаем только POST запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не разрешен' });
  }

  try {
    const { name, phone, email, message, timestamp } = req.body;

    // Валидация обязательных полей
    if (!name || !phone) {
      return res.status(400).json({ error: 'Имя и телефон обязательны' });
    }

    // Формируем данные письма
    const emailData = {
      to: 'Konsalting-Lab@yandex.ru',
      subject: 'Новая заявка на консультацию - ЛабКонсалт',
      html: `
        <h2>Новая заявка на консультацию</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email || 'Не указан'}</p>
        <p><strong>Сообщение:</strong> ${message}</p>
        <hr>
        <p><em>Заявка отправлена через сайт ЛабКонсалт</em></p>
        <p><em>Дата: ${new Date(timestamp).toLocaleString('ru-RU')}</em></p>
      `
    };

    // Здесь должна быть интеграция с почтовым сервисом
    // Например, с Nodemailer, SendGrid, или другим провайдером
    console.log('Отправка письма:', emailData);

    // Имитируем успешную отправку
    // В реальном проекте здесь будет код отправки через почтовый сервис
    
    return res.status(200).json({ 
      success: true, 
      message: 'Заявка успешно отправлена' 
    });

  } catch (error) {
    console.error('Ошибка при отправке заявки:', error);
    return res.status(500).json({ 
      error: 'Внутренняя ошибка сервера' 
    });
  }
}