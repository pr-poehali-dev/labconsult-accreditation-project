import { sendConsultationEmail, sendClientConfirmation } from '../../src/utils/email.js';

// API endpoint для отправки заявок на консультацию
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

    // Отправляем уведомление на корпоративную почту
    const emailSent = await sendConsultationEmail({
      name,
      phone,
      email: email || '',
      message,
      timestamp
    });

    if (!emailSent) {
      throw new Error('Не удалось отправить уведомление');
    }

    // Опционально: отправляем подтверждение клиенту
    if (email) {
      await sendClientConfirmation(email, name);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Заявка успешно отправлена! Наш специалист свяжется с вами в течение часа.' 
    });

  } catch (error) {
    console.error('Ошибка при отправке заявки:', error);
    return res.status(500).json({ 
      error: 'Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.' 
    });
  }
}