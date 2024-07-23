import { useNavigate } from "react-router-dom";
import spritesheet from 'src/assets/images/interface/icons-sprite-sheet.svg'
import style from './style.module.css';

export function GoBack() {

    const navigate = useNavigate();
    const goBack = () => {
      navigate(-1);
    }

    return (
        <button onClick={goBack} className={style.button}>
            <svg className={style.icon}>
                <use xlinkHref={`${spritesheet}#chevron`}></use>
            </svg>
            <span className={style.buttonText}>Назад</span>
        </button>
    )
}