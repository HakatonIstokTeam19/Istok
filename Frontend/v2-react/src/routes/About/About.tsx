import { useState } from "react";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer-motion";
import { useHorizontalScroll, useSectionObserver } from "src/hooks";
import { ProgressBar } from "src/components";
import { aboutPageConfig, breakpoints, progressBarItems } from "src/configs";
import { Us, Mission, Values1, Values2, Brand, Team } from "./SectionTextContext";
import { TeamSectionCard } from "./TeamSectionCard/TeamSectionCard";
import style from './about.module.css'

export function About() {
    const [activeSectionId, setActiveSectionId] = useState(aboutPageConfig[0].id);
    const isScrollHorizontal = window.innerWidth >= breakpoints.md;
    const containerRef = useHorizontalScroll();
    useSectionObserver({ setActiveSectionId });
    
    return (
        <>
            <Helmet>
                <title>О нас</title>
                <meta name="description" content="О компании Istok" />
            </Helmet>
            <div className={style.content} ref={containerRef}>
                <div className={style.textContainer}>
                    <AnimatePresence mode="wait">
                        {isScrollHorizontal ? renderSection(activeSectionId, ) : renderSection(null)}
                    </AnimatePresence>
                </div>
                {
                    isScrollHorizontal && aboutPageConfig.map((item) => (
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
            </div>
            {isScrollHorizontal && <ProgressBar
                activeSectionId={activeSectionId}
                setActiveSectionId={setActiveSectionId}
                items={progressBarItems}
            />}
        </>
    );
}


const renderSection = (activeSection: string | null) => {
    switch (activeSection) {
        case 'us':
            return <Us isNormalScroll={!activeSection}/>;
        case 'mission':
            return <Mission isNormalScroll={!activeSection}/>;
        case 'values1':
            return <Values1 isNormalScroll={!activeSection}/>;
        case 'values2':
            return <Values2 isNormalScroll={!activeSection}/>;
        case 'team':
            return <Team isNormalScroll={!activeSection}/>;
        case 'brand':
            return <Brand isNormalScroll={!activeSection}/>;
        default:
            return <>
                <Us isNormalScroll={!activeSection}/>
                <Mission isNormalScroll={!activeSection}/>
                <Values1 isNormalScroll={!activeSection}/>
                <Values2 isNormalScroll={!activeSection}/>
                <Team isNormalScroll={!activeSection}/>
                <Brand isNormalScroll={!activeSection}/>
            </>;
    }
};