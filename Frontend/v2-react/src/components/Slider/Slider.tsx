import { ReactNode, useEffect, useRef, useState } from 'react';
import style from './style.module.css';
import { Arrow } from './Arrow/Arrow';
import { Dot } from './Dot/Dot';

type SliderProps = {
    children: ReactNode[];
    showDots?: boolean;
    showArrows?: boolean;
    slidesShown?: number;
    width?: string;
    height?: string;
    slideGap?: string;
}

export function Slider({
    children,
    showDots = true,
    showArrows = true,
    slidesShown = 1,
    width = '100%',
    height = 'auto',
    slideGap = '0px'

}: SliderProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [touchStart, setTouchStart] = useState(0);
    const [touchCurrent, setTouchCurrent] = useState(0);
    // const [touchEnd, setTouchEnd] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const totalSlides = children.length;

    useEffect(() => {
        const updateSlideWidth = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                const gapWidth = parseFloat(slideGap) * (slidesShown - 1);
                const newSlideWidth = (containerWidth - gapWidth) / slidesShown;
                setSlideWidth(newSlideWidth);
            }
        };

        updateSlideWidth();
        window.addEventListener('resize', updateSlideWidth);

        return () => window.removeEventListener('resize', updateSlideWidth);
    }, [slidesShown, slideGap]);


    useEffect(() => {
        const sliderContainer = containerRef.current;
        if (sliderContainer) {
            const translateX = currentIndex * (slideWidth + parseFloat(slideGap));
            sliderContainer.style.transform = `translateX(-${translateX}px)`;
        }
    }, [currentIndex, slideWidth, slideGap]);

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, totalSlides - slidesShown));
    }
    
    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
        setTouchCurrent(e.targetTouches[0].clientX);
      };
    
      const handleTouchMove = (e: React.TouchEvent) => {
        setTouchCurrent(e.targetTouches[0].clientX);
        const delta = touchStart - touchCurrent;
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(-${delta}px)`;
        }
      };
    
      const handleTouchEnd = () => {
        if (!touchStart || !touchCurrent) return;
        const distance = touchStart - touchCurrent;
        const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - slidesShown));
    } else if (distance < -minSwipeDistance) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
      };

    const isPrevDisabled = currentIndex === 0;
    const isNextDisabled = currentIndex === totalSlides - 1;

    const sliderStyle = {
        width,
        height,
        '--slide-gap': slideGap,
    } as React.CSSProperties;

    const slideStyle = {
        width: `${slideWidth}px`,
        flexShrink: 0,
    };

    const dotsArray = Array.from({ length: totalSlides - slidesShown + 1 }, (_, index) => index);

    return (
        <div
            className={style.sliderContainer}
            style={sliderStyle}>

            {showArrows && <Arrow right={false} onClick={prevSlide} disabled={isPrevDisabled} />}

            <div className={style.displayWindow}>
                <div
                    className={style.innerContainer}
                    ref={containerRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    >
                    {children.map((child, index) => (
                        <div key={index} style={slideStyle}>
                            {child}
                        </div>
                    ))}
                </div>
                
                {showDots && (
                    <div className={style.dotWrapper}>
                        <div className={style.dots}>
                        {dotsArray.map((_, index) => (
                            <Dot
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                active={index === currentIndex}
                            ></Dot>
                        ))}
                    </div>
                    </div>
                )}
            </div>

            {showArrows && <Arrow right={true} onClick={nextSlide} disabled={isNextDisabled} />}

        </div>
    )
}

