import style from './style.module.css';
import spritesheet from "../../../assets/images/interface/icons-sprite-sheet.svg"
import { ReactNode, useEffect, useRef, useState } from 'react';
import Button from '../../../components/Button/Button';

export default function SectionStocks() {
    return (
        <div className={style.container}>
            <Slider>
                <Slide1 />
                <Slide2 />
            </Slider>
            <Consult />
        </div>
    )
}

function Slider({ children }: { children: ReactNode[] }) {
    const sliderContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = children.length;

    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--_slide-width") || "1075px");
        if (sliderContainer) {
            sliderContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }
    }, [currentIndex]);

    const nextSlide = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className={style.sliderContainer}>
            <button className={`${style.sliderBtn} ${style.sliderBtnLeft}`} onClick={prevSlide}>
                <svg className={`${style.arrow} ${style.arrowRight}`}>
                    <use
                        href={`${spritesheet}#cardArrowRight`}
                    ></use>
                </svg>
            </button>
            <div className={style.visibleSpace}>
                <div className={style.innerContainer} ref={sliderContainerRef}>
                    {children}
                </div>
            </div>
            <button className={`${style.sliderBtn} ${style.sliderBtnRight}`} onClick={nextSlide}>
                <svg className={style.arrow}>
                    <use
                        href={`${spritesheet}#cardArrowRight`}
                    ></use>
                </svg>
            </button>
        </div>
    )
}

function Slide1() {
    return (
        <div className={style.slide2}>
            <div className={`${style.sliderInfo} ${style.sliderInfoSlide1} `}>
                <h2
                    className={`${style.commercialHeading} font-heading-bold-52 text-color-accent`}
                >
                    10&nbsp;000 РУБЛЕЙ
                </h2>
                <p className={`${style.commercialText} font-heading-reg-32`}>
                    ЗА РЕКОМЕНДАЦИЮ И ЗАКАЗ ПО НЕЙ
                </p>
                <Button
                    className={style.btnOrder}>
                    Рекомендовать
                </Button>
            </div>
        </div>
    )
}

function Slide2() {
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
                    className={style.btnOrder}>
                    Сделать заказ
                </Button>
            </div>
        </div>
    )
}

function Consult() {
    return (
        <div className={style.consulting} id="consult">
            <h2 className={style.heading}>Оставьте заявку</h2>
            <p className={`${style.tagline} font-body-1`}>
                И ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ СПЕЦИАЛИСТА
            </p>
            <div className={style.textContent}>
                <p className={`${style.paragraph} font-body-1`}>
                    В ISTOK мы серьёзно подходим к своей работе и ценим время наших
                    клиентов. Поэтому мы никогда не обещаем то, что не сможем
                    выполнить в срок.
                </p>
                <p className={`${style.paragraph} font-body-1`}>
                    Наш специалист ответит на любой ваш вопрос. РЕГИСТРИРУЙТЕСЬ В
                    ЛИЧНОМ КАБИНЕТЕ И ОСТАВЛЯЙТЕ ЗАЯВКУ
                </p>
                <p className={`${style.paragraph} font-body-1`}>
                    Или просто укажите свои контактные данные и менеджер перезвонит в
                    удобное для вас время!
                </p>
            </div>
            <Button
                    size='smallL'
                    as='a'
                    href='/request-skip-selection'
                    className={style.reqCallBtn}
                    >
                    Заказать звонок
                </Button>
        </div>
    )
}