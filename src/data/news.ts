export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  category: 'accreditation' | 'regulation' | 'equipment' | 'standards';
  isImportant?: boolean;
  url?: string;
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Росаккредитация утвердила новый порядок проведения аккредитации с октября 2024',
    summary: 'С 1 октября 2024 года вступил в силу обновленный порядок аккредитации лабораторий с упрощенными процедурами для малого бизнеса и цифровизацией документооборота.',
    date: '2024-09-20',
    source: 'Росаккредитация',
    category: 'accreditation',
    isImportant: true,
    url: 'https://www.fsa.gov.ru/activities/accreditation/'
  },
  {
    id: '2',
    title: 'Введение обязательной аккредитации для лабораторий экологического контроля',
    summary: 'Минприроды России установило требования по обязательной аккредитации для всех лабораторий, проводящих экологический мониторинг с января 2025 года.',
    date: '2024-09-15',
    source: 'Минприроды РФ',
    category: 'regulation',
    isImportant: true,
    url: 'https://www.mnr.gov.ru/'
  },
  {
    id: '3',
    title: 'Запуск национальной программы развития лабораторной базы до 2030 года',
    summary: 'Правительство РФ утвердило программу модернизации лабораторий на сумму 150 млрд рублей с акцентом на отечественное оборудование и технологии.',
    date: '2024-09-10',
    source: 'Правительство РФ',
    category: 'equipment',
    isImportant: true,
    url: 'https://government.ru/'
  },
  {
    id: '4',
    title: 'Новый ГОСТ Р по валидации аналитических методов вступает в силу',
    summary: 'С 1 декабря 2024 года действует обновленный национальный стандарт по валидации методов химического анализа в испытательных лабораториях.',
    date: '2024-09-05',
    source: 'Росстандарт',
    category: 'standards',
    url: 'https://www.gost.ru/'
  },
  {
    id: '5',
    title: 'Цифровые технологии в аккредитации: внедрение ИИ для анализа данных',
    summary: 'Росаккредитация тестирует системы искусственного интеллекта для автоматической обработки заявок и анализа результатов межлабораторных сравнений.',
    date: '2024-08-28',
    source: 'TechExpert',
    category: 'accreditation',
    url: 'https://www.nice-consulting.ru/services/akkreditacziya-laboratorij/'
  },
  {
    id: '6',
    title: 'Российское лабораторное оборудование получило международные сертификаты',
    summary: 'Три крупных российских производителя аналитического оборудования получили сертификаты соответствия международным стандартам качества.',
    date: '2024-08-20',
    source: 'Лаборатория и производство',
    category: 'equipment',
    url: 'https://www.sro-licence.ru/'
  },
  {
    id: '7',
    title: 'Упрощение процедур аккредитации для стартапов и малого бизнеса',
    summary: 'Росаккредитация снизила административную нагрузку и стоимость процедур аккредитации для малых предприятий на 40%.',
    date: '2024-08-15',
    source: 'Росаккредитация',
    category: 'accreditation',
    url: 'https://fsa.gov.ru/press-center/press/'
  },
  {
    id: '8',
    title: 'Новые требования к лабораториям пищевой безопасности',
    summary: 'Роспотребнадзор ужесточил требования к аккредитации лабораторий, исследующих пищевую продукцию, включив дополнительные показатели качества.',
    date: '2024-08-10',
    source: 'Роспотребнадзор',
    category: 'regulation',
    url: 'https://www.rospotrebnadzor.ru/'
  }
];

export const getCategoryColor = (category: NewsItem['category']) => {
  const colors = {
    accreditation: 'bg-professional-blue',
    regulation: 'bg-professional-red',
    equipment: 'bg-professional-green',
    standards: 'bg-purple-600'
  };
  return colors[category];
};

export const getCategoryName = (category: NewsItem['category']) => {
  const names = {
    accreditation: 'Аккредитация',
    regulation: 'Регулирование', 
    equipment: 'Оборудование',
    standards: 'Стандарты'
  };
  return names[category];
};

export const openNewsLink = (url?: string) => {
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};