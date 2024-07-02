import style from './style.module.css'

export default function SectionBenefits() {
    return (
    <section className={style.contentOuterWrapper} id="benefits">
        <div className={style.titleWrapper}>
            <h2 className={`${style.title} font-heading-reg-32`} >
                Почему выбирают <span className="text-color-accent">ИСТОК</span>?
            </h2>
            <p className={`${style.tagline} font-body-1`}>
                Наша команда ежедневно усердно трудится,<br />
                чтобы предоставить вам лучший продукт и сервис!
            </p>
        </div>
        <div className={`${style.benefit} ${style.benefit1}`}>
            <h3 className={`${style.benefitHeading} font-heading-bold-16`}>Высокое качество</h3>
            <p className={`${style.mainText} font-body-2`}>
                Мы производим мебель на промышленном оборудовании, поэтому
                гарантируем высокое<br />
                качество изделий по разумной цене.
            </p>
            <img
                className={style.benefitImage}
                src="./src/assets/images/privilege1.png"
                alt="privilege1"
            />
        </div>
        <div className={`${style.benefit} ${style.benefit2}`}>
            <img
                className={style.benefitImage}
                src="./src/assets/images/privilege2.png"
                alt="privilege2"
            />
            <h3 className={`${style.benefitHeading} font-heading-bold-16`}>10 лет гарантии!</h3>
            <p className={`${style.mainText} font-body-2`}>
                Мы уверены в качестве нашей мебели и предлагаем вам невероятные 10
                лет гарантии на все изделия. Это означает, что вы сможете
                наслаждаться комфортом и функциональностью нашей мебели долгие годы,
                зная, что мы всегда рядом и готовы помочь.
            </p>
        </div>
        <div className={`${style.benefit} ${style.benefit3}`}>
            <h3 className={`${style.benefitHeading} font-heading-bold-16`}>
                Взаимодействие с мебелью во время<br />
                проектирования
            </h3>
            <p className={`${style.mainText} font-body-2`}>
                Интерактивная модель в мобильном приложение и/или в масштабе 1:1 в
                VR гарнитуре при встрече. Отслеживание статуса изготовления мебели
                на всех этапах.
            </p>
            <img
                className={style.benefitImage}
                src="./src/assets/images/privilege3.png"
                alt="privilege3"
            />
        </div>
        <div className={`${style.benefit} ${style.benefit4}`}>
            <img
                className={style.benefitImage}
                src="./src/assets/images/privilege4.png"
                alt="privilege4"
            />
            <h3 className={`${style.benefitHeading} font-heading-bold-16`}>
                Бесплатный дизайн-проект
            </h3>
            <p className={`${style.mainText} font-body-2`}>
                Наши специалисты подскажут, как воплотить в реальность Ваши идеи не
                только стильно, но и эргономично!
            </p>
        </div>
        <div className={`${style.benefit} ${style.benefit5}`}>
            <h3 className={`${style.benefitHeading} font-heading-bold-16`}>Рассрочка 0-0-6</h3>
            <p className={`${style.mainText} font-body-2`}>
                Честная рассрочка без переплат и первоначального взноса у
                банков-партнеров.
            </p>
            <img
                className={style.benefitImage}
                src="./src/assets/images/privilege5.png"
                alt="privilege5"
            />
        </div>
        <div className={`${style.benefit} ${style.benefit6}`}>
            <img
                className={style.benefitImage}
                src="./src/assets/images/privilege6.png"
                alt="privilege6"
            />
            <h3 className={`${style.benefitHeading} font-heading-bold-16`}>Мы всегда рядом</h3>
            <p className={`${style.mainText} font-body-2`}>
                Наши специалисты готовы прийти вам на помощь в любое время суток. Мы
                всегда на связи.
            </p>
        </div>
    </section>)
}