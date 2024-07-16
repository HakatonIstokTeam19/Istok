
import { useState } from 'react';
import { motion } from 'framer-motion';
import  { Button, Modal, ModalSignUp } from 'src/components'
import style from './style.module.css';
import hero from 'src/assets/images/content/home-page-1-bg-1.png';
import heroM from 'src/assets/images/content/home-page-1-bg-1-m.png';

export function SectionStart({ isScrollHorizontal } : { isScrollHorizontal: boolean }) {
    const isUserSignedUp = false;
    const titleWords = ['с', 'нами', 'начинается', 'уют', 'вашего', 'дома'];
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                className={style.contentOuterWrapper}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className={style.contentInnerWrapper}>
                    <h1 className={`${style.title} fm head-28-fl-52`}>
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className={word === 'нами' || word === 'вашего' ? "text-color-accent b" : ""}
                            >
                                {word}{' '}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.p
                        className={`${style.tagline} ${"fm body-12-fl-16"}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        ПРОИЗВОДСТВО МЕБЕЛИ НА ЗАКАЗ<br />
                        В САНКТ-ПЕТЕРБУРГЕ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ
                    </motion.p>
                    <motion.div
                    className={style.buttonWrapper}
                        initial={{ opacity: 0, scale: .8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                    >
                        {isScrollHorizontal && 
                        <Button className={style.button} onClick={() => setIsModalOpen(true)}>
                            Записаться на встречу
                        </Button>}
                    </motion.div>
                </div>
            </motion.div>
            <motion.img
                srcSet={`${heroM} 768w, ${hero} 1120w`}
                sizes='(max-width: 768px) 768px, 1120px'
                src={hero}
                className={style.image}
                alt="living room interior"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
            />
            {!isScrollHorizontal && 
                <Button className={style.button} size='smallL' onClick={() => setIsModalOpen(true)}>
                    Записаться на встречу
                </Button>
            }
            {!isUserSignedUp && isModalOpen &&
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    isOpen={isModalOpen}>
                    <ModalSignUp onPrevModalClose={() => setIsModalOpen(false)} />
                </Modal>
            }
        </>
    )
}