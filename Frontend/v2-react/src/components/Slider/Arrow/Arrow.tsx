import spritesheet from "src/assets/images/interface/icons-sprite-sheet.svg";
import style from './style.module.css';

interface CustomArrowProps {
    right: boolean;
    onClick: () => void;
    disabled: boolean;
}

export function Arrow({ onClick, right, disabled }: CustomArrowProps) {

    return (
        <button
            className={`${style.sliderBtn} ${right ? style.sliderBtnRight : style.sliderBtnLeft}`}
            onClick={onClick}
            disabled={disabled}>
            <svg className={`${style.arrow} ${right ? style.arrowRight : ''}`}>
                <use
                    href={`${spritesheet}#cardArrowRight`}
                ></use>
            </svg>
        </button>
    )
}