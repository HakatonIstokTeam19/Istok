import { Link } from "react-router-dom";
import style from './style.module.css';
import spritesheet from '../../assets/images/interface/icons-sprite-sheet.svg';

interface ContactLinkProps {
    linkTitle: string;
    iconId: string;
    ariaLabel?: string;
    to: string;
}


export default function ContactLink({ linkTitle, iconId, ariaLabel, to }: ContactLinkProps) {
    return (
        <Link
            className={style.link}
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