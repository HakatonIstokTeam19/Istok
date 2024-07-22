import { FurnitureTag } from 'src/types';
import style from './style.module.css';

export function Tag({ name, highlight }: FurnitureTag) {
    return (
        <span className={`${style.tag} ${highlight ? style.highlight : ''}`}>{name}</span>
    );
}