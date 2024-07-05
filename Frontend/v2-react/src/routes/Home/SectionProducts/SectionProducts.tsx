import { Link } from 'react-router-dom';
import style from './style.module.css';
import image1 from '../../../assets/images/content/home-slider-1-card-1.png';
import image2 from '../../../assets/images/content/home-slider-1-card-2.png';
import image3 from '../../../assets/images/content/home-slider-1-card-3.png';
import image4 from '../../../assets/images/content/home-slider-1-card-4.png';
import { useEffect, useRef } from 'react';

type SectionProductsProps = {
    isSliderActive: boolean;
    setAscendantScroll: (isScrolling: boolean) => void;
};

export default function SectionProducts({ isSliderActive, setAscendantScroll }: SectionProductsProps) {
    return (
        <>
            <div className={style.innerContentWrapper}>
                <div className={style.titleWrapper}>
                    <h2 className="font-heading-reg-32">ЧТО МЫ ПРОИЗВОДИМ</h2>
                    <p className="font-body-1">
                        Мы создаём мебель для любого помещения, потому что у нас нет
                        готовых<br />
                        модулей. Каждый элемент мебели мы разрабатываем и производим<br />
                        специально для вас и вашего интерьера.
                    </p>
                </div>
                <Slider
                    isActive={isSliderActive}
                    setAscendantScroll={setAscendantScroll} />
            </div>
        </>
    );
}
type SlideProps = {
    to: string;
    name: string;
    imageAlt: string;
    imageSrc: string;
};

function Slide({ to, name, imageAlt, imageSrc }: SlideProps) {
    return (
        <Link className={style.example} to={to}>
            <h3 className={style.exampleName}>{name}</h3>
            <div className={style.imgWrapper}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                />
            </div>
        </Link>
    );
}

type SliderProps = {
    isActive: boolean;
    setAscendantScroll: (isScrolling: boolean) => void;
};

function Slider({ isActive, setAscendantScroll }: SliderProps) {

    const sliderRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider || !isActive) return;

        const minTransform = -567;
        const maxTransform = 493;

        
        const handleScroll = (e: WheelEvent) => {
            e.preventDefault();
            setAscendantScroll(false);
            const currentTransform = getCurrentTransformX(slider);
            let newTransform = currentTransform - e.deltaY;

            newTransform = Math.max(minTransform, Math.min(newTransform, maxTransform));

            slider.style.transform = `translateX(${newTransform}px)`;

            if (newTransform === minTransform || newTransform === maxTransform) {
                setAscendantScroll(true)
            }
        };

        slider.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            slider.removeEventListener('wheel', handleScroll);
        };
    }, [isActive, setAscendantScroll]);

    const getCurrentTransformX = (element: HTMLElement) => {
        const style = window.getComputedStyle(element);
        const matrix = new WebKitCSSMatrix(style.transform);
        return matrix.m41;
    };

    return (
        <div className={style.sliderOuterContainer} >
            <div className={style.sliderInnerContainer} ref={sliderRef}>
                {slides.map((slide) => (
                    <Slide
                        key={slide.to}
                        to={slide.to}
                        name={slide.name}
                        imageSrc={slide.imageSrc}
                        imageAlt={slide.imageAlt}
                    />
                ))}
            </div>
        </div>
    );
}

const slides = [
    { to: '/furniture/kitchens', name: 'Кухни', imageSrc: image1, imageAlt: 'Кухни' },
    { to: '/furniture/storageSystems', name: 'Системы хранения', imageSrc: image2, imageAlt: 'Системы хранения' },
    { to: '/furniture/vestibules', name: 'Прихожие', imageSrc: image3, imageAlt: 'Прихожие' },
    { to: '/furniture/fullPack', name: 'Комплексный заказ', imageSrc: image4, imageAlt: 'Комплексный заказ' },
];