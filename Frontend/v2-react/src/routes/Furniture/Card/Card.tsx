import style from './style.module.css';
import { Price, Slider, Tag } from 'src/components';
import { FurnitureItem } from 'src/types';
import { Link } from 'react-router-dom';


export function Card(furniture: FurnitureItem) {
    const { id, name, price, images, tags } = furniture;

    return (
        <Link 
        className={style.card}
        to={`/furniture/${id}`}
        state={furniture}
        >
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
            <Price className={style.price} amount={price.amount} />
        </Link>
    );
}