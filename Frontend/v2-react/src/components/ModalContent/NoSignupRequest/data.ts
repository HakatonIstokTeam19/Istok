import { routes } from "src/configs/linksData";
import { FurnitureType } from "src/types/types";

export const requestSelectModalLinks = [
    { to: `${routes.requestSelect} ${FurnitureType.kitchenSet}`, title: 'Кухня' },
    { to: `${routes.requestSelect} ${FurnitureType.closet}`, title: 'Гардероб' },
    { to: `${routes.requestSelect} ${FurnitureType.hallwaySet}`, title: 'Прихожая' },
    { to: `${routes.requestSelect} ${FurnitureType.chestOfDrawers}`, title: 'Комод' },
    { to: `${routes.requestSelect} ${FurnitureType.rack}`, title: 'Стеллаж' },
    { to: `${routes.requestSelect} ${'allInclusiveOrder'}`, title: 'Комплексный заказ' },
];