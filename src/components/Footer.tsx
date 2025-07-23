import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
              <li>
                <a href="#services" className="hover:text-professional-green transition-colors">
                  Аккредитация лабораторий
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-professional-green transition-colors">
                  Поставка оборудования
                </a>
              </li>
              <li>
                <a href="#advantages" className="hover:text-professional-green transition-colors">
                  Обучение персонала
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-professional-green transition-colors">
                  Техническая поддержка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-montserrat font-bold mb-4">Контакты</h5>
            <div className="space-y-2 font-open-sans text-gray-300">
              <div>+7 (999) 964-56-17</div>
              <div>Konsalting-Lab@yandex.ru</div>
              <div>г. Москва, пр-т Мира, д. 106</div>
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
  );
};

export default Footer;