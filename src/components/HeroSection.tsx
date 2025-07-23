import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ConsultationModal from "@/components/ConsultationModal";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const heroAnimation = useScrollAnimation();

  return (
    <section 
      ref={heroAnimation.ref}
      className={`bg-gradient-to-r from-professional-blue to-professional-green text-white py-20 transition-all duration-1000 ${
        heroAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-montserrat font-bold mb-6">
          Аккредитация испытательных лабораторий
        </h2>
        <p className="text-xl font-open-sans mb-8 max-w-3xl mx-auto">
          Профессиональные услуги по аккредитации лабораторий и поставке современного оборудования. 
          Более 10 лет опыта работы с ведущими предприятиями России.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ConsultationModal>
            <Button size="lg" className="bg-white text-professional-blue hover:bg-gray-100">
              <Icon name="FileCheck" size={20} className="mr-2" />
              Заказать аккредитацию
            </Button>
          </ConsultationModal>
          <a href="#equipment">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-professional-blue">
              <Icon name="Settings" size={20} className="mr-2" />
              Подобрать оборудование
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;