import style from './style.module.css';

export type TeamCardProps = {
    heading: string,
    subheading: string,
    src: string,
    alt: string,
    imgClass?: string
};

export default function TeamSectionCard({ src, alt, heading, subheading, imgClass = ''}: TeamCardProps) {
    return (
            <div className={style.card}>
                <div className={style.headingWrapper}>
                    <h3 className="fm head-28-fl-34 text-color-accent">
                        {heading}
                    </h3>
                    <p className="fm body-12-fl-16">{subheading}</p>
                </div>
                <img
                    className={`${style.slideImage} ${imgClass}`}
                    src={src}
                    alt={alt}
                />
            </div>
    );
}