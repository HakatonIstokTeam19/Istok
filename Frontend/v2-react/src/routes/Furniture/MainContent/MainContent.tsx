import style from './style.module.css';
import { mockKitchenFurniture } from 'src/mock';
import { Card } from '../Card/Card';

export function MainContent() {
  return (
    <div className={style.grid}>
        {
            mockKitchenFurniture.map((item) => (
                <Card key={item.id} {...item} />
            ))
        }
    </div>
  );
}