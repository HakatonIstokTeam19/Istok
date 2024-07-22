import style from './style.module.css';

type PriceProps = {
    amount: number;
    currency?: string;
    size?: 'medium' | 'large';
    className?: string;
    };

export function Price({ amount, currency = "₽", size = 'medium', className = '' }: PriceProps) {
  const formattedPrice = formatPrice(amount);
  return <p className={`${style.price} ${style[size]} ${className}`}>{formattedPrice} {currency}</p>;
}

function formatPrice(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}