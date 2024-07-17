import frameImage from 'src/assets/images/content/home-slider-2-card-frame.png';
import countertopsImage from 'src/assets/images/content/home-slider-2-card-countertops.png';
import frontsImage from 'src/assets/images/content/home-slider-2-card-fronts.png';
import fittingsImage from 'src/assets/images/content/home-slider-2-card-fittings.png';


export enum FurnitureComponents {
    FRAME = 'frame',
    COUNTERTOPS = 'countertops',
    FRONTS = 'fronts',
    FITTINGS = 'fittings',
  }
  
export interface MaterialCategory {
    id: FurnitureComponents;
    name: string;
    image: string;
    details: { title: string; items: string[] }[];
  }
  
export const materialCategories: MaterialCategory[] = [
    {
      id: FurnitureComponents.FRAME,
      name: 'Корпус',
      image: frameImage,
      details: [
        { title: 'ЛДСП', items: ['Egger', 'Nordeco'] },
        { title: 'МДФ', items: [] },
      ],
    },
    {
      id: FurnitureComponents.COUNTERTOPS,
      name: 'Столешницы',
      image: countertopsImage,
      details: [
        { title: 'ДСП Столешницы', items: ['SLOTEX', 'Egger', 'СКИФ'] },
        { title: 'HPL Compact laminat', items: ['SLOTEX', 'Sensola'] },
      ],
    },
    {
      id: FurnitureComponents.FRONTS,
      name: 'Фасады',
      image: frontsImage,
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
      image: fittingsImage,
      details: [
        { title: 'Hettich (Германия)', items: [] },
        { title: 'BLUM (Австрия)', items: [] },
      ],
    },
  ];
  