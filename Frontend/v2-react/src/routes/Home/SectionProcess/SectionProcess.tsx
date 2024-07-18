import { processSteps } from '../data';
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
                {processSteps.map((step, index) => (
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
