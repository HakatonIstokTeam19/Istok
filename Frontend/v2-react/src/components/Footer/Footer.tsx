import { Link } from 'react-router-dom';
import style from './style.module.css';
import ContactLink from '../ContactLink/ContactLink';
import { connectLinks, infoLinks, subscriptionLinks } from '../../configs/config';


export default function Footer() {

    return (
        <footer className={style.footer}>
            <div className={style.section}>
                <h5 className={style.heading}>Связаться с исток</h5>
                <div className={style.socialLinks}>
                    {connectLinks.map((link, index) => (
                        <ContactLink
                            key={index}
                            to={link.to}
                            aria-label={link.ariaLabel}
                            iconId={link.iconId}
                            linkTitle={link.linkTitle}
                        />
                    ))}
                </div>
            </div>
            <div className={style.section}>
                <h5 className={style.heading}>Подписаться</h5>
                <div className={style.socialLinks}>
                    {subscriptionLinks.map((link, index) => (
                        <ContactLink
                            key={index}
                            to={link.to}
                            aria-label={link.ariaLabel}
                            iconId={link.iconId}
                            linkTitle={link.linkTitle}
                        />
                    ))}
                </div>
            </div>
            <div className={style.section}>
                <h5 className={style.heading}>Узнать больше</h5>
                <div className={style.socialLinks}>
                    {infoLinks.map((link, index) => (
                        <Link 
                            key={index}
                            className={style.socialLinkLabel}
                            to={link.to}
                        >
                            {link.linkTitle}
                        </Link>
                    ))}
                </div>
            </div>
            <div className={style.legalInfo}>
                <Link
                    className={style.policyNotice}
                    to="https://istok-mebel.ru/policy"
                    target="_blank"
                >
                    Политика конфиденциальности
                </Link>
                <span className={style.copyright}>© ООО "ИСТОК-МЕБЕЛЬ" 2024</span>
            </div>
        </footer>
    );
}

