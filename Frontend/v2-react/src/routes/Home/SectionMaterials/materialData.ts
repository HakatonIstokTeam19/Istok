
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
  