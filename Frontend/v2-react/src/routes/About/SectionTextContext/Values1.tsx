import { motion } from "framer-motion";
import style from './style.module.css';
import image from 'src/assets/images/content/about-slide3-m.png';

export function Values1({ isNormalScroll} : { isNormalScroll: boolean }) {
    return (
        <motion.div
            className={style.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className={`${style.title} fm head-28-fl-34`}>
                <span>Ценности </span>
                <span className="text-color-accent">исток</span>
            </h2>
                <h3 className={`${style.subtitle} font-heading-bold-16`}>Простота</h3>
                <p className={`${style.text} fm body-14-fl-16`}>
                    Это неотъемлемая часть нашей компании. Она позволяет нам
                    всегда оставаться верными себе и быть реалистичными в любой
                    ситуации. Мы выполняем нашу повседневную работу, не усложняя
                    её лишней бюрократией.
                </p>
                <h3 className={`${style.subtitle} font-heading-bold-16`}>Отличие</h3>
                <p className={`${style.text} fm body-14-fl-16`}>
                    Мы отличаемся от других компаний и не стремимся к тому, чтобы
                    быть похожими на них. Мы рискуем и решаем проблемы
                    нестандартными способами, проводим эксперименты, не боимся
                    ошибаться и несем за свои действия ответственность.
                </p>
                {isNormalScroll && <img className={style.mobileImg} src={image} alt="carpenter cutting wood" /> }
        </motion.div>
    )
}