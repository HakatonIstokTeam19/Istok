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