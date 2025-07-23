import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { newsData, getCategoryColor, getCategoryName, type NewsItem } from "@/data/news";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const NewsCard = ({ news, index }: { news: NewsItem; index: number }) => {
  const cardAnimation = useScrollAnimation();
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Card 
      ref={cardAnimation.ref}
      className={`hover:shadow-lg transition-all duration-700 ${
        cardAnimation.isVisible 
          ? index % 2 === 0 
            ? 'animate-fade-in-left' 
            : 'animate-fade-in-right'
          : 'opacity-0 translate-x-8'
      } ${news.isImportant ? 'ring-2 ring-professional-blue/20' : ''}`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3 mb-2">
          <Badge 
            className={`${getCategoryColor(news.category)} text-white text-xs px-2 py-1`}
          >
            {getCategoryName(news.category)}
          </Badge>
          {news.isImportant && (
            <Badge variant="outline" className="text-professional-red border-professional-red">
              <Icon name="AlertCircle" size={12} className="mr-1" />
              Важно
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg font-montserrat font-bold text-professional-darkGray leading-tight">
          {news.title}
        </CardTitle>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <Icon name="Calendar" size={14} className="mr-2" />
          {formatDate(news.date)}
          <span className="mx-2">•</span>
          <Icon name="Building" size={14} className="mr-2" />
          {news.source}
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="font-open-sans text-gray-600 line-clamp-3">
          {news.summary}
        </CardDescription>
        <Button 
          variant="outline" 
          size="sm" 
          className="mt-4 text-professional-blue border-professional-blue hover:bg-professional-blue hover:text-white"
        >
          <Icon name="ExternalLink" size={14} className="mr-2" />
          Подробнее
        </Button>
      </CardContent>
    </Card>
  );
};

const NewsSection = () => {
  const titleAnimation = useScrollAnimation();
  const recentNews = newsData.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div 
          ref={titleAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            <Icon name="Newspaper" size={32} className="text-professional-blue mr-3" />
            <h3 className="text-4xl font-montserrat font-bold text-professional-darkGray">
              Новости отрасли
            </h3>
          </div>
          <p className="text-lg font-open-sans text-gray-600 max-w-3xl mx-auto">
            Актуальная информация об изменениях в сфере аккредитации лабораторий, новых стандартах и требованиях
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mb-12">
          {recentNews.map((news, index) => (
            <NewsCard key={news.id} news={news} index={index} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-professional-lightGray p-6 rounded-lg inline-block">
            <div className="flex items-center space-x-4 text-sm font-open-sans text-gray-600">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-professional-blue rounded-full mr-2"></div>
                Аккредитация
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-professional-red rounded-full mr-2"></div>
                Регулирование
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-professional-green rounded-full mr-2"></div>
                Оборудование
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                Стандарты
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;