import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AdvantagesSection = () => {
  const advantagesAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();

  return (
    <section 
      id="advantages" 
      ref={advantagesAnimation.ref}
      className={`py-20 bg-white transition-all duration-1000 ${
        advantagesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
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
          <div className={`text-center transition-all duration-700 ${
            advantagesAnimation.isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
          }`}>
            <div className="bg-professional-blue p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-transform">
              <Icon name="Users" size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-3">
              Опытная команда
            </h4>
            <p className="font-open-sans text-gray-600">
              Более 10 лет опыта в области аккредитации и сертификации испытательных лабораторий
            </p>
          </div>

          <div className={`text-center transition-all duration-700 delay-200 ${
            advantagesAnimation.isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
          }`}>
            <div className="bg-professional-green p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-transform">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
            <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-3">
              Гарантия качества
            </h4>
            <p className="font-open-sans text-gray-600">
              100% успешных аккредитаций наших клиентов. Полное соответствие требованиям стандартов
            </p>
          </div>

          <div className={`text-center transition-all duration-700 delay-400 ${
            advantagesAnimation.isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
          }`}>
            <div className="bg-professional-red p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center hover:scale-110 transition-transform">
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

        <div 
          ref={statsAnimation.ref}
          className="mt-16 text-center"
        >
          <div className={`bg-professional-lightGray p-8 rounded-lg transition-all duration-1000 ${
            statsAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
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
  );
};

export default AdvantagesSection;