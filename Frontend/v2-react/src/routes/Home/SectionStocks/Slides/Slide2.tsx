import { useState } from 'react';
import style from './style.module.css';
import { ModalSignUp, Modal, Button } from "src/components";

export function Slide2() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={style.slide1}>
            <div className={style.sliderInfo}>
                <h2
                    className={`${style.commercialHeading} font-heading-bold-52 text-color-accent`}
                >
                    СКИДКА 10%
                </h2>
                <p className={`${style.commercialText} font-heading-reg-32`}>
                    НА ЛЮБОЙ ЗАКАЗ
                </p>
                <ul>
                    <li>Кухня</li>
                    <li>Гардероб</li>
                    <li>Прихожая</li>
                    <li>Комод</li>
                    <li>Стеллаж</li>
                </ul>
                <Button
                onClick={() => setIsModalOpen(true)}
                    className={style.btnOrder}>
                    Сделать заказ
                </Button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}  
            >
                <ModalSignUp onPrevModalClose={()=> setIsModalOpen(false)}/>
            </Modal>
        </div>
    )
}