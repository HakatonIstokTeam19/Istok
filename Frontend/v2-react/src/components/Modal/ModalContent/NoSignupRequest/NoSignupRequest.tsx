import style from './style.module.css';
import bgImage from '../../../../assets/images/content/modal-to-request.png';
import Button from '../../../Button/Button';

export default function NoSignupRequest() {


    return (
        <>
            <div className={style.decorationContainer}>
                <img
                    src={bgImage}
                    alt="beautiful modern interior"
                />
            </div>
            <div className={style.infoContainer}>
                <div className={style.buttons}>
                    {links.map((link, index) => (
                        <Button
                            as='a'
                            size='smallX'
                            key={index}
                            href={link.to}
                        >
                            {link.title}
                        </Button>
                    ))}
                    <Button
                        as='a'
                        size='smallX'
                        variant='transparent'
                        className={style.link}
                        href={'./requestSkipSelection'}
                    >
                       Пропустить и перейти к заявке
                    </Button>
                </div>
            </div>
        </>
    );
}

const links = [
    { to: './requestSelectFurniture', title: 'Кухня' },
    { to: './requestSelectFurniture', title: 'Гардероб' },
    { to: './requestSelectFurniture', title: 'Прихожая' },
    { to: './requestSelectFurniture', title: 'Комод' },
    { to: './requestSelectFurniture', title: 'Стеллаж' },
    { to: './requestSelectFurniture', title: 'Комплексный заказ' },
];