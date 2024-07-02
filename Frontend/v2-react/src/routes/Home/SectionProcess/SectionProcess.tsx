import style from './style.module.css';

export default function SectionProcess() {
    return (
        <>
            <h2 className={style.heading}>
                Уникальный технологический
                <span className="text-color-accent"> ПРОЦЕСС </span> по запатентованной
                технологии
            </h2>
            <ol className={style.process}>
                <li className={style.processStep}>
                    <h3 className="font-heading-bold-16">Онлайн консультация</h3>
                    <p className={`${style.stepDescription} font-body-2`}>
                        Наш специалист свяжется<br />
                        с Вами, поможет сделать выбор<br />
                        и запишет на встречу с дизайнером
                    </p>
                </li>
                <li className={style.processStep}>
                    <h3 className="font-heading-bold-16">Встреча с дизайнером</h3>
                    <p className={`${style.stepDescription} font-body-2`}>
                        Дизайнер привезет с собой материалы,<br />
                        спроектирует стильный<br />
                        и эргономичный проект, и оформит Ваш заказ.
                    </p>
                </li>
                <li className={style.processStep}>
                    <h3 className="font-heading-bold-16">Технический замер</h3>
                    <p className={`${style.stepDescription} font-body-2`}>
                        Мы приедет со специализированным<br />
                        оборудованием, замерим каждую<br />
                        деталь Вашего помещения.
                    </p>
                </li>
                <li className={style.processStep}>
                    <h3 className="font-heading-bold-16">Конструирование</h3>
                    <p className={`${style.stepDescription} font-body-2`}>
                        Наши конструктора создадут<br />
                        Вашу мебель с нуля.<br />
                        Каждый модуль уникален!
                    </p>
                </li>
                <li className={style.processStep}>
                    <h3 className="font-heading-bold-16">Производство</h3>
                    <p className={`${style.stepDescription} font-body-2`}>
                        Современное промышленное оборудование<br />
                        создаст для Вас мебель, соответствующую<br />
                        самым высоким стандартам качества.
                    </p>
                </li>
                <li className={style.processStep}>
                    <h3 className="font-heading-bold-16">Доставка и монтаж</h3>
                    <p className={`${style.stepDescription} font-body-2`}>
                        Наш специалист свяжется<br />
                        для согласования даты<br />
                        доставки и монтажа.
                    </p>
                </li>
                <li className={style.processStep}>
                    <h3 className="font-heading-bold-16">Онлайн консультация</h3>
                    <p className={`${style.stepDescription} font-body-2`}>
                        Специалист контроля качества<br />
                        позвонит после сборки<br />
                        и узнает, все ли Вам понравилось!
                    </p>
                </li>
            </ol>
        </>
    )
}