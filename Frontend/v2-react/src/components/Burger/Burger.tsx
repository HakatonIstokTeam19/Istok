import style from './style.module.css';

export default function Burger({ isOpen }: { isOpen: boolean }) {

    return (
        <svg
            className={`${style.burgerIcon} ${isOpen ? style.active : " "}`}
            id="burger"
            viewBox="0 0 34 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path className={style.top} d="M0.5 16.2742C0.5 15.9981 0.723858 15.7742 1 15.7742H33C33.2761 15.7742 33.5 15.9981 33.5 16.2742C33.5 16.5504 33.2761 16.7742 33 16.7742H1C0.723858 16.7742 0.5 16.5504 0.5 16.2742Z" fill="currentColor" />
            <path className={style.middle} d="M1 0.914064C1 0.637922 1.22386 0.414062 1.5 0.414062L32.5 0.414064C32.7761 0.414064 33 0.637922 33 0.914064C33 1.19021 32.7761 1.41406 32.5 1.41406L1.5 1.41406C1.22386 1.41406 1 1.19021 1 0.914064Z" fill="currentColor" />
            <path className={style.bottom} d="M1 8.5C0.723858 8.5 0.5 8.72386 0.5 9C0.5 9.27614 0.723858 9.5 1 9.5L33 9.5C33.2761 9.5 33.5 9.27615 33.5 9C33.5 8.72386 33.2761 8.5 33 8.5L1 8.5Z" fill="currentColor" />
        </svg>
    )
}