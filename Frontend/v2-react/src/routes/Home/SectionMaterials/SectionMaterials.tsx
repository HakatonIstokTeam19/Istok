import { useState } from 'react';
import style from './style.module.css';
import { FurnitureComponents, materialCategories } from './../data';
import { TabButton } from './TabButton/TabButton';
import { DetailList } from './DetailsList/DetailsList';

export function SectionMaterials() {
  const [activeCategoryName, setActiveCategoryName] = useState(FurnitureComponents.FRAME);
  const activeCategory = materialCategories.find(category => category.id === activeCategoryName) || materialCategories[0];

  return (
    <div className={style.innerContainer}>
      <h2 className={`${style.heading} fm head-28-fl-32`} aria-label="МАТЕРИАЛЫ">МАТЕРИАЛЫ</h2>
      <p className={`body-1-st ${style.text}`}>
        Мы в ISTOK очень тщательно подбираем поставщиков для нашей продукции.
        Для нас важно, чтобы все товары соответствовали строгим критериям отбора,
        включая высокое качество и ЭКОЛОГИЧНОСТЬ.
      </p>
      <ul className={style.sliderControls} role="tablist">
        {materialCategories.map((category) => (
          <li key={category.name}>
            <TabButton
              onClick={() => setActiveCategoryName(category.id)}
              category={category}
              isActive={category.id === activeCategoryName}
            />
          </li>
        ))}
      </ul>
      <div className={style.imageContainer}>
        <img
          className={`${style.image} ${style.imageActive}`}
          src={activeCategory.image}
          alt={`samples of materials`}
          aria-hidden="true"
        />
      </div>

      <div className={style.slideTxtBlock}>
          <DetailList {...activeCategory}/>
      </div>
    </div>
  );
}

