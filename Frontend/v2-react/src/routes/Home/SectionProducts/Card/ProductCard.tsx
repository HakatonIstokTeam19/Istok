import { Link } from 'react-router-dom';
import style from './style.module.css';

 type SlideProps = {
    to: string;
    name: string;
    imageAlt: string;
    imageSrc: string;
};

export function ProductCard({ to, name, imageAlt, imageSrc }: SlideProps) {
    return (
        <Link className={style.card} to={to}>
            <h3 className={style.productName}>{name}</h3>
            <div className={style.imgWrapper}>
                <img
                    src={imageSrc}
                    alt={imageAlt}
                />
            </div>
        </Link>
    );
}