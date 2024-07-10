import { useState } from 'react';
import { Helmet } from 'react-helmet';
import style from './home.module.css';
import SectionStart from './SectionStart/SectionStart';
import SectionBenefits from './SectionBenefits/sectionBenefits';
import SectionProducts from './SectionProducts/SectionProducts';
import SectionMaterials from './SectionMaterials/SectionMaterials';
import SectionProjects from './SectionProjects/SectionProjects';
import SectionProcess from './SectionProcess/SectionProcess';
import SectionStocks from './SectionStocks/SectionStocks';
import Footer from '../../components/Footer/Footer';
import { homePageProgressBarItems } from '../../configs/config';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import useSectionObserver from '../../hooks/useSectionObserver';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';

export default function Home() {
    const [activeSectionId, setActiveSectionId] = useState(homePageProgressBarItems[0].id);
    const { setIsScrolling, containerRef } = useHorizontalScroll();
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
                    className={`${style.sectionStart} ${style.section}`}
                    id={homePageProgressBarItems[0].id}>
                    <SectionStart />
                </section>
                <section
                    data-h-slide
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
                    className={`${style.sectionProcess}`}
                    id={homePageProgressBarItems[5].id}
                >
                    <SectionProcess />
                </section>
                <section
                    data-h-slide
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