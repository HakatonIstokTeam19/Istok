import { Button } from 'src/components';
import style from './style.module.css';

export function Consult() {
    return (
        <div className={style.consulting} id="consult">
            <h2 className={style.heading}>Оставьте заявку</h2>
            <p className={`${style.tagline} font-body-1`}>
                И ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ СПЕЦИАЛИСТА
            </p>
            <div className={style.textContent}>
                <p className={`${style.paragraph} font-body-1`}>
                    В ISTOK мы серьёзно подходим к своей работе и ценим время наших
                    клиентов. Поэтому мы никогда не обещаем то, что не сможем
                    выполнить в срок.
                </p>
                <p className={`${style.paragraph} font-body-1`}>
                    Наш специалист ответит на любой ваш вопрос. РЕГИСТРИРУЙТЕСЬ В
                    ЛИЧНОМ КАБИНЕТЕ И ОСТАВЛЯЙТЕ ЗАЯВКУ
                </p>
                <p className={`${style.paragraph} font-body-1`}>
                    Или просто укажите свои контактные данные и менеджер перезвонит в
                    удобное для вас время!
                </p>
            </div>
            <Button
                    size='smallL'
                    as='a'
                    href='/request-skip-selection'
                    className={style.reqCallBtn}
                    >
                    Заказать звонок
                </Button>
        </div>
    )
}