import { CounterTopMaterial, FurnitureBodyMaterial, FurnitureColors, FurnitureFrontMaterial, FurnitureItem, FurnitureRoomType, FurnitureShape, FurnitureType } from "./types";
import image0 from 'src/assets/images/content/mockup/image0.png';
import image1 from 'src/assets/images/content/mockup/image1.png';
import image2 from 'src/assets/images/content/mockup/image2.png';
import image3 from 'src/assets/images/content/mockup/image3.png';
import image4 from 'src/assets/images/content/mockup/image4.png';
import image5 from 'src/assets/images/content/mockup/image5.png';



export const mockKitchenFurniture: FurnitureItem[] = [
    {
      id: 1,
      name: "Кухня «Комфорт»",
      type: FurnitureType.kitchenSet,
      intendedFor: FurnitureRoomType.kitchen,
      isPopular: true,
      description: ['Размер кухни: 2390х3000х600. Размер кухни может быть адаптирован под Ваше помещение по всем параметрами.', 'Материалы: Корпус Egger, фасады (двери) Эмаль матовая, петли с доводчиком Hettich, врезные нажимные механизмы (верхние модули), интегрированные ручки, столешница Slotex, стеновая панель Sloteх, плинтус Slotex.', 'Наполнение: 2 ящика типа тандем бокс полного выдвижения с доводчиком Hettich, посудосушитель, системы для сортировки мусора'],
      similarItemsIds: [1,2,3],
      details: {
        shape: FurnitureShape.lShaped,
        bodyMaterial: [FurnitureBodyMaterial.chipboard],
        frontMaterial: [FurnitureFrontMaterial.mdf, FurnitureFrontMaterial.enamel],
        counterTopMaterial: [CounterTopMaterial.acryl],
      },
      price: {
        amount: 250000,
        currency: "₽",
      },
      images: [
        {
          url: {
            small: image0,
            medium: image0,
            large: image0,
            original: image0,
          },
          alt: "Кухня «Комфорт»",
        },
        {
          url: {
            small: image0,
            medium: image0,
            large: image0,
            original: image0,
          },
          alt: "Кухня «Комфорт»",
        },
        {
          url: {
            small: image1,
            medium: image1,
            large: image1,
            original: image1,
          },
          alt: "Кухня «Комфорт»",
        },
        {
          url: {
            small: image2,
            medium: image2,
            large: image2,
            original: image2,
          },
          alt: "Кухня «Комфорт»",
        },
      ],
      tags: [{name: "Гарантия", highlight: true}, {name: "Износостойкость", highlight: true}, {name: "Кухня", highlight: false}, {name: "Для дома", highlight: false}],
      colors: [FurnitureColors.white, FurnitureColors.gray],
    },
    {
      id: 2,
      name: "Классика Элеганс",
      type: FurnitureType.kitchenSet,
      intendedFor: FurnitureRoomType.kitchen,
      isPopular: false,
      description: ['Размер кухни: 2390х3000х600. Размер кухни может быть адаптирован под Ваше помещение по всем параметрами.', 'Материалы: Корпус Egger, фасады (двери) Эмаль матовая, петли с доводчиком Hettich, врезные нажимные механизмы (верхние модули), интегрированные ручки, столешница Slotex, стеновая панель Sloteх, плинтус Slotex.', 'Наполнение: 2 ящика типа тандем бокс полного выдвижения с доводчиком Hettich, посудосушитель, системы для сортировки мусора'],
      similarItemsIds: [1,2,3],
      details: {
        shape: FurnitureShape.uShaped,
        bodyMaterial: [FurnitureBodyMaterial.wood],
        frontMaterial: [FurnitureFrontMaterial.wood],
        counterTopMaterial: [CounterTopMaterial.hplCoatedChipboardW],
      },
      price: {
        amount: 350000,
        currency: "₽",
      },
      images: [
        {
            url: {
              small: image0,
              medium: image0,
              large: image0,
              original: image0,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image0,
              medium: image0,
              large: image0,
              original: image0,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image1,
              medium: image1,
              large: image1,
              original: image1,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image2,
              medium: image2,
              large: image2,
              original: image2,
            },
            alt: "Кухня Модерн Люкс",
          },
      ],
      tags: [{name: "Гарантия", highlight: true}, {name: "Износостойкость", highlight: true}, {name: "Кухня", highlight: false}, {name: "Для дома", highlight: false}],
      colors: [FurnitureColors.brown, FurnitureColors.beige],
    },
    {
      id: 3,
      name: "Лофт Индастриал",
      type: FurnitureType.kitchenSet,
      intendedFor: FurnitureRoomType.kitchen,
      isPopular: true,
      description: ['Размер кухни: 2390х3000х600. Размер кухни может быть адаптирован под Ваше помещение по всем параметрами.', 'Материалы: Корпус Egger, фасады (двери) Эмаль матовая, петли с доводчиком Hettich, врезные нажимные механизмы (верхние модули), интегрированные ручки, столешница Slotex, стеновая панель Sloteх, плинтус Slotex.', 'Наполнение: 2 ящика типа тандем бокс полного выдвижения с доводчиком Hettich, посудосушитель, системы для сортировки мусора'],
      similarItemsIds: [1,2,3],
      details: {
        shape: FurnitureShape.straight,
        bodyMaterial: [FurnitureBodyMaterial.mdf],
        frontMaterial: [FurnitureFrontMaterial.fenixPlastic],
        counterTopMaterial: [CounterTopMaterial.glass],
      },
      price: {
        amount: 200000,
        currency: "₽",
      },
      images: [
        {
            url: {
              small: image0,
              medium: image0,
              large: image0,
              original: image0,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image0,
              medium: image0,
              large: image0,
              original: image0,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image1,
              medium: image1,
              large: image1,
              original: image1,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image2,
              medium: image2,
              large: image2,
              original: image2,
            },
            alt: "Кухня Модерн Люкс",
          },
      ],
      tags: [{name: "Гарантия", highlight: true}, {name: "Распродажа", highlight: true}, {name: "Кухня", highlight: false}, {name: "Для дома", highlight: false}],
      colors: [FurnitureColors.gray, FurnitureColors.black],
    },
    {
      id: 4,
      name: "Скандинавия Уют",
      type: FurnitureType.kitchenSet,
      intendedFor: FurnitureRoomType.kitchen,
      isPopular: false,
      description: ['Размер кухни: 2390х3000х600. Размер кухни может быть адаптирован под Ваше помещение по всем параметрами.', 'Материалы: Корпус Egger, фасады (двери) Эмаль матовая, петли с доводчиком Hettich, врезные нажимные механизмы (верхние модули), интегрированные ручки, столешница Slotex, стеновая панель Sloteх, плинтус Slotex.', 'Наполнение: 2 ящика типа тандем бокс полного выдвижения с доводчиком Hettich, посудосушитель, системы для сортировки мусора'],
      similarItemsIds: [1,2,3],
      details: {
        shape: FurnitureShape.island,
        bodyMaterial: [FurnitureBodyMaterial.chipboard],
        frontMaterial: [FurnitureFrontMaterial.pvcFilm],
        counterTopMaterial: [CounterTopMaterial.compactLaminate],
      },
      price: {
        amount: 280000,
        currency: "₽",
      },
      images: [
        {
            url: {
              small: image0,
              medium: image0,
              large: image0,
              original: image0,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image0,
              medium: image0,
              large: image0,
              original: image0,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image1,
              medium: image1,
              large: image1,
              original: image1,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image2,
              medium: image2,
              large: image2,
              original: image2,
            },
            alt: "Кухня Модерн Люкс",
          },
      ],
      tags: [{name: "Гарантия", highlight: true}, {name: "Распродажа", highlight: true}, {name: "Кухня", highlight: false}, {name: "Для дома", highlight: false}],
      colors: [FurnitureColors.white, FurnitureColors.blue],
    },
    {
      id: 5,
      name: "Хай-Тек Футуре",
      type: FurnitureType.kitchenSet,
      intendedFor: FurnitureRoomType.kitchen,
      isPopular: true,
      description: ['Размер кухни: 2390х3000х600. Размер кухни может быть адаптирован под Ваше помещение по всем параметрами.', 'Материалы: Корпус Egger, фасады (двери) Эмаль матовая, петли с доводчиком Hettich, врезные нажимные механизмы (верхние модули), интегрированные ручки, столешница Slotex, стеновая панель Sloteх, плинтус Slotex.', 'Наполнение: 2 ящика типа тандем бокс полного выдвижения с доводчиком Hettich, посудосушитель, системы для сортировки мусора'],
      similarItemsIds: [1,2,3],
      details: {
        shape: FurnitureShape.barCountertop,
        bodyMaterial: [FurnitureBodyMaterial.mdf],
        frontMaterial: [FurnitureFrontMaterial.agtPlastic],
        counterTopMaterial: [CounterTopMaterial.acryl],
      },
      price: {
        amount: 320000,
        currency: "₽",
      },
      images: [
        {
            url: {
              small: image2,
              medium: image2,
              large: image2,
              original: image2,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image3,
              medium: image3,
              large: image3,
              original: image3,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image4,
              medium: image4,
              large: image4,
              original: image4,
            },
            alt: "Кухня Модерн Люкс",
          },
          {
            url: {
              small: image5,
              medium: image5,
              large: image5,
              original: image5,
            },
            alt: "Кухня Модерн Люкс",
          },
      ],
      tags: [{name: "Гарантия", highlight: true}, {name: "Распродажа", highlight: true}, {name: "Кухня", highlight: false}, {name: "Для дома", highlight: false}],
      colors: [FurnitureColors.white, FurnitureColors.black],
    },
    {
      id:6,
      name: "Кухня «Хай-тек»",
      type: FurnitureType.kitchenSet,
      intendedFor: FurnitureRoomType.kitchen,
      isPopular: true,
      description: ['Размер кухни: 2390х3000х600. Размер кухни может быть адаптирован под Ваше помещение по всем параметрами.', 'Материалы: Корпус Egger, фасады (двери) Эмаль матовая, петли с доводчиком Hettich, врезные нажимные механизмы (верхние модули), интегрированные ручки, столешница Slotex, стеновая панель Sloteх, плинтус Slotex.', 'Наполнение: 2 ящика типа тандем бокс полного выдвижения с доводчиком Hettich, посудосушитель, системы для сортировки мусора'],
      similarItemsIds: [1,2,3],
      details: {
        shape: FurnitureShape.barCountertop,
        bodyMaterial: [FurnitureBodyMaterial.mdf],
        frontMaterial: [FurnitureFrontMaterial.agtPlastic],
        counterTopMaterial: [CounterTopMaterial.acryl],
      },
      price: {
        amount: 320000,
        currency: "₽",
      },
      images: [
        {
            url: {
              small: "https://www.leshiy.fun/Istok/media/58c861188992663.65a52668a1c83_z9Yhp4b.png",
              medium: "https://www.leshiy.fun/Istok/media/58c861188992663.65a52668a1c83_z9Yhp4b.png",
              large: "https://www.leshiy.fun/Istok/media/58c861188992663.65a52668a1c83_z9Yhp4b.png",
              original: "https://www.leshiy.fun/Istok/media/58c861188992663.65a52668a1c83_z9Yhp4b.png",
            },
            alt: "Кухня «Хай-тек»",
          },
          {
            url: {
              small: "https://www.leshiy.fun/Istok/media/8ea2d6188992663.65a52668a0d1a_dXOJcOc.png",
              medium: "https://www.leshiy.fun/Istok/media/8ea2d6188992663.65a52668a0d1a_dXOJcOc.png",
              large: "https://www.leshiy.fun/Istok/media/8ea2d6188992663.65a52668a0d1a_dXOJcOc.png",
              original: "https://www.leshiy.fun/Istok/media/8ea2d6188992663.65a52668a0d1a_dXOJcOc.png",
            },
            alt: "Кухня «Хай-тек»",
          },
          {
            url: {
              small: "https://www.leshiy.fun/Istok/media/ba26cb188992663.65a526689ecac_6gKLKWx.png",
              medium: "https://www.leshiy.fun/Istok/media/ba26cb188992663.65a526689ecac_6gKLKWx.png",
              large: "https://www.leshiy.fun/Istok/media/ba26cb188992663.65a526689ecac_6gKLKWx.png",
              original:"https://www.leshiy.fun/Istok/media/ba26cb188992663.65a526689ecac_6gKLKWx.png",
            },
            alt: "Кухня «Хай-тек»",
          },
          {
            url: {
              small: image5,
              medium: image5,
              large: image5,
              original: image5,
            },
            alt: "Кухня «Хай-тек»",
          },
      ],
      tags: [{name: "Гарантия", highlight: true}, {name: "Распродажа", highlight: true}, {name: "Кухня", highlight: false}, {name: "Для дома", highlight: false}],
      colors: [FurnitureColors.white, FurnitureColors.black],
    },
  ];