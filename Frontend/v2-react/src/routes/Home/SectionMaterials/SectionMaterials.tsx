import { useState } from 'react';
import style from './style.module.css';

export default function SectionMaterials() {
    const [activeCategoryName, setActiveCategoryName] = useState(FurnitureComponents.FRAME);
    const activeCategory = materialCategories.find(category => category.id === activeCategoryName) || materialCategories[0];
    
    return (
        <div className={style.innerContainer}>
            <h2 className={`${style.heading} font-heading-reg-32`} aria-label="МАТЕРИАЛЫ">МАТЕРИАЛЫ</h2>
            <ul className={style.sliderControls} role="tablist">
                {materialCategories.map((category) => (
                    <li key={category.name}>
                        <button
                            className={`${style.sliderBtn} ${activeCategoryName === category.id ? style.active : ''}`}
                            onClick={() => setActiveCategoryName(category.id)}
                            role="tab"
                            aria-selected={activeCategoryName === category.id}
                            aria-controls={`tabpanel-${category.id}`}
                        >
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
            <p className={`font-body-1 ${style.text}`}>
                Мы в ISTOK очень тщательно подбираем поставщиков для нашей продукции.
                Для нас важно, чтобы все товары соответствовали строгим критериям отбора,
                включая высокое качество и ЭКОЛОГИЧНОСТЬ.
            </p>
            <div className={style.imageContainer}>
                <img
                    className={`${style.image} ${style.imageActive}`}
                    src={activeCategory.image}
                    alt={`samples of materials`}
                    aria-hidden="true"
                />
            </div>
            <div className={style.slideTxtBlock}>
                <div className={`${style.slideTxtBlockList} ${style.slideTxtBlockListActive}`}>
                    {activeCategory.details.map((detail, index) => (
                        <div key={index} className={style.slideTxtBlockListElement} role="tabpanel" id={`tabpanel-${activeCategory.id}`} aria-labelledby={`tab-${activeCategory.id}`}>
                            <h4 className={style.detailTitle}>{detail.title}</h4>
                            {detail.items.map((item, itemIndex) => (
                                <p key={itemIndex}>{item}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


enum FurnitureComponents {
    FRAME = 'frame',
    COUNTERTOPS = 'countertops',
    FRONTS = 'fronts',
    FITTINGS = 'fittings',
    }

interface MaterialCategory {
    id: FurnitureComponents;
  name: string;
  image: string;
  details: { title: string; items: string[] }[];
}

const materialCategories: MaterialCategory[] = [
  {
    id: FurnitureComponents.FRAME,
    name: 'Корпус',
    image: `./src/assets/images/content/home-slider-2-card-${FurnitureComponents.FRAME}.png`,
    details: [
      { title: 'ЛДСП', items: ['Egger', 'Nordeco'] },
      { title: 'МДФ', items: [] },
    ],
  },
  {
    id: FurnitureComponents.COUNTERTOPS,
    name: 'Столешницы',
    image: `./src/assets/images/content/home-slider-2-card-${FurnitureComponents.COUNTERTOPS}.png`,
    details: [
      { title: 'ДСП Столешницы', items: ['SLOTEX', 'Egger', 'СКИФ'] },
      { title: 'HPL Compact laminat', items: ['SLOTEX', 'Sensola'] },
    ],
  },
  {
    id: FurnitureComponents.FRONTS,
    name: 'Фасады',
    image: `./src/assets/images/content/home-slider-2-card-${FurnitureComponents.FRONTS}.png`,
    details: [
      { title: 'ЛДСП', items: ['Egger', 'Nordeco'] },
      { title: 'МДФ в пленке ПВХ', items: ['ТАДЖ', 'Adilet'] },
      { title: 'МДФ с пластиковым покрытием AGT', items: [] },
      { title: 'МДФ покрытый эмалью', items: ['Палитры RAL', 'Палитры Tikkurila'] },
      { title: 'МДФ покрытый нано-пластиком', items: ['FENIX'] },
    ],
  },
  {
    id: FurnitureComponents.FITTINGS,
    name: 'Фурнитура',
    image: `./src/assets/images/content/home-slider-2-card-${FurnitureComponents.FITTINGS}.png`,
    details: [
      { title: 'Hettich (Германия)', items: [] },
      { title: 'BLUM (Австрия)', items: [] },
    ],
  },
];
