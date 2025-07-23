import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import ConsultationModal from "@/components/ConsultationModal";

const EquipmentSection = () => {
  return (
    <section 
      id="equipment" 
      className="py-20 bg-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-montserrat font-bold text-professional-darkGray mb-8">
            Подобрать оборудование
          </h3>
          <p className="text-lg font-open-sans text-gray-600 max-w-3xl mx-auto">
            Мы поможем подобрать и поставить современное испытательное оборудование от ведущих мировых производителей, 
            полностью соответствующее требованиям вашей лаборатории.
          </p>
        </div>

        {/* Аналитическое оборудование */}
        <div id="analytical-equipment" className="mb-20">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-professional-blue to-professional-blue/80 text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Icon name="FlaskConical" size={32} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-montserrat">Аналитическое оборудование</CardTitle>
                  <p className="text-blue-100 mt-2">Высокоточные приборы для химического анализа</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-4">Типы оборудования:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Атомно-абсорбционные спектрометры</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Газовые и жидкостные хроматографы</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Оптические микроскопы</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Масс-спектрометры</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">ИК-спектрометры</span>
                    </div>
                  </div>
                </div>
                <div className="bg-professional-lightGray p-6 rounded-lg">
                  <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-4">Получить консультацию</h4>
                  <p className="font-open-sans text-gray-600 mb-4">
                    Наши специалисты помогут подобрать аналитическое оборудование под ваши задачи
                  </p>
                  <ConsultationModal>
                    <Button className="w-full bg-professional-blue hover:bg-professional-blue/90">
                      <Icon name="MessageSquare" size={18} className="mr-2" />
                      Консультация по аналитическому оборудованию
                    </Button>
                  </ConsultationModal>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Испытательные стенды */}
        <div id="testing-equipment" className="mb-20">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-professional-green to-professional-green/80 text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Icon name="Cog" size={32} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-montserrat">Испытательные стенды</CardTitle>
                  <p className="text-green-100 mt-2">Оборудование для механических и физических испытаний</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-4">Типы оборудования:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Универсальные испытательные машины</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Климатические камеры</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Вибростенды и ударные установки</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Машины для испытания на усталость</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Твердомеры и дюрометры</span>
                    </div>
                  </div>
                </div>
                <div className="bg-professional-lightGray p-6 rounded-lg">
                  <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-4">Получить консультацию</h4>
                  <p className="font-open-sans text-gray-600 mb-4">
                    Подберем испытательное оборудование для ваших конкретных задач и стандартов
                  </p>
                  <ConsultationModal>
                    <Button className="w-full bg-professional-green hover:bg-professional-green/90">
                      <Icon name="MessageSquare" size={18} className="mr-2" />
                      Консультация по испытательным стендам
                    </Button>
                  </ConsultationModal>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Метрологическое обеспечение */}
        <div id="metrology-equipment" className="mb-12">
          <Card className="hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-professional-red to-professional-red/80 text-white">
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <Icon name="Gauge" size={32} className="text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl font-montserrat">Метрологическое обеспечение</CardTitle>
                  <p className="text-red-100 mt-2">Эталоны и средства поверки для точных измерений</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-4">Типы оборудования:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Рабочие эталоны единиц измерений</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Калибраторы и поверочные установки</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Стандартные образцы состава и свойств</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Измерительное оборудование</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} className="text-professional-green" />
                      <span className="font-open-sans">Системы управления качеством измерений</span>
                    </div>
                  </div>
                </div>
                <div className="bg-professional-lightGray p-6 rounded-lg">
                  <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-4">Получить консультацию</h4>
                  <p className="font-open-sans text-gray-600 mb-4">
                    Организуем метрологическое обеспечение лаборатории согласно требованиям ГОСТ ISO/IEC 17025
                  </p>
                  <ConsultationModal>
                    <Button className="w-full bg-professional-red hover:bg-professional-red/90">
                      <Icon name="MessageSquare" size={18} className="mr-2" />
                      Консультация по метрологии
                    </Button>
                  </ConsultationModal>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EquipmentSection;