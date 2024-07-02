import { NavLink } from 'react-router-dom';
import style from './header.module.css';

export default function Header() {
    
    return (
        <header className={style.header}>
            <svg className={style.logo}>
                <use href="./src/assets/images/interface/icons-sprite-sheet.svg#logo"></use>
            </svg>
            <nav className={`${style.nav} ${"font-body-1"}`}>
                <ul className={style.links}>
                    <li>
                        <NavLink className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`} to="/">
                            Главная
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`} to="/furniture">
                            Готовая мебель
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`} to="/about">
                            О нас
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`}
                            to="./request-select-furniture"
                        >
                            Оставить заявку
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => `${style.link} ${isActive ? style.active : ''}`}
                            to="/profile"
                        >
                            Войти в личный кабинет
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
