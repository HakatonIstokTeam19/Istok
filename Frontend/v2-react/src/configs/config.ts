import aboutSlide1 from "src/assets/images/content/about-slide1.png";
import aboutSlide2 from "src/assets/images/content/about-slide2.png";
import aboutSlide3 from "src/assets/images/content/about-slide3.png";
import aboutSlide4 from "src/assets/images/content/about-slide4.png";
import aboutSlide5 from "src/assets/images/content/about-slide5.png";
import aboutSlide6 from "src/assets/images/content/about-slide6.png";
import aboutSlide7 from "src/assets/images/content/about-slide7.png";
import aboutSlide8 from "src/assets/images/content/about-slide8.png";
import aboutSlide9 from "src/assets/images/content/about-slide9.png";
import aboutSlide5m from "src/assets/images/content/about-slide5-m.png";
import aboutSlide6m from "src/assets/images/content/about-slide6-m.png";
import aboutSlide7m from "src/assets/images/content/about-slide7-m.png";
import aboutSlide8m from "src/assets/images/content/about-slide8-m.png";
import image1 from 'src/assets/images/content/home-slider-1-card-1.png';
import image2 from 'src/assets/images/content/home-slider-1-card-2.png';
import image3 from 'src/assets/images/content/home-slider-1-card-3.png';
import image4 from 'src/assets/images/content/home-slider-1-card-4.png';

export const headerLinks = [
    { to: '/', title: 'Главная' },
    { to: '/furniture', title: 'Готовая мебель' },
    { to: '/about', title: 'О нас' },
    { to: './requestSelect', title: 'Оставить заявку' },
    { to: '/profile', title: 'Войти в личный кабинет' },
];


export const connectLinks = [
    {
        linkTitle: 'Чат',
        iconId: 'whatsapp',
        ariaLabel: 'Чат whatsapp',
        to: 'https://wa.me/79311213900?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D1%81%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%BC%21',
    },
    {
        linkTitle: 'Чат',
        iconId: 'telegram',
        ariaLabel: 'Телеграм бот',
        to: 'https://t.me/ISTOKsupport_bot',
    },
    {
        linkTitle: 'Звонок',
        iconId: 'ring',
        ariaLabel: 'Телефон',
        to: 'tel:+78129662997',
    }
];

export const subscriptionLinks = [
    {
        linkTitle: 'Сообщество',
        iconId: 'vkontakte',
        ariaLabel: 'Группа вконтакте',
        to: 'https://vk.com/istokmebel',
    },
    {
        linkTitle: 'Сообщество',
        iconId: 'telegram',
        ariaLabel: 'Телеграм канал',
        to: 'https://t.me/ISTOK_Connect',
    }
];

export const infoLinks = [
    {
        linkTitle: 'Вопросы и ответы',
        to: '/faq',
    },
    {
        linkTitle: 'Программа лояльности',
        to: '/loyalty-program',
    },
    {
        linkTitle: 'Доставка и возврат',
        to: '/delivery-and-return',
    },
    {
        linkTitle: 'Инструкция по уходу',
        to: '/care-instruction',
    },
];

export const linksConfig = [...connectLinks, ...subscriptionLinks];



export const homePageProgressBarItems = [
    { id: "start" },
    { id: "benefits" },
    { id: "products" },
    { id: "materials" },
    { id: "projects" },
    { id: "process" },
    { id: "orderNow" }
]

export const teamSlides = [
    {
        heading: "ТИТОВ ДМИТРИЙ",
        subheading: "ГЕНЕРАЛЬНЫЙ ДИРЕКТОР",
        src: aboutSlide5,
        srcMob: aboutSlide5m,
        alt: "Bearded male in brown sweater",
    },
    {
        heading: "ДЖАФАРОВА АИДА",
        subheading: "СПЕЦИАЛИСТ ПО ОБУСТРОЙСТВУ ДОМА",
        src: aboutSlide6,
        srcMob: aboutSlide6m,
        alt: "female in blue jeans and black pullover reclining in chair",
    },
    {
        heading: "МОРОЗ ДМИТРИЙ",
        subheading: "ТЕХНИЧЕСКИЙ ДИРЕКТОР",
        src: aboutSlide7,
        srcMob: aboutSlide7m,
        alt: "bearded male in black shirt with mischievous look in his eyes",
    },
    {
        heading: "ГОРШКОВ НИКИТА",
        subheading: "ДИЗАЙНЕР",
        src: aboutSlide8,
        srcMob: aboutSlide8m,
        alt: "male designer wearing glasses and brown jacket with a smile on his face",
    },
] as const;



export const aboutPageConfig = [
    {
        id: 'us',
        text: 'Кто мы',
        slideContents: [
            {
                src: aboutSlide1,
                alt: 'female carpenter wearing glasses and holding a tool'
            }
        ],
    },
    {
        id: 'mission',
        text: 'Цель',
        slideContents: [
            {
                src: aboutSlide2,
                alt: 'two engineers looking at bluerpints'
            }
        ],
    },
    {
        id: 'values1',
        text: 'Ценности',
        slideContents: [
            {
                src: aboutSlide3,
                alt: 'male carpenter crafting a piece of furniture with a tool'
            }
        ],
    },
    {
        id: 'values2',
        text: 'Ценности',
        slideContents: [
            {
                src: aboutSlide4,
                alt: 'male carpenter cutting a wooden plank'
            }
        ],
    },
    {
        id: 'team',
        text: 'Команда',
        slideContents: teamSlides
    },
    {
        id: 'brand',
        text: 'Соцсети',
        slideContents: [
            {
                src: aboutSlide9,
                alt: 'spacious neat interior with minimalistic wooden furniture'
            }
        ]
    }
]

export const progressBarItems = aboutPageConfig.reduce((acc, item) => {
    if (!acc.some(i => i.text === item.text)) {
        acc.push({ id: item.id, text: item.text });
    }
    return acc;
}, [] as Array<{ id: string, text: string }>);

export const sectionProductSlides = [
    { to: '/furniture/kitchens', name: 'Кухни', imageSrc: image1, imageAlt: 'Кухни' },
    { to: '/furniture/storageSystems', name: 'Системы хранения', imageSrc: image2, imageAlt: 'Системы хранения' },
    { to: '/furniture/vestibules', name: 'Прихожие', imageSrc: image3, imageAlt: 'Прихожие' },
    { to: '/furniture/fullPack', name: 'Комплексный заказ', imageSrc: image4, imageAlt: 'Комплексный заказ' },
];