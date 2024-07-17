import { useState } from "react";
import style from './style.module.css';
import { ModalSignUp, Modal, Button } from "src/components";
import { useWindowWidth } from "src/hooks";


export function Slide1() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;

    return (
        <div className={style.slide2}>
            <div className={style.sliderInfo}>
                <h2
                    className={`${style.commercialHeading} head-32-fl-52 text-color-accent b`}
                >
                    10&nbsp;000 РУБЛЕЙ
                </h2>
                <p className={`${style.commercialText} head-28-fl-32`}>
                    ЗА РЕКОМЕНДАЦИЮ И ЗАКАЗ ПО НЕЙ
                </p>
                <Button
                    size={isMobile ? 'smallL' : 'large'}
                    onClick={() => setIsModalOpen(true)}
                    className={style.btnOrder}>
                    Рекомендовать
                </Button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            >
                <ModalSignUp onPrevModalClose={() => setIsModalOpen(false)} />
            </Modal>
        </div>
    )
}