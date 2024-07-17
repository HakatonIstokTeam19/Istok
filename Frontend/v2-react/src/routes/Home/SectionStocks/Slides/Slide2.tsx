import { useState } from 'react';
import style from './style.module.css';
import { ModalSignUp, Modal, Button } from "src/components";
import { useWindowWidth } from 'src/hooks';
import img from "src/assets/images/content/home-slider-3-card-2.png";

export function Slide2() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;
    return (
        <div className={style.slide2}>
            <img className={style.background} src={img} alt="living room interior" />
            <div className={style.sliderInfo}>
                <h2
                    className={`${style.commercialHeading} head-32-fl-52 text-color-accent b`}
                >
                    СКИДКА 10%
                </h2>
                <p className={`${style.commercialText} head-28-fl-32`}>
                    НА ЛЮБОЙ ЗАКАЗ
                </p>
                <ul>
                    <li className="fm body-2-st">Кухня</li>
                    <li className="fm body-2-st">Гардероб</li>
                    <li className="fm body-2-st">Прихожая</li>
                    <li className="fm body-2-st">Комод</li>
                    <li className="fm body-2-st">Стеллаж</li>
                </ul>
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