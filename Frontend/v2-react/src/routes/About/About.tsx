import { useState } from "react";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import useSectionObserver from "../../hooks/useSectionObserver";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Helmet } from "react-helmet";
import style from './about.module.css'
import { aboutPageConfig, progressBarItems } from "../../configs/config";
import TeamSectionCard from "./TeamSectionCard/TeamSectionCard";
import { AnimatePresence } from "framer-motion";
import Us from "./SectionTextContext/Us";
import Mission from "./SectionTextContext/Mission";
import Values1 from "./SectionTextContext/Values1";
import Values2 from "./SectionTextContext/Values2";
import Brand from "./SectionTextContext/Brand";
import Team from "./SectionTextContext/Team";


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


export default function About() {
    const [activeSectionId, setActiveSectionId] = useState(aboutPageConfig[0].id);
    const { containerRef, isNormalScroll } = useHorizontalScroll();
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
                        {!isNormalScroll ? renderSection(activeSectionId, ) : renderSection(null)}
                    </AnimatePresence>
                </div>
                {
                    !isNormalScroll && aboutPageConfig.map((item) => (
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
            {!isNormalScroll && <ProgressBar
                activeSectionId={activeSectionId}
                setActiveSectionId={setActiveSectionId}
                items={progressBarItems}
            />}
        </>
    );
}

