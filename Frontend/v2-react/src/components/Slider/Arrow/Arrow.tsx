import spritesheet from "src/assets/images/interface/icons-sprite-sheet.svg";
import style from './style.module.css';

interface ArrowProps {
    right: boolean;
    onClick: () => void;
    disabled: boolean;
    showBackground?: boolean;
}

export function Arrow({ onClick, right, disabled,  showBackground = true }: ArrowProps) {

    return (
        <button
            className={`${style.sliderBtn} ${right ? style.sliderBtnRight : style.sliderBtnLeft} ${showBackground ? style.sliderBtnBackground : ''}`}
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