
import { motion } from 'framer-motion';
import style from './style.module.css';
import Button from '../../../components/Button/Button';
import hero from '../../../assets/images/content/home-page-1-bg-1.png';
import { useState } from 'react';
import Modal from '../../../components/Modal/Modal';
import ModalSignUp from '../../../components/Modal/ModalContent/SignUp/ModalSignUp';

export default function SectionStart() {
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
                    <h1 className={`${style.title} ${"font-heading-reg-52"}`}>
                        {titleWords.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className={word === 'нами' || word === 'вашего' ? "text-color-accent" : ""}
                            >
                                {word}{' '}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.p 
                        className={`${style.tagline} ${"font-body-1"}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                    >
                        ПРОИЗВОДСТВО МЕБЕЛИ НА ЗАКАЗ<br />
                        В САНКТ-ПЕТЕРБУРГЕ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ
                    </motion.p>
                    <motion.div
                    className={style.button}
                    initial={{ opacity: 0, scale: .8 }}
                    animate={{ opacity: 1, scale: 1}}
                    transition={{ delay: 2, duration: 0.5 }}
                    >
                        <Button onClick={()=> setIsModalOpen(true)}>
                                Записаться на встречу
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
            <motion.img
                src={hero}
                alt="living room interior"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
            />
            {!isUserSignedUp && isModalOpen &&
                <Modal
                onClose={() => setIsModalOpen(false)}
                isOpen={isModalOpen}>
                    <ModalSignUp onPrevModalClose={() => setIsModalOpen(false)}/>
                </Modal>
            }
        </>
    )
}