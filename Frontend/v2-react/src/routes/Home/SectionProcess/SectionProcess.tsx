import style from './style.module.css';

export function SectionProcess() {

    return (
        <>
            <h2 className={`${style.heading} fm head-28-fl-32`}>
                Уникальный технологический
                <span className="text-color-accent"> ПРОЦЕСС </span> по запатентованной
                технологии
            </h2>
            <ol className={style.process}>
                {steps.map((step, index) => (
                    <li className={style.processStep} key={index}>
                        <h3 className={`${style.stepHeading} fm body-1-st bx`}>{step.title}</h3>
                        <p className={`${style.stepDescription} body-2-st`}>
                            {step.description}
                        </p>
                    </li>
                ))}
            </ol>
        </>
    );
}

const steps = [
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