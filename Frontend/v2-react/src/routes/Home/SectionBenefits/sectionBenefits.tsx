import style from './style.module.css'
import { Slider } from 'src/components'
import { useWindowWidth } from 'src/hooks'
import { BenefitCard } from './Card/BenefitCard'
import { benefitCards } from '../data';


export function SectionBenefits() {
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;

    return (
        <>
            <div className={style.titleWrapper}>
                <h2 className={`${style.title} fm head-28-fl-32`} >
                    Почему выбирают <span className="text-color-accent b">ИСТОК</span>?
                </h2>
                <p className={`${style.tagline} body-1-st`}>
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