import image1 from 'src/assets/images/content/home-slider-1-card-1.png';
import image2 from 'src/assets/images/content/home-slider-1-card-2.png';
import image3 from 'src/assets/images/content/home-slider-1-card-3.png';
import image4 from 'src/assets/images/content/home-slider-1-card-4.png';
import frameImage from 'src/assets/images/content/home-slider-2-card-frame.png';
import countertopsImage from 'src/assets/images/content/home-slider-2-card-countertops.png';
import frontsImage from 'src/assets/images/content/home-slider-2-card-fronts.png';
import fittingsImage from 'src/assets/images/content/home-slider-2-card-fittings.png';
import benefits1 from 'src/assets/images/content/home-benefits-1.png'
import benefits2 from 'src/assets/images/content/home-benefits-2.png'
import benefits3 from 'src/assets/images/content/home-benefits-3.png'
import benefits4 from 'src/assets/images/content/home-benefits-4.png'
import benefits5 from 'src/assets/images/content/home-benefits-5.png'
import benefits6 from 'src/assets/images/content/home-benefits-6.png'
import img1 from '/src/assets/images/content/home-projects-card-1.png'
import img2 from '/src/assets/images/content/home-projects-card-2.png'
import img3 from '/src/assets/images/content/home-projects-card-3.png'
import { FurnitureType, Project } from 'src/types';

export const homePageProgressBarItems = [
    { id: "start" },
    { id: "benefits" },
    { id: "products" },
    { id: "materials" },
    { id: "projects" },
    { id: "process" },
    { id: "orderNow" }
]

const slugs = Object.keys(FurnitureType) as Array<keyof typeof FurnitureType>;
export const sectionProductSlides = [
    { to: `furniture/${slugs[1]}`, name: 'Кухни', imageSrc: image1, imageAlt: 'Кухни' },
    { to: `furniture/${slugs[3]}`, name: 'Системы хранения', imageSrc: image2, imageAlt: 'Системы хранения' },
    { to: `furniture/${slugs[4]}`, name: 'Прихожие', imageSrc: image3, imageAlt: 'Прихожие' },
    { to: '/furniture/fullPack', name: 'Комплексный заказ', imageSrc: image4, imageAlt: 'Комплексный заказ' },
];


export enum FurnitureComponents {
    FRAME = 'frame',
    COUNTERTOPS = 'countertops',
    FRONTS = 'fronts',
    FITTINGS = 'fittings',
  }
  
export interface MaterialCategory {
    id: FurnitureComponents;
    name: string;
    image: string;
    details: { title: string; items: string[] }[];
  }
  
export const materialCategories: MaterialCategory[] = [
    {
      id: FurnitureComponents.FRAME,
      name: 'Корпус',
      image: frameImage,
      details: [
        { title: 'ЛДСП', items: ['Egger', 'Nordeco'] },
        { title: 'МДФ', items: [] },
      ],
    },
    {
      id: FurnitureComponents.COUNTERTOPS,
      name: 'Столешницы',
      image: countertopsImage,
      details: [
        { title: 'ДСП Столешницы', items: ['SLOTEX', 'Egger', 'СКИФ'] },
        { title: 'HPL Compact laminat', items: ['SLOTEX', 'Sensola'] },
      ],
    },
    {
      id: FurnitureComponents.FRONTS,
      name: 'Фасады',
      image: frontsImage,
      details: [
        { title: 'ЛДСП', items: ['Egger', 'Nordeco'] },
        { title: 'МДФ в пленке ПВХ', items: ['ТАДЖ', 'Adilet'] },
        { title: 'МДФ с пластиковым покрытием AGT', items: [] },
        { title: 'МДФ покрытый эмалью', items: ['Палитры RAL', 'Палитры Tikkurila'] },
        { title: 'МДФ покрытый нано-пластиком', items: ['FENIX'] },
      ],
    },
    {
      id: FurnitureComponents.FITTINGS,
      name: 'Фурнитура',
      image: fittingsImage,
      details: [
        { title: 'Hettich (Германия)', items: [] },
        { title: 'BLUM (Австрия)', items: [] },
      ],
    },
  ];
  

  
export const benefitCards = [
  {
      heading: "Высокое качество",
      text: "Мы производим мебель на промышленном оборудовании, поэтому гарантируем высокое качество изделий по разумной цене.",
      img: benefits1,
  },
  {
      heading: "10 лет гарантии!",
      text: "Мы уверены в качестве нашей мебели и предлагаем вам невероятные 10 лет гарантии на все изделия. Это означает, что вы сможете наслаждаться комфортом и функциональностью нашей мебели долгие годы, зная, что мы всегда рядом и готовы помочь.",
      img: benefits2,
  },
  {
      heading: "Взаимодействие с мебелью во время проектирования",
      text: "Интерактивная модель в мобильном приложение и/или в масштабе 1:1 в VR гарнитуре при встрече. Отслеживание статуса изготовления мебели на всех этапах.",
      img: benefits3,
  },
  {
      heading: "Бесплатный дизайн-проект",
      text: "Наши специалисты подскажут, как воплотить в реальность Ваши идеи не только стильно, но и эргономично!",
      img: benefits4,
  },
  {
      heading: "Рассрочка 0-0-6",
      text: "Честная рассрочка без переплат и первоначального взноса у банков-партнеров.",
      img: benefits5,
  },
  {
      heading: "Мы всегда рядом",
      text: "Наши специалисты готовы прийти вам на помощь в любое время суток. Мы всегда на связи.",
      img: benefits6,
  },
];


export const processSteps = [
  {
      title: "Онлайн консультация",
      description: "Наш специалист свяжется с Вами, поможет сделать выбор и запишет на встречу с дизайнером"
  },
  {
      title: "Встреча с дизайнером",
      description: "Дизайнер привезет с собой материалы, спроектирует стильный и эргономичный проект, и оформит Ваш заказ."
  },
  {
      title: "Технический замер",
      description: "Мы приедет со специализированным оборудованием, замерим каждую деталь Вашего помещения."
  },
  {
      title: "Конструирование",
      description: "Наши конструктора создадут Вашу мебель с нуля. Каждый модуль уникален!"
  },
  {
      title: "Производство",
      description: "Современное промышленное оборудование создаст для Вас мебель, соответствующую самым высоким стандартам качества."
  },
  {
      title: "Доставка и монтаж",
      description: "Наш специалист свяжется для согласования даты доставки и монтажа."
  },
  {
      title: "Онлайн консультация",
      description: "Специалист контроля качества позвонит после сборки и узнает, все ли Вам понравилось!"
  }
];


  
export const projects: Project[] = [
  {
    title: 'Кухня в квартиру',
    image: img1,
    alt: 'kitchen',
  },
  {
    title: 'Шкаф',
    image: img2,
    alt: 'wardrobe',
  },
  {
    title: 'Гардероб в спальню',
    image: img3,
    alt: 'wardrobe',
  },
];


