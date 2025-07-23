import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ConsultationModal from "@/components/ConsultationModal";

const Header = () => {
  return (
    <header className="bg-professional-blue text-white py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Icon name="FlaskConical" size={32} className="text-professional-green" />
          <h1 className="text-2xl font-montserrat font-bold">ЛабКонсалт</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#services" className="hover:text-professional-green transition-colors">Услуги</a>
          <a href="#equipment" className="hover:text-professional-green transition-colors">Подобрать оборудование</a>
          <a href="#advantages" className="hover:text-professional-green transition-colors">Преимущества</a>
          <a href="#news" className="hover:text-professional-green transition-colors">Новости</a>
          <a href="#contact" className="hover:text-professional-green transition-colors">Контакты</a>
        </nav>
        <ConsultationModal>
          <Button variant="secondary" className="bg-professional-green hover:bg-professional-green/90 text-white">
            Получить консультацию
          </Button>
        </ConsultationModal>
      </div>
    </header>
  );
};

export default Header;