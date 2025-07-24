import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ConsultationModal from "@/components/ConsultationModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const heroAnimation = useScrollAnimation();

  return (
    <section 
      ref={heroAnimation.ref}
      className={`relative bg-gradient-to-br from-professional-blue via-professional-blue to-professional-green text-white py-12 sm:py-16 lg:py-20 min-h-[60vh] sm:min-h-[70vh] flex items-center transition-all duration-1000 overflow-hidden ${
        heroAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/img/035301a5-b282-4fe4-915c-7e191f3e0991.jpg)'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-professional-blue/90 via-professional-blue/85 to-professional-green/90" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center w-full">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-montserrat font-bold mb-4 sm:mb-6 leading-tight">
          Аккредитация испытательных лабораторий
        </h2>
        <p className="text-base sm:text-lg lg:text-xl font-open-sans mb-6 sm:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-2">
          Профессиональные услуги по аккредитации лабораторий и поставке современного оборудования. 
          Более 10 лет опыта работы с ведущими предприятиями России.
        </p>
        
        {/* Mobile optimized buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
          <ConsultationModal>
            <Button 
              size="lg" 
              className="bg-white text-professional-blue hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 shadow-lg hover:shadow-xl transition-all"
            >
              <Icon name="FileCheck" size={18} className="mr-2" />
              Заказать аккредитацию
            </Button>
          </ConsultationModal>
          <a href="#equipment" className="w-full sm:w-auto">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-professional-blue w-full text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 transition-all"
            >
              <Icon name="Settings" size={18} className="mr-2" />
              Подобрать оборудование
            </Button>
          </a>
        </div>

        {/* Quick stats for mobile */}
        <div className="mt-8 sm:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto sm:max-w-lg">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-professional-green">10+</div>
            <div className="text-xs sm:text-sm text-gray-200">лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-professional-green">100+</div>
            <div className="text-xs sm:text-sm text-gray-200">лабораторий</div>
          </div>
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-professional-green">24/7</div>
            <div className="text-xs sm:text-sm text-gray-200">поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;