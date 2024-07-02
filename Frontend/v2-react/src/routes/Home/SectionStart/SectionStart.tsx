import style from './style.module.css';


export default function SectionStart() {
    return (
        <>
            <div className={style.contentOuterWrapper}>
                <div className={style.contentInnerWrapper}>
                    <h1 className={`${style.title} ${"font-heading-reg-52"}`}>
                        с <span className="text-color-accent">нами</span> начинается<br />
                        уют <span className="text-color-accent">вашего</span> дома
                    </h1>
                    <p className={`${style.tagline} ${"font-body-1"}`}>
                        ПРОИЗВОДСТВО МЕБЕЛИ НА ЗАКАЗ<br />
                        В САНКТ-ПЕТЕРБУРГЕ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ
                    </p>
                    <button data-modal="registerModal" className={style.button}>
                        Записаться на встречу
                    </button>
                </div>
            </div>
            <img
                src="./src/assets/images/content/home-page-1-bg-1.png"
                alt="living room interior"
            />
        </>
    )
}