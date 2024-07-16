
import { useWindowWidth } from 'src/hooks';
import { ProductCard } from './Card/ProductCard';
import { ProductsSlider } from './Slider/ProductsSlider';
import style from './style.module.css';
import { sectionProductSlides } from 'src/configs';


type SectionProductsProps = {
    isSliderActive: boolean;
    setAscendantScroll: (isScrolling: boolean) => void;
};

export function SectionProducts({ isSliderActive, setAscendantScroll }: SectionProductsProps) {
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth < 768;
    return (
        <>
            <div className={style.innerContentWrapper}>
                <div className={style.titleWrapper}>
                    <h2 className="font-heading-reg-32">ЧТО МЫ ПРОИЗВОДИМ</h2>
                    <p className="font-body-1">
                        Мы создаём мебель для любого помещения, потому что у нас нет
                        готовых
                        модулей. Каждый элемент мебели мы разрабатываем и производим
                        специально для вас и вашего интерьера.
                    </p>
                </div>
                {isMobile ?
                    <>
                        {sectionProductSlides.map((slide) => (
                            <ProductCard
                                key={slide.to}
                                to={slide.to}
                                name={slide.name}
                                imageSrc={slide.imageSrc}
                                imageAlt={slide.imageAlt}
                            />
                        ))}
                    </> :
                    <ProductsSlider
                        isActive={isSliderActive}
                        setAscendantScroll={setAscendantScroll}>
                        {sectionProductSlides.map((slide) => (
                            <ProductCard
                                key={slide.to}
                                to={slide.to}
                                name={slide.name}
                                imageSrc={slide.imageSrc}
                                imageAlt={slide.imageAlt}
                            />
                        ))}
                    </ProductsSlider>
                }
            </div>
        </>
    );
}



