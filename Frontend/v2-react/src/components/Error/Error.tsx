import { useRouteError } from 'react-router-dom';
import style from './style.module.css';

export function ErrorElement() {
    const error = useRouteError();
    console.error(error)
    
    return (
        <div className={style.grid}>
            <div className={style.content}>
                <h4>Ошибка: {(error as Error).message}</h4>
            </div>
        </div>
    );
}