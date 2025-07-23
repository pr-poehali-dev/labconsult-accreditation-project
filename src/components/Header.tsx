import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ConsultationModal from "@/components/ConsultationModal";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-professional-blue text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto">
        {/* Main Header */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Icon name="FlaskConical" size={28} className="text-professional-green" />
            <h1 className="text-xl sm:text-2xl font-montserrat font-bold">ЛабКонсалт</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <a href="#services" className="hover:text-professional-green transition-colors text-sm">Услуги</a>
            <a href="#equipment" className="hover:text-professional-green transition-colors text-sm">Оборудование</a>
            <a href="#advantages" className="hover:text-professional-green transition-colors text-sm">Преимущества</a>
            <a href="#contact" className="hover:text-professional-green transition-colors text-sm">Контакты</a>
          </nav>

          {/* Desktop CTA + Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <ConsultationModal>
              <Button 
                variant="secondary" 
                className="bg-professional-green hover:bg-professional-green/90 text-white text-xs sm:text-sm px-3 py-2 sm:px-4"
              >
                <Icon name="Phone" size={16} className="mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Получить консультацию</span>
                <span className="sm:hidden">Звонок</span>
              </Button>
            </ConsultationModal>
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 hover:bg-professional-blue/80 rounded transition-colors"
              aria-label="Открыть меню"
            >
              <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-professional-blue/30">
            <nav className="flex flex-col space-y-3 pt-4">
              <a 
                href="#services" 
                className="hover:text-professional-green transition-colors text-base py-2 px-2 rounded hover:bg-professional-blue/50"
                onClick={closeMobileMenu}
              >
                <Icon name="Briefcase" size={20} className="inline mr-3" />
                Услуги
              </a>
              <a 
                href="#equipment" 
                className="hover:text-professional-green transition-colors text-base py-2 px-2 rounded hover:bg-professional-blue/50"
                onClick={closeMobileMenu}
              >
                <Icon name="Settings" size={20} className="inline mr-3" />
                Подобрать оборудование
              </a>
              <a 
                href="#advantages" 
                className="hover:text-professional-green transition-colors text-base py-2 px-2 rounded hover:bg-professional-blue/50"
                onClick={closeMobileMenu}
              >
                <Icon name="Star" size={20} className="inline mr-3" />
                Преимущества
              </a>
              <a 
                href="#contact" 
                className="hover:text-professional-green transition-colors text-base py-2 px-2 rounded hover:bg-professional-blue/50"
                onClick={closeMobileMenu}
              >
                <Icon name="MapPin" size={20} className="inline mr-3" />
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;