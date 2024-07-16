import { Link } from "react-router-dom";
import style from './style.module.css';
import spritesheet from '../../assets/images/interface/icons-sprite-sheet.svg';

interface ContactLinkProps {
    linkTitle: string;
    iconId: string;
    ariaLabel?: string;
    direction?: "h" | "v";
    color?: "dark" | "light";
    to: string;
}

export function ContactLink({ linkTitle, iconId, ariaLabel, to, direction = "v", color = "light" }: ContactLinkProps) {
    return (
        <Link
            className={`${style.link} ${style[direction]} ${style[color]}`}
            to={to}
            target="_blank"
            aria-label={ariaLabel}
            rel="nofollow">
            <svg className={style.icon}>
                <use href={`${spritesheet}#${iconId}`}></use>
            </svg>
            <span className={style.linkText}>{linkTitle}</span>
        </Link>
    )
}