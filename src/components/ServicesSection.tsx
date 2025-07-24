import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const servicesAnimation = useScrollAnimation();

  return (
    <section 
      id="services" 
      ref={servicesAnimation.ref}
      className={`py-12 sm:py-16 lg:py-20 bg-professional-lightGray transition-all duration-1000 ${
        servicesAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-bold text-professional-darkGray mb-3 sm:mb-4">
            Наши услуги
          </h3>
          <p className="text-base sm:text-lg font-open-sans text-gray-600 max-w-xl lg:max-w-2xl mx-auto px-4">
            Комплексные решения для испытательных лабораторий: от получения аккредитации до поставки оборудования
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <Card className={`hover:shadow-lg transition-all duration-700 hover:scale-105 touch-manipulation relative overflow-hidden ${
            servicesAnimation.isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-8'
          }`}>
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
              style={{
                backgroundImage: 'url(/img/9e5376e2-a619-45a6-bcd2-3433b5f51480.jpg)'
              }}
            />
            <div className="relative z-10">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mb-2">
                  <div className="bg-professional-blue p-2.5 sm:p-3 rounded-lg flex-shrink-0">
                    <Icon name="Award" size={20} className="text-white sm:w-6 sm:h-6" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl lg:text-2xl font-montserrat text-professional-darkGray leading-tight">
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
            </div>
          </Card>

          <Card className={`hover:shadow-lg transition-all duration-700 delay-300 relative overflow-hidden ${
            servicesAnimation.isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-8'
          }`}>
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
              style={{
                backgroundImage: 'url(/img/f1921ef6-361d-488a-9fe5-be2ca84278e5.jpg)'
              }}
            />
            <div className="relative z-10">
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
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;