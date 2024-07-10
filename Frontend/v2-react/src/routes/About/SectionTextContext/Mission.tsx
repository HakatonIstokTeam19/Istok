import { motion } from "framer-motion";
import style from './style.module.css';
import image from 'src/assets/images/content/about-slide2-m.png';

export default function Mission({isNormalScroll} : {isNormalScroll: boolean}) {
    return (
        <motion.div
        className={style.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0}}
        >
            <h2 className={`${style.title} fm head-28-fl-34`}>
                <span>Наша  </span><span className="text-color-accent">цель</span>
            </h2>
            <p className={`${style.text} fm body-14-fl-16`} >
                Предоставлять высококачественные услуги по изготовлению мебели
                на заказ и изменить представление людей о комфорте и уюте в
                доме, проявляя заботу о клиентах и окружающей среде.
            </p>
            { isNormalScroll && <img className={style.mobileImg} src={image} alt="bar" /> }
        </motion.div>
    )
}