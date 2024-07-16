import style from './style.module.css';
import spriteshet from 'src/assets/images/interface/icons-sprite-sheet.svg';

type DotProps = {
    active: boolean;
    onClick: () => void;
    className?: "string"
}

export function Dot({ active, onClick, className }: DotProps) {
    return (
        <button
            className={`${style.dotBtn} ${className ? className : ''} ${active ? style.active : ''}`}
            onClick={onClick}
        >
            <svg className={style.dotIcon}>
                <use href={`${spriteshet}#sliderDot`}></use>
            </svg>
        </button>
    )
}