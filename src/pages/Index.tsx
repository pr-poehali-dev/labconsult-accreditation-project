import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-professional-blue text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="FlaskConical" size={32} className="text-professional-green" />
            <h1 className="text-2xl font-montserrat font-bold">ЛабКонсалт</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-professional-green transition-colors">Услуги</a>
            <a href="#advantages" className="hover:text-professional-green transition-colors">Преимущества</a>
            <a href="#contact" className="hover:text-professional-green transition-colors">Контакты</a>
          </nav>
          <Button variant="secondary" className="bg-professional-green hover:bg-professional-green/90 text-white">
            Получить консультацию
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-professional-blue to-professional-green text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-montserrat font-bold mb-6">
            Аккредитация испытательных лабораторий
          </h2>
          <p className="text-xl font-open-sans mb-8 max-w-3xl mx-auto">
            Профессиональные услуги по аккредитации лабораторий и поставке современного оборудования. 
            Более 10 лет опыта работы с ведущими предприятиями России.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-professional-blue hover:bg-gray-100">
              <Icon name="FileCheck" size={20} className="mr-2" />
              Заказать аккредитацию
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-professional-blue">
              <Icon name="Settings" size={20} className="mr-2" />
              Подобрать оборудование
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-professional-lightGray">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-professional-darkGray mb-4">
              Наши услуги
            </h3>
            <p className="text-lg font-open-sans text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для испытательных лабораторий: от получения аккредитации до поставки оборудования
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-professional-blue p-3 rounded-lg">
                    <Icon name="Award" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-montserrat text-professional-darkGray">
                    Аккредитация лабораторий
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-open-sans mb-6">
                  Полное сопровождение процесса аккредитации в соответствии с требованиями ГОСТ ISO/IEC 17025
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-professional-green" />
                    <span className="font-open-sans">Подготовка документации</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-professional-green" />
                    <span className="font-open-sans">Обучение персонала</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-professional-green" />
                    <span className="font-open-sans">Сопровождение инспекции</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-professional-green" />
                    <span className="font-open-sans">Надзорные мероприятия</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-professional-green p-3 rounded-lg">
                    <Icon name="Settings" size={24} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl font-montserrat text-professional-darkGray">
                    Поставка оборудования
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 font-open-sans mb-6">
                  Подбор и поставка современного испытательного оборудования от ведущих мировых производителей
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-professional-green" />
                    <span className="font-open-sans">Аналитическое оборудование</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-professional-green" />
                    <span className="font-open-sans">Испытательные стенды</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-professional-green" />
                    <span className="font-open-sans">Метрологическое обеспечение</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-professional-green" />
                    <span className="font-open-sans">Техническая поддержка</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-montserrat font-bold text-professional-darkGray mb-4">
              Почему выбирают нас
            </h3>
            <p className="text-lg font-open-sans text-gray-600">
              Доверие клиентов — результат нашего профессионализма и качества услуг
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-professional-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-3">
                Опытная команда
              </h4>
              <p className="font-open-sans text-gray-600">
                Более 10 лет опыта в области аккредитации и сертификации испытательных лабораторий
              </p>
            </div>

            <div className="text-center">
              <div className="bg-professional-green p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-3">
                Гарантия качества
              </h4>
              <p className="font-open-sans text-gray-600">
                100% успешных аккредитаций наших клиентов. Полное соответствие требованиям стандартов
              </p>
            </div>

            <div className="text-center">
              <div className="bg-professional-red p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-3">
                Быстрые сроки
              </h4>
              <p className="font-open-sans text-gray-600">
                Оптимизированные процессы позволяют сократить время получения аккредитации до минимума
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-professional-lightGray p-8 rounded-lg">
              <div className="flex flex-wrap justify-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-professional-blue">150+</div>
                  <div className="font-open-sans text-gray-600">Аккредитованных лабораторий</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-professional-green">10+</div>
                  <div className="font-open-sans text-gray-600">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-montserrat font-bold text-professional-red">24/7</div>
                  <div className="font-open-sans text-gray-600">Техническая поддержка</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-professional-darkGray text-white">
        <div className="max-w-6xl mx-auto px-6">
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
                  <span className="font-open-sans">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-professional-green" />
                  <span className="font-open-sans">info@labconsult.ru</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-professional-green" />
                  <span className="font-open-sans">г. Москва, ул. Научная, д. 15</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <h4 className="text-2xl font-montserrat font-bold text-professional-darkGray mb-6">
                Заявка на консультацию
              </h4>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Ваше имя" 
                    className="text-professional-darkGray"
                  />
                  <Input 
                    placeholder="Телефон" 
                    className="text-professional-darkGray"
                  />
                </div>
                <Input 
                  placeholder="Email" 
                  type="email"
                  className="text-professional-darkGray"
                />
                <Textarea 
                  placeholder="Опишите ваши задачи" 
                  rows={4}
                  className="text-professional-darkGray"
                />
                <Button 
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

      {/* Footer */}
      <footer className="bg-professional-blue text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="FlaskConical" size={24} className="text-professional-green" />
                <h5 className="text-xl font-montserrat font-bold">ЛабКонсалт</h5>
              </div>
              <p className="font-open-sans text-gray-300">
                Профессиональные услуги по аккредитации испытательных лабораторий и поставке оборудования
              </p>
            </div>
            
            <div>
              <h5 className="font-montserrat font-bold mb-4">Услуги</h5>
              <ul className="space-y-2 font-open-sans text-gray-300">
                <li>Аккредитация лабораторий</li>
                <li>Поставка оборудования</li>
                <li>Обучение персонала</li>
                <li>Техническая поддержка</li>
              </ul>
            </div>

            <div>
              <h5 className="font-montserrat font-bold mb-4">Контакты</h5>
              <div className="space-y-2 font-open-sans text-gray-300">
                <div>+7 (495) 123-45-67</div>
                <div>info@labconsult.ru</div>
                <div>г. Москва, ул. Научная, д. 15</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-professional-green/20 mt-8 pt-8 text-center">
            <p className="font-open-sans text-gray-300">
              © 2024 ЛабКонсалт. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;