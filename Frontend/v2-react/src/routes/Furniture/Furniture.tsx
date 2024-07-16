import {UnderDevelopment} from 'src/components';
import style from './style.module.css';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';

export default function Furniture() {

    const [data, setData] = useState({ finished_furniture: [] });

    useEffect(() => {
        async function getFurniture() {
            try {
                const response = await fetch('/api/v1/finished_furniture_list');
                const data = await response.json();
                console.log(data)
                return data
            } catch (error) {
                console.error(error);
            }
        }
        getFurniture().then(data => setData(data));
    }
    , []);

    return (
        <>
            <Helmet>
                <title>Готовая мебель</title>
                <meta name="description" content="Мебель от Istok" />
            </Helmet>
            {/* <UnderDevelopment /> */}
            <div className={style.furniture}>
                {data.finished_furniture.map((furniture: any) => (
                    <div className={style.card} key={furniture.id}>
                        <h2>{furniture.name}</h2>
                        <p>Тип {furniture.type}</p>
                        <p> Цена {furniture.price}</p>
                        <img className={style.image} src={furniture.image_1} alt={furniture.name} />
                        <p>{furniture.description}</p>
                </div>
                ))}
            </div>
        </>
    );
}