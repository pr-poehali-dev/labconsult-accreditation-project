interface FormData {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

export const sendToWhatsApp = (formData: FormData) => {
  const whatsappNumber = "79999645617";
  
  const message = `🔬 *Новая заявка с сайта ЛабКонсалт*

📋 *Данные клиента:*
👤 Имя: ${formData.name}
📞 Телефон: ${formData.phone}
${formData.email ? `📧 Email: ${formData.email}` : ''}

💼 *Описание задач:*
${formData.message || 'Клиент не указал подробности'}

---
⏰ Заявка отправлена: ${new Date().toLocaleString('ru-RU')}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
  // Открываем WhatsApp в новой вкладке
  window.open(whatsappUrl, '_blank');
};

export const openWhatsAppChat = (phone: string = "79999645617") => {
  const message = "Здравствуйте! Интересуют услуги по аккредитации лабораторий.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
};