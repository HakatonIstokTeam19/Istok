import { motion } from "framer-motion";
import style from './style.module.css';
import image from 'src/assets/images/content/about-slide1-m.png';

export function Us({isNormalScroll} : {isNormalScroll: boolean}) {
    return (
        <motion.div
        className={style.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1 className={`${style.title}  ${style.titleUs} fm head-28-fl-52` }>
                <span>Кто</span> <span className="text-color-accent">мы?</span>
            </h1>
            <p className={`${style.text} fm body-12-fl-16`}>
                КОМПАНИЯ ISTOK —<br />
                ЭТО СТАРТАП ОПЫТНОЙ КОМАНДЫ ПРОФЕССИОНАЛОВ. 
            </p>
            <p className={`${style.text} fm body-14-fl-16`}>
                Наш бренд - это высококачественный сервис с использованием
                современных технологий как для взаимодействия с клиентами, так
                и для организации производства.
            </p>
            { isNormalScroll && <img className={style.mobileImg} src={image} alt="team" />}
        </motion.div>
    )
}