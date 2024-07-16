import React, { useEffect, useRef } from "react";
import style from "./style.module.css";


type SliderProps = {
    isActive: boolean;
    setAscendantScroll: (isScrolling: boolean) => void;
    children: React.ReactNode
};

export function ProductsSlider({ isActive, setAscendantScroll, children }: SliderProps) {

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



    return (
        <div className={style.sliderOuterContainer} >
            <div className={style.sliderInnerContainer} ref={sliderRef}>
                {children}
            </div>
        </div>
    );
}



const getCurrentTransformX = (element: HTMLElement) => {
    const style = window.getComputedStyle(element);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
};