import { motion } from "framer-motion";
import style from './style.module.css';
import { TeamSectionCard } from "../TeamSectionCard/TeamSectionCard";
import { teamSlides } from "../data";

export function Team({ isNormalScroll }: { isNormalScroll: boolean }) {
    return (
        <motion.div
            className={style.content}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
        >
            <h2 className={`${style.title} fm head-28-fl-32`}>КОМАНДА</h2>
            <p className={`${style.text} ${style.text4} fm body-14-fl-16`}>
                У нашей команды большой опыт работы в крупной международной
                мебельной компании, где мы усвоили, что бизнес делается через
                людей и для людей, важность качества оказания услуги и
                соблюдения гарантий.
            </p>
            {isNormalScroll &&
                teamSlides.map((slide, index) =>
                    <TeamSectionCard
                        src={slide.srcMob}
                        alt={slide.alt}
                        heading={slide.heading}
                        subheading={slide.subheading}
                        imgClass={style.mobileImg}
                        key={index} />)}
        </motion.div>
    )
}