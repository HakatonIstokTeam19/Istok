export type  Project = {
    title: string;
    image: string;
    alt: string;
  }

  export interface FurnitureItem {
    id: number;
    name: string;
    type: FurnitureType;
    intendedFor: FurnitureRoomType;
    isPopular: boolean;
    description: Array<string>;
    similarItemsIds: Array<number>;
    details: {
      shape: FurnitureShape;
      // массивы наименований материалов на тот случай если мебель состоит из нескольких материалов
      bodyMaterial: Array<FurnitureBodyMaterial>;
      frontMaterial: Array<FurnitureFrontMaterial>;
      counterTopMaterial: Array<CounterTopMaterial>;
    };
    price: {
      amount: number;
      currency: string;
    };
    images: Array<Image>;
    tags: Array<FurnitureTag>;
    colors: Array<FurnitureColors>;
  }

  export interface Image {
    url: {
      small: string,
      medium: string,
      large: string,
      original: string
    }
    alt: string;
  }

  export enum FurnitureShape {
    straight = 'Прямая',
    lShaped = 'Г-образная',
    uShaped = 'П-образная',
    corner = 'Угловая',
    barCountertop = 'С барной стойкой',
    island = 'C островом',
  }

  export enum FurnitureFrontMaterial {
    chipboard = 'ЛДСП',
    mdf = 'МДФ',
    wood = 'Дерево',
    pvcFilm = 'Пленка ПВХ',
    agtPlastic = 'Пластик AGT',
    fenixPlastic = 'Пластик Fenix',
    enamel = 'Эмаль',
  }

  export enum FurnitureBodyMaterial {
    chipboard = 'ЛДСП',
    mdf = 'МДФ',
    wood = 'Дерево',
  }

  export enum CounterTopMaterial {
    hplCoatedChipboardW = 'Столешница ДСП с покрытием HPL',
    compactLaminate = 'Столешница компакт-ламинат',
    quartz = 'Кварцевая столешница',
    acryl = 'Акриловая столешница',
    glass = 'Стеклянная столешница',
  }

  export enum FurnitureRoomType {
    kitchen = 'Кухня',
    bedroom = 'Спальня',
    childrenRoom = 'Детская комната',
    bathroom = 'Ванная комната',
    livingRoom = 'Гостиная',
    hallway = 'Прихожая',
    office = 'Офис',
  }

  export enum FurnitureType {
    popular = 'Популярное',
    kitchenSet = 'Кухня',
    closet = 'Гардероб',
    hallwaySet = 'Прихожая',
    chestOfDrawers = 'Комод',
    rack = 'Стеллаж',
  }

  export enum FurnitureStyles {
    classic = 'Классика',
    modern = 'Современный',
    loft = 'Лофт',
    scandinavian = 'Скандинавский',
    minimalism = 'Минимализм',
    highTech = 'Хай-тек',
    provence = 'Прованс',
    country = 'Кантри',
  }

  export enum FurnitureColors {
    white = 'Белый',
    black = 'Черный',
    brown = 'Коричневый',
    beige = 'Бежевый',
    gray = 'Серый',
    blue = 'Синий',
    green = 'Зеленый',
    red = 'Красный',
    yellow = 'Желтый',
    pink = 'Розовый',
    purple = 'Фиолетовый',
  }

  export interface FurnitureTag {
    name: string;
    highlight: boolean;
  }