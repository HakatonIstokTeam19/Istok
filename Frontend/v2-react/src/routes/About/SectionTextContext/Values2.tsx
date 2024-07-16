import { motion } from "framer-motion";
import style from './style.module.css';
import image from 'src/assets/images/content/about-slide4-m.png';

export function Values2({ isNormalScroll} : { isNormalScroll: boolean }) {
    return (
        <motion.div
        className={style.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className={`${style.subtitle} font-heading-bold-16`}>
                Осознание затрат
            </h2>
            <p className={`${style.text} fm body-14-fl-16`}>
                Мы стремимся к тому, чтобы все могли<br />
                себе позволить стильный и удобный дом, поэтому мы поощряем
                экономию<br />
                со смыслом и постоянно оптимизируем процессы внутри нашей
                компании.
            </p>
            <h2 className={`${style.subtitle} font-heading-bold-16`}>
                Забота о людях
            </h2>
            <p className={`${style.text} fm body-14-fl-16`}>
                Мы понимаем, что наша деятельность оказывает влияние на
                окружающую среду,<br />
                и стремимся активно участвовать в решении экологических
                проблем. Мы хотим внести свой вклад в сохранение нашей
                планеты<br />
                и улучшение качества жизни людей.
            </p>
            {isNormalScroll && <img className={style.mobileImg} src={image} alt="carpenter cutting wood" />}
        </motion.div>
    )
}