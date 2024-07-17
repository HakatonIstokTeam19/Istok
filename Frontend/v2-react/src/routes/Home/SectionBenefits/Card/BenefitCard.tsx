import style from './style.module.css';


type BenefitCardProps = {
    className?: string;
    heading: string;
    text: string;
    img: string;
};


export function BenefitCard({ className = '', heading, img, text }: BenefitCardProps) {
    return (
        <div className={`${style.card} ${style[className]}`}>
            <div className={style.textWrapper}>
                <h3 className={`${style.heading} head-1-st bx`}>{heading}</h3>
                <p className={`${style.text} body-2-st`}>{text}</p>
            </div>
            <img
                className={style.img}
                src={img}
                aria-hidden="true"
            />
        </div>
    );
}