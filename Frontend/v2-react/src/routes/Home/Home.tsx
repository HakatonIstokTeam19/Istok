import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { homePageProgressBarItems } from 'src/configs/config';
import { ProgressBar, Footer, } from 'src/components';
import { useHorizontalScroll, useSectionObserver, useWindowWidth} from 'src/hooks';
import {SectionStart} from './SectionStart/SectionStart';
import {SectionBenefits} from './SectionBenefits/SectionBenefits';
import {SectionProducts} from './SectionProducts/SectionProducts';
import {SectionMaterials} from './SectionMaterials/SectionMaterials';
import {SectionProjects} from './SectionProjects/SectionProjects';
import {SectionProcess} from './SectionProcess/SectionProcess';
import {SectionStocks} from './SectionStocks/SectionStocks';
import style from './home.module.css';
import { breakpoints } from 'src/configs';

export function Home() {
    const [activeSectionId, setActiveSectionId] = useState(homePageProgressBarItems[0].id);
    const [isScrolling, setIsScrolling] = useState(true);
    const containerRef = useHorizontalScroll({ enabled: isScrolling });
    const windowWidth = useWindowWidth();
    const isScrollHorizontal = windowWidth > breakpoints.md;
    useSectionObserver({ setActiveSectionId });

    return (
        <>
            <Helmet>
                <title>Istok - Главная</title>
                <meta name="description" content="Добро пожаловать в Istok" />
            </Helmet>
            <div ref={containerRef} className={style.container}>
                <section
                    data-h-slide
                    className={`${style.section} ${style.sectionStart} `}
                    id={homePageProgressBarItems[0].id}>
                    <SectionStart isScrollHorizontal={isScrollHorizontal}/>
                </section>
                <section
                    data-h-slide
                    className={`${style.section} ${style.sectionBenefits} `}
                    id={homePageProgressBarItems[1].id}>
                    <SectionBenefits />
                </section>
                <section
                    data-h-slide
                    className={`${style.section} ${style.sectionProducts}`}
                    id={homePageProgressBarItems[2].id}>
                    <SectionProducts
                        isSliderActive={activeSectionId === homePageProgressBarItems[2].id}
                        setAscendantScroll={setIsScrolling}
                    />
                </section>
                <section
                    data-h-slide
                    className={`${style.section} ${style.sectionMaterials}`}
                    id={homePageProgressBarItems[3].id}
                >
                    <SectionMaterials />
                </section>
                <section
                    data-h-slide
                    className={`${style.section} ${style.sectionProjects}`}
                    id={homePageProgressBarItems[4].id}>
                    <SectionProjects />
                </section>
                <section
                    data-h-slide
                    className={`${style.section} ${style.sectionProcess} `}
                    id={homePageProgressBarItems[5].id}
                >
                    <SectionProcess />
                </section>
                <section
                    data-h-slide
                    className={`${style.section} ${style.sectionStocks} `}
                    id={homePageProgressBarItems[6].id}>
                    <SectionStocks />
                </section>
                <ProgressBar
                    activeSectionId={activeSectionId}
                    setActiveSectionId={setActiveSectionId}
                    items={homePageProgressBarItems} />
                <Footer />
            </div>
        </>
    );
}