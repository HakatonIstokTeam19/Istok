import spritesheet from '../../assets/images/interface/icons-sprite-sheet.svg';
import style from './style.module.css'
import ContactLink from "../ContactLink/ContactLink";


export default function SideMenu() {
    const LinksConfig = [
        {
            to: "https://wa.me/79311213900?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%20%D0%A5%D0%BE%D1%87%D1%83%20%D1%81%D0%B2%D1%8F%D0%B7%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D1%81%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D0%B8%D1%81%D1%82%D0%BE%D0%BC%21",
            ariaLabel: "Чат whatsapp",
            iconId: "whatsapp",
            linkTitle: "Чат"
        },
        {
            to: "https://t.me/ISTOKsupport_bot",
            ariaLabel: "Телеграм бот",
            iconId: "telegram",
            linkTitle: "Чат"
        },
        {
            to: "tel:+78129662997",
            target: "_blank",
            rel: "nofollow",
            ariaLabel: "Телефон",
            iconId: "ring",
            linkTitle: "Звонок"
        },
        {
            to: "https://t.me/ISTOK_Connect",
            target: "_blank",
            ariaLabel: "Телеграм канал",
            iconId: "telegram",
            linkTitle: "Сообщество"
        },
        {
            to: "https://vk.com/istokmebel",
            target: "_blank",
            ariaLabel: "Группа вконтакте",
            iconId: "vkontakte",
            linkTitle: "Сообщество"
        }
    ];

    return (
        <div className={style.sideMenu}>
            <label className={style.button}>
                <svg className={style.pointer}>
                    <use to={`${spritesheet}#chevron`}></use>
                </svg>
                <span className={style.buttonText}>Связаться с ИСТОК</span>
                <input className={style.hiddenInput} type="checkbox" />
            </label>
            <div className={style.links}>
                {LinksConfig.map((link, index) => (
                    <ContactLink
                        key={index}
                        to={link.to}
                        ariaLabel={link.ariaLabel}
                        iconId={link.iconId}
                        linkTitle={link.linkTitle}
                    />
                ))}
            </div>
        </div>
    )
}
