import style from './style.module.css';
import { Slider } from 'src/components';
import { FurnitureItem } from 'src/types/types';
import { Tag } from '../Tag/Tag';


export function Card({ name, price, images, tags }: FurnitureItem) {
const formattedPrice = formatPrice(price.amount);
    return (
        <div className={style.card}>
            <Slider
            showArrows={false}
            showDots
            >
                {images.map((image, index) => (
                    <img key={index} src={image.url.small} alt={image.alt} className={style.image}/>
                ))}
            </Slider>
            <div className={style.tagContainer}>
                {tags.map((tag, index) => (
                    <Tag key={index} {...tag} />
                ))}
            </div>
            <h3 className={`${style.title} fm head-14-fl-16`}>{name}</h3>
            <p className={`${style.price} fm head-1-st  bx`}>{formattedPrice} {price.currency}</p>
        </div>
    );
}

function formatPrice(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}