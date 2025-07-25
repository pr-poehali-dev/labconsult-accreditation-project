import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const VideoSection = () => {
  const videoAnimation = useScrollAnimation();
  const [selectedVideo, setSelectedVideo] = useState(0);

  const videos = [
    {
      id: 1,
      title: "Современная лаборатория",
      description: "Обзор оборудования и возможностей современной аккредитованной лаборатории",
      thumbnail: "/img/0efb48dc-4ef0-4dc4-a7f7-1b88caf39f7a.jpg",
      embedId: "LXb3EKWsInQ", // OSHA Laboratory Safety Training
      category: "Оборудование"
    },
    {
      id: 2,
      title: "Процесс аккредитации",
      description: "Пошаговый процесс получения аккредитации лаборатории",
      thumbnail: "/img/52de1c19-a4ed-4d7d-9b72-29397e7bdb45.jpg",
      embedId: "ScMzIvxBSi4", // Laboratory Quality Control
      category: "Аккредитация"
    },
    {
      id: 3,
      title: "Химический анализ",
      description: "Демонстрация процесса проведения химических анализов",
      thumbnail: "/img/18bb8c7e-4014-42d0-bbe0-b0ecdcf3fdc5.jpg",
      embedId: "3mnSDifDSxQ", // Chemical Analysis Techniques
      category: "Анализы"
    }
  ];

  return (
    <section 
      ref={videoAnimation.ref}
      className={`py-20 bg-gradient-to-br from-professional-blue/5 to-professional-green/5 transition-all duration-1000 ${
        videoAnimation.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-montserrat font-bold text-professional-darkGray mb-6">
            Видеообзоры
          </h3>
          <p className="text-lg font-open-sans text-gray-600 max-w-3xl mx-auto">
            Познакомьтесь с нашими возможностями и процессами работы через обзорные видеоролики
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videos[selectedVideo].embedId}?autoplay=0&rel=0&modestbranding=1`}
                    title={videos[selectedVideo].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-professional-blue text-white rounded-full">
                      {videos[selectedVideo].category}
                    </span>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Icon name="Eye" size={16} />
                      <span className="text-sm">1.2K просмотров</span>
                    </div>
                  </div>
                  <h4 className="text-2xl font-montserrat font-bold text-professional-darkGray mb-3">
                    {videos[selectedVideo].title}
                  </h4>
                  <p className="font-open-sans text-gray-600 mb-6">
                    {videos[selectedVideo].description}
                  </p>
                  <div className="flex items-center space-x-4">
                    <Button
                      onClick={() => window.open(`https://www.youtube.com/watch?v=${videos[selectedVideo].embedId}`, '_blank')}
                      className="bg-red-600 hover:bg-red-700 text-white"
                    >
                      <Icon name="Youtube" size={20} className="mr-2" />
                      Смотреть на YouTube
                    </Button>
                    <Button variant="outline" className="border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white">
                      <Icon name="Share2" size={16} className="mr-2" />
                      Поделиться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            <h4 className="text-xl font-montserrat font-bold text-professional-darkGray mb-4">
              Все видео
            </h4>
            {videos.map((video, index) => (
              <Card 
                key={video.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedVideo === index 
                    ? 'ring-2 ring-professional-blue shadow-lg' 
                    : 'hover:ring-1 hover:ring-professional-blue/50'
                }`}
                onClick={() => setSelectedVideo(index)}
              >
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Icon name="Play" size={16} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 text-xs font-semibold bg-professional-green/10 text-professional-green rounded">
                          {video.category}
                        </span>
                        {selectedVideo === index && (
                          <Icon name="Volume2" size={14} className="text-professional-blue" />
                        )}
                      </div>
                      <h5 className="font-montserrat font-semibold text-sm text-professional-darkGray mb-1 truncate">
                        {video.title}
                      </h5>
                      <p className="font-open-sans text-xs text-gray-500 line-clamp-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Subscribe Button */}
            <Card className="bg-gradient-to-r from-red-500 to-red-600 text-white">
              <CardContent className="p-6 text-center">
                <Icon name="Youtube" size={32} className="mx-auto mb-3" />
                <h5 className="font-montserrat font-bold mb-2">
                  Подписывайтесь на канал
                </h5>
                <p className="text-red-100 text-sm mb-4">
                  Новые обзоры и полезные материалы
                </p>
                <Button 
                  className="bg-white text-red-600 hover:bg-red-50 w-full"
                  onClick={() => window.open('https://youtube.com/@KonsaltingLab', '_blank')}
                >
                  <Icon name="Bell" size={16} className="mr-2" />
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;