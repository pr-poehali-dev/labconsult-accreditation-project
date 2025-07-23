import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { sendToWhatsApp, openWhatsAppChat } from "@/utils/whatsapp";
import { toast } from "@/hooks/use-toast";

interface ConsultationModalProps {
  children: React.ReactNode;
}

const CONTACT_PHONE = "+7 (999) 964-56-17";

const ConsultationModal = ({ children }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка валидации",
        description: "Пожалуйста, заполните обязательные поля (Имя и Телефон)",
        variant: "destructive",
      });
      return;
    }

    try {
      // Отправляем данные на сервер
      const response = await fetch('/api/send-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || '',
          message: formData.message || 'Клиент хочет получить консультацию по услугам ЛабКонсалт',
          timestamp: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Ошибка сервера: ${response.status}`);
      }

      const result = await response.json();
      
      toast({
        title: "Заявка отправлена!",
        description: "Наш специалист свяжется с вами в течение часа.",
        variant: "default",
      });
      
      // Очищаем форму после успешной отправки
      setFormData({ name: '', phone: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Ошибка отправки:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Неизвестная ошибка';
      
      toast({
        title: "Ошибка отправки",
        description: `Произошла ошибка: ${errorMessage}. Попробуйте еще раз или свяжитесь с нами по телефону ${CONTACT_PHONE}.`,
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-white mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-montserrat font-bold text-professional-darkGray flex items-center">
            <Icon name="MessageSquare" size={24} className="mr-3 text-professional-blue" />
            Получить консультацию
          </DialogTitle>
          <DialogDescription className="font-open-sans text-gray-600">
            Оставьте заявку, и наш специалист свяжется с вами в течение часа для обсуждения ваших задач
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="font-open-sans font-medium text-professional-darkGray">
                Ваше имя *
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Введите ваше имя"
                required
                className="border-gray-300 focus:border-professional-blue focus:ring-professional-blue"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-open-sans font-medium text-professional-darkGray">
                Телефон *
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+7 (999) 123-45-67"
                required
                className="border-gray-300 focus:border-professional-blue focus:ring-professional-blue"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="font-open-sans font-medium text-professional-darkGray">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="your@email.com"
              className="border-gray-300 focus:border-professional-blue focus:ring-professional-blue"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-open-sans font-medium text-professional-darkGray">
              Опишите ваши задачи
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Расскажите подробнее о том, какие услуги вас интересуют..."
              rows={4}
              className="border-gray-300 focus:border-professional-blue focus:ring-professional-blue resize-none"
            />
          </div>

          <div className="bg-professional-lightGray p-4 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-professional-blue mt-0.5 flex-shrink-0" />
              <div className="font-open-sans text-sm text-gray-600">
                <p className="font-medium text-professional-darkGray mb-1">Что происходит после отправки заявки:</p>
                <ul className="space-y-1">
                  <li>• Наш специалист свяжется с вами в течение часа</li>
                  <li>• Проведем бесплатную консультацию по телефону</li>
                  <li>• Подготовим индивидуальное предложение</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-professional-blue hover:bg-professional-blue/90 text-white font-medium"
              size="lg"
            >
              <Icon name="Send" size={20} className="mr-2" />
              Отправить заявку
            </Button>
            <Button
              type="button"
              variant="outline"
              className="flex items-center justify-center border-professional-green text-professional-green hover:bg-professional-green hover:text-white"
              size="lg"
              onClick={() => openWhatsAppChat()}
            >
              <Icon name="Phone" size={20} className="mr-2" />
              {CONTACT_PHONE}
            </Button>
          </div>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs font-open-sans text-gray-500 text-center">
            Нажимая кнопку "Отправить заявку", вы соглашаетесь с обработкой персональных данных
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;