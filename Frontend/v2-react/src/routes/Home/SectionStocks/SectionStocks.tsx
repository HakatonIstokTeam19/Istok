import { Slider } from 'src/components';
import { Slide1 } from './Slides/Slide1';
import { Slide2 } from './Slides/Slide2';
import { Consult } from './Consult/Consult';
import { useWindowWidth } from 'src/hooks';

export function SectionStocks() {
    const windowWidth = useWindowWidth();
    const isMobile = windowWidth <= 768;
    return (
        <>
            <Slider
            showArrows={!isMobile}
            showDots={isMobile}
            >
                <Slide1 />
                <Slide2 />
            </Slider>
            <Consult />
        </>
    )
}