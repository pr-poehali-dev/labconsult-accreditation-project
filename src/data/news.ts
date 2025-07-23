export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  source: string;
  category: 'accreditation' | 'regulation' | 'equipment' | 'standards';
  isImportant?: boolean;
}

export const newsData: NewsItem[] = [
  {
    id: '1',
    title: 'Росаккредитация ввела новые требования к испытательным лабораториям с 2024 года',
    summary: 'С 1 января 2024 года вступили в силу обновленные требования к аккредитации испытательных лабораторий. Основные изменения касаются документооборота и цифровизации процессов.',
    date: '2024-01-15',
    source: 'Росаккредитация',
    category: 'accreditation',
    isImportant: true
  },
  {
    id: '2',
    title: 'Обновление ГОСТ ISO/IEC 17025-2019: ключевые изменения для лабораторий',
    summary: 'Российская версия международного стандарта получила важные дополнения по управлению рисками и валидации методов испытаний.',
    date: '2024-02-20',
    source: 'Росстандарт',
    category: 'standards',
    isImportant: true
  },
  {
    id: '3',
    title: 'Цифровая трансформация процессов аккредитации: новые возможности',
    summary: 'Внедрение электронного документооборота и дистанционных аудитов значительно ускоряет процесс получения аккредитации.',
    date: '2024-03-10',
    source: 'TechExpert',
    category: 'accreditation'
  },
  {
    id: '4',
    title: 'Новые санитарно-эпидемиологические требования к лабораториям',
    summary: 'Роспотребнадзор утвердил обновленные требования к организации работы испытательных лабораторий в сфере санитарно-эпидемиологического надзора.',
    date: '2024-04-05',
    source: 'Роспотребнадзор',
    category: 'regulation'
  },
  {
    id: '5',
    title: 'Рынок лабораторного оборудования в России: тенденции развития',
    summary: 'Аналитический обзор российского рынка лабораторного оборудования показал рост спроса на отечественные приборы и системы.',
    date: '2024-05-18',
    source: 'Лаборатория и производство',
    category: 'equipment'
  },
  {
    id: '6',
    title: 'Межлабораторные сравнительные испытания: новые программы на 2024 год',
    summary: 'Росаккредитация запустила расширенную программу межлабораторных сравнительных испытаний для повышения качества измерений.',
    date: '2024-06-12',
    source: 'Росаккредитация',
    category: 'accreditation'
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