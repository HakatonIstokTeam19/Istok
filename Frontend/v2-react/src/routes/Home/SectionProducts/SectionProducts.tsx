import { Link } from 'react-router-dom';
import style from './style.module.css';

export default function SectionProducts() {
    return (
        <>
            <div className={style.innerContentWrapper}>
                <div className={style.titleWrapper}>
                    <h2 className="font-heading-reg-32">ЧТО МЫ ПРОИЗВОДИМ</h2>
                    <p className="font-body-1">
                        Мы создаём мебель для любого помещения, потому что у нас нет
                        готовых<br />
                        модулей. Каждый элемент мебели мы разрабатываем и производим<br />
                        специально для вас и вашего интерьера.
                    </p>
                </div>
                <div className={style.sliderOuterContainer}>
                    <div className={style.sliderInnerContainer}>
                        <Link className={style.example} to={'/furniture/kitchens'}>
                            <h3 className={style.exampleName}>Кухни</h3>
                            <div className={style.imgWrapper}>
                                <img
                                    src="./src/assets/images/content/home-slider-1-card-1.png"
                                    alt="Кухни"
                                /></div></Link>
                        <Link className={style.example} to={'/furniture/storageSystems'}>
                            <h3 className={style.exampleName}>Системы хранения</h3>
                            <div className={style.imgWrapper}>
                                <img
                                    src="./src/assets/images/content/home-slider-1-card-2.png"
                                    alt="Системы хранения"
                                /></div></Link>
                        <Link className={style.example} to={'/furniture/vestibules'}>
                            <h3 className={style.exampleName}>Прихожие</h3>
                            <div className={style.imgWrapper}>
                                <img
                                    src="./src/assets/images/content/home-slider-1-card-3.png"
                                    alt="Системы хранения"
                                /></div></Link>
                        <Link className={style.example} to={'/furniture/fullPack'}>
                            <h3 className={style.exampleName}>Комплексный заказ</h3>
                            <div className={style.imgWrapper}>
                                <img
                                    src="./src/assets/images/content/home-slider-1-card-4.png"
                                    alt="Системы хранения"
                                /></div></Link>
                    </div>
                </div>
            </div>
        </>
    )
}