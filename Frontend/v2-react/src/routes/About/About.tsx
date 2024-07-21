import { useCallback, useState } from "react";
import { Helmet } from "react-helmet";
import { useHorizontalScroll, useSectionObserver } from "src/hooks";
import { ProgressBar } from "src/components";
import { breakpoints } from "src/configs";
import { Us, Mission, Values1, Values2, Brand, Team } from "./SectionTextContext";
import { TeamSectionCard } from "./TeamSectionCard/TeamSectionCard";
import style from './about.module.css'
import { aboutPageConfig, progressBarItems } from "./data";
import { motion } from "framer-motion";


export function About() {
    const [activeSectionId, setActiveSectionId] = useState("us");
    const isDesktop = window.innerWidth >= breakpoints.md;
    const containerRef = useHorizontalScroll();
    const memoizedSetActiveSectionId = useCallback((id: string) => {
        setActiveSectionId(id);
    }, []);
    useSectionObserver({
        setActiveSectionId: memoizedSetActiveSectionId,
        threshold: 0.3,
        rootMargin: '0px 0px 0px 478px '
    });

    return (
        <>
            <Helmet>
                <title>О нас</title>
                <meta name="description" content="О компании Istok" />
            </Helmet>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={style.content}
                ref={containerRef}
                data-h-container>
                <div className={style.textContainer}>
                    {isDesktop ? renderSection(activeSectionId) : renderSection(null)}
                </div>
                {
                    isDesktop && aboutPageConfig.map((item) => (
                        <section key={item.id} className={`${style.section} ${style[item.id] ? style[item.id] : ''}`} id={item.id} data-h-slide>
                            {
                                item.slideContents.map((content, index) => (
                                    'heading' in content ? (
                                        <TeamSectionCard {...content} key={index} />
                                    ) : (
                                        <img
                                            key={index}
                                            className={`${style.slideImage} ${style[item.id]}`}
                                            src={content.src}
                                            alt={content.alt}
                                        />
                                    )
                                ))
                            }
                        </section>
                    ))
                }
            </motion.div>
            {isDesktop &&
                <ProgressBar
                    activeSectionId={activeSectionId}
                    setActiveSectionId={memoizedSetActiveSectionId}
                    items={progressBarItems}
                />}
        </>
    );
}


const renderSection = (activeSection: string | null) => {
    switch (activeSection) {
        case 'us':
            return <Us isNormalScroll={!activeSection} />;
        case 'mission':
            return <Mission isNormalScroll={!activeSection} />;
        case 'values1':
            return <Values1 isNormalScroll={!activeSection} />;
        case 'values2':
            return <Values2 isNormalScroll={!activeSection} />;
        case 'team':
            return <Team isNormalScroll={!activeSection} />;
        case 'brand':
            return <Brand isNormalScroll={!activeSection} />;
        default:
            return <>
                <Us isNormalScroll={!activeSection} />
                <Mission isNormalScroll={!activeSection} />
                <Values1 isNormalScroll={!activeSection} />
                <Values2 isNormalScroll={!activeSection} />
                <Team isNormalScroll={!activeSection} />
                <Brand isNormalScroll={!activeSection} />
            </>;
    }
};