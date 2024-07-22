import { Link, useLocation } from 'react-router-dom';
import style from './style.module.css';
import { Button, Modal, Price, Slider, Tag } from 'src/components';
import { FurnitureItem } from 'src/types';
import { useState } from 'react';


export function FurnitureDetails() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const furniture: FurnitureItem = location.state;
  if (!furniture) {
    return <div>Продукт не найден. <Link to={"/"}>Вернуться на главную</Link></div>;
  }

  const { name, price, images, description, tags } = furniture;

  return (
    <div className={style.container}>
      <div className={style.visuals}>
        <Slider
          showArrows
          noArrowBgr
          showDots>
          {images.map((image, index) => (
            <img key={index} src={image.url.large} alt={image.alt} className={style.image} />
          ))}
        </Slider>
        <Button
          size='medium'
          className={style.modalToggleBtn}
          onClick={() => setIsModalOpen(true)}
        >
          Посмотреть 3D проект
        </Button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className={style.modalContent}>
          <h4 className='fm head-st-1 bx'>3D Проект</h4>
          </div>
        </Modal>
      </div>
      <div className={style.details}>
        <h1 className={`${style.title} fm head-2-st bs`}>{name}</h1>
        {tags && (
          <div className={style.tags}>
            {tags.map((tag, index) => (
              <Tag key={index} {...tag}/>
            ))}
          </div>
        )}
        <div className={style.description}>
          {description.map((text, index) => (
            <p key={index} className='fm body-1-st'>{text}</p>
          ))}
        </div>
        <div className={style.priceWrapper}>
          <Price amount={price.amount} size='large' />
          <Button size='medium' className={style.orderBtn}>Заказать проект</Button>
        </div>
      </div>
    </div>
  );
}