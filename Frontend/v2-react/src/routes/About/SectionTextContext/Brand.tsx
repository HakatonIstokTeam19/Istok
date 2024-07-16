import { motion } from "framer-motion";
import { ContactLink } from "src/components"; 
import style from './style.module.css';
import image from 'src/assets/images/content/about-slide9-m.png';

export function Brand({isNormalScroll} : {isNormalScroll: boolean}) {
    return (
        <motion.div
        className={style.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
                <p className={`${style.topLine} fm body-12-fl-16`}>
                    ОБЪЕДИНИВ СВОИ ЗНАНИЯ И ОПЫТ, МЫ СОЗДАЛИ
                </p>
                <p className={`${style.titleBrand} fm head-28-fl-34`}>
                    <span className="text-color-accent">ISTOK</span> — БРЕНД, КОТОРЫЙ
                    ПОНИМАЕТ<br />
                    ЧТО НУЖНО ЛЮДЯМ И ЕГО СОТРУДНИКАМ.
                </p>
                <div className={style.socialLinksWrapper}>
                    <ContactLink
                        to="https://t.me/ISTOK_Connect"
                        ariaLabel="Телеграм канал"
                        iconId="telegram"
                        linkTitle="Официальное сообщество в Telegram"
                        direction="h"
                        color="dark"
                    />
                    <ContactLink
                        to="https://vk.com/istokmebel"
                        ariaLabel="Группа вконтакте"
                        iconId="vkontakte"
                        linkTitle="Официальное сообщество в VK"
                        direction="h"
                        color="dark"
                    />
                </div>
            { isNormalScroll && <img className={style.mobileImg} src={image} alt="bar" /> }
        </motion.div>
    )
}