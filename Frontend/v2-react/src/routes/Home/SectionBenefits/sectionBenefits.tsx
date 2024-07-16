import style from './style.module.css'
import image1 from 'src/assets/images/content/home-benefits-1.png'
import image2 from 'src/assets/images/content/home-benefits-2.png'
import image3 from 'src/assets/images/content/home-benefits-3.png'
import image4 from 'src/assets/images/content/home-benefits-4.png'
import image5 from 'src/assets/images/content/home-benefits-5.png'
import image6 from 'src/assets/images/content/home-benefits-6.png'
import { Slider } from 'src/components'
import { useWindowWidth } from 'src/hooks'
import { BenefitCard } from './Card/BenefitCard'

export function SectionBenefits() {
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;

    return (
    <>
        <div className={style.titleWrapper}>
            <h2 className={`${style.title} font-heading-reg-32`} >
                Почему выбирают <span className="text-color-accent">ИСТОК</span>?
            </h2>
            <p className={`${style.tagline} font-body-1`}>
                Наша команда ежедневно усердно трудится, чтобы предоставить вам лучший продукт и сервис!
            </p>
        </div>
        {
            !isMobile ? (benefitCards.map((card, index) => (
                <BenefitCard
                    key={index}
                    className={`benefit${index + 1}`}
                    heading={card.heading}
                    text={card.text}
                    img={card.img}
                />
            ))) : (
                <Slider
                showArrows={false}
                showDots

                >
                    {
                        benefitCards.map((card, index) => (
                            <BenefitCard
                                key={index}
                                heading={card.heading}
                                text={card.text}
                                img={card.img}
                            />
                    ))}
                </Slider>
            )
        }
    </>
)
}

const benefitCards = [
    {
        heading: "Высокое качество",
        text: "Мы производим мебель на промышленном оборудовании, поэтому гарантируем высокое качество изделий по разумной цене.",
        img: image1,
    },
    {
        heading: "10 лет гарантии!",
        text: "Мы уверены в качестве нашей мебели и предлагаем вам невероятные 10 лет гарантии на все изделия. Это означает, что вы сможете наслаждаться комфортом и функциональностью нашей мебели долгие годы, зная, что мы всегда рядом и готовы помочь.",
        img: image2,
    },
    {
        heading: "Взаимодействие с мебелью во время проектирования",
        text: "Интерактивная модель в мобильном приложение и/или в масштабе 1:1 в VR гарнитуре при встрече. Отслеживание статуса изготовления мебели на всех этапах.",
        img: image3,
    },
    {
        heading: "Бесплатный дизайн-проект",
        text: "Наши специалисты подскажут, как воплотить в реальность Ваши идеи не только стильно, но и эргономично!",
        img: image4,
    },
    {
        heading: "Рассрочка 0-0-6",
        text: "Честная рассрочка без переплат и первоначального взноса у банков-партнеров.",
        img: image5,
    },
    {
        heading: "Мы всегда рядом",
        text: "Наши специалисты готовы прийти вам на помощь в любое время суток. Мы всегда на связи.",
        img: image6,
    },
];


// function Benefits() {
//     return (
//         <>
// <div className={`${style.benefit} ${style.benefit1}`}>
//             <h3 className={`${style.benefitHeading} font-heading-bold-16`}>Высокое качество</h3>
//             <p className={`${style.mainText} font-body-2`}>
//                 Мы производим мебель на промышленном оборудовании, поэтому
//                 гарантируем высокое<br />
//                 качество изделий по разумной цене.
//             </p>
//             <img
//                 className={style.benefitImage}
//                 src={image1}
//                 aria-hidden="true"
//             />
//         </div>
//         <div className={`${style.benefit} ${style.benefit2}`}>
//             <img
//                 className={style.benefitImage}
//                 src={image2}
//                 aria-hidden="true"
//             />
//             <h3 className={`${style.benefitHeading} font-heading-bold-16`}>10 лет гарантии!</h3>
//             <p className={`${style.mainText} font-body-2`}>
//                 Мы уверены в качестве нашей мебели и предлагаем вам невероятные 10
//                 лет гарантии на все изделия. Это означает, что вы сможете
//                 наслаждаться комфортом и функциональностью нашей мебели долгие годы,
//                 зная, что мы всегда рядом и готовы помочь.
//             </p>
//         </div>
//         <div className={`${style.benefit} ${style.benefit3}`}>
//             <h3 className={`${style.benefitHeading} font-heading-bold-16`}>
//                 Взаимодействие с мебелью во время<br />
//                 проектирования
//             </h3>
//             <p className={`${style.mainText} font-body-2`}>
//                 Интерактивная модель в мобильном приложение и/или в масштабе 1:1 в
//                 VR гарнитуре при встрече. Отслеживание статуса изготовления мебели
//                 на всех этапах.
//             </p>
//             <img
//                 className={style.benefitImage}
//                 src={image3}
//                 aria-hidden="true"
//             />
//         </div>
//         <div className={`${style.benefit} ${style.benefit4}`}>
//             <img
//                 className={style.benefitImage}
//                 src={image4}
//                 aria-hidden="true"
//             />
//             <h3 className={`${style.benefitHeading} font-heading-bold-16`}>
//                 Бесплатный дизайн-проект
//             </h3>
//             <p className={`${style.mainText} font-body-2`}>
//                 Наши специалисты подскажут, как воплотить в реальность Ваши идеи не
//                 только стильно, но и эргономично!
//             </p>
//         </div>
//         <div className={`${style.benefit} ${style.benefit5}`}>
//             <h3 className={`${style.benefitHeading} font-heading-bold-16`}>Рассрочка 0-0-6</h3>
//             <p className={`${style.mainText} font-body-2`}>
//                 Честная рассрочка без переплат и первоначального взноса у
//                 банков-партнеров.
//             </p>
//             <img
//                 className={style.benefitImage}
//                 src={image5}
//                 aria-hidden="true"
//             />
//         </div>
//         <div className={`${style.benefit} ${style.benefit6}`}>
//             <img
//                 className={style.benefitImage}
//                 src={image6}
//                 aria-hidden="true"
//             />
//             <h3 className={`${style.benefitHeading} font-heading-bold-16`}>Мы всегда рядом</h3>
//             <p className={`${style.mainText} font-body-2`}>
//                 Наши специалисты готовы прийти вам на помощь в любое время суток. Мы
//                 всегда на связи.
//             </p>
//         </div>
//         </>
//     );
// }