import { useEffect, useRef } from 'react';
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

export default function Home() {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            const handleWheel = (e: WheelEvent) => {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            };
            container.addEventListener('wheel', handleWheel);
            return () => container.removeEventListener('wheel', handleWheel);
        }
    }, []);
    
    return (
        <>
            <Helmet>
                <title>Istok - Главная</title>
                <meta name="description" content="Добро пожаловать в Istok" />
            </Helmet>
            <div ref={containerRef}  className={style.container}>
                <section className={`${style.sectionStart} ${style.section}`} id="start">
                    <SectionStart />
                </section>
                <section
                    className={`${style.section}`}
                    id="benefits">
                        <SectionBenefits />
                </section>
                <section
                    className={`${style.section} ${style.sectionProducts}`}
                    id="products">
                        <SectionProducts />
                </section>
                <section
                    className={`${style.section} ${style.sectionMaterials}`}
                    id="materials"
                >
                    <SectionMaterials />
                </section>
                <section
                    className={`${style.section} ${style.sectionProjects}`}
                    id="projects">
                        <SectionProjects />
                </section>
                <section
                    className={`${style.sectionProcess}`}
                    id="process"
                >
                    <SectionProcess />
                </section>
                <section
                    id="orderNow">
                        <SectionStocks />
                </section>
                <Footer />
            </div>
        </>
    );
}