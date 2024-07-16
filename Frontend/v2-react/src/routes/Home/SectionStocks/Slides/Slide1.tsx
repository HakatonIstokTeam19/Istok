import { useState } from "react";
import style from './style.module.css';
import { ModalSignUp, Modal, Button } from "src/components";


export function Slide1() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={style.slide2}>
            <div className={style.sliderInfo}>
                <h2
                    className={`${style.commercialHeading} font-heading-bold-52 text-color-accent`}
                >
                    10&nbsp;000 РУБЛЕЙ
                </h2>
                <p className={`${style.commercialText} font-heading-reg-32`}>
                    ЗА РЕКОМЕНДАЦИЮ И ЗАКАЗ ПО НЕЙ
                </p>
                <Button
                onClick={() => setIsModalOpen(true)}
                    className={style.btnOrder}>
                    Рекомендовать
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