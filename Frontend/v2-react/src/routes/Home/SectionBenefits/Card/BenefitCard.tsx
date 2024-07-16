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
                <h3 className={`${style.heading} font-heading-bold-16`}>{heading}</h3>
                <p className={`${style.text} font-body-2`}>{text}</p>
            </div>
            <img
                className={style.img}
                src={img}
                aria-hidden="true"
            />
        </div>
    );
}