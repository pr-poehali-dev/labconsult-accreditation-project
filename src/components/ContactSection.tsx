import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { sendToWhatsApp } from "@/utils/whatsapp";

const ContactSection = () => {
  const contactAnimation = useScrollAnimation();

  const [contactFormData, setContactFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!contactFormData.name || !contactFormData.phone) {
      alert('Пожалуйста, заполните обязательные поля (Имя и Телефон)');
      return;
    }

    sendToWhatsApp({
      name: contactFormData.name,
      phone: contactFormData.phone,
      email: contactFormData.email,
      message: contactFormData.message || 'Клиент оставил заявку через контактную форму на сайте'
    });

    setContactFormData({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      ref={contactAnimation.ref}
      className={`relative py-20 bg-professional-darkGray text-white transition-all duration-1000 overflow-hidden ${
        contactAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url(/img/04874455-380a-4363-963e-2f82937f2835.jpg)'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-professional-darkGray/90" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl font-montserrat font-bold mb-6">
              Получить консультацию
            </h3>
            <p className="font-open-sans text-gray-300 mb-8">
              Оставьте заявку, и наш специалист свяжется с вами в течение часа для обсуждения ваших задач
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={20} className="text-professional-green" />
                <span className="font-open-sans">+7 (999) 964-56-17</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={20} className="text-professional-green" />
                <span className="font-open-sans">Konsalting-Lab@yandex.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={20} className="text-professional-green" />
                <span className="font-open-sans">г. Москва, пр-т Мира, д. 106</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg">
            <h4 className="text-2xl font-montserrat font-bold text-professional-darkGray mb-6">
              Заявка на консультацию
            </h4>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  name="name"
                  value={contactFormData.name}
                  onChange={handleContactInputChange}
                  placeholder="Ваше имя *" 
                  className="text-professional-darkGray"
                  required
                />
                <Input 
                  name="phone"
                  value={contactFormData.phone}
                  onChange={handleContactInputChange}
                  placeholder="Телефон *" 
                  className="text-professional-darkGray"
                  required
                />
              </div>
              <Input 
                name="email"
                value={contactFormData.email}
                onChange={handleContactInputChange}
                placeholder="Email" 
                type="email"
                className="text-professional-darkGray"
              />
              <Textarea 
                name="message"
                value={contactFormData.message}
                onChange={handleContactInputChange}
                placeholder="Опишите ваши задачи" 
                rows={4}
                className="text-professional-darkGray"
              />
              <Button 
                type="submit"
                className="w-full bg-professional-blue hover:bg-professional-blue/90"
                size="lg"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;