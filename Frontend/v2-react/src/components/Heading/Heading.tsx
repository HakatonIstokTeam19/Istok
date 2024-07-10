import style from './style.module.css';

type HeadingProps = {
    children: React.ReactNode;
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export default function Heading({ children, level = 1, className }: HeadingProps) {
    switch (level) {
        case 1:
            return <h1 className={`${style.heading } ${style.heading1} ${className || ''}` }>{children}</h1>;
        case 2:
            return <h2 className={`${style.heading } ${style.heading2} ${className || ''}` }>{children}</h2>;
        case 3:
            return <h3 className={`${style.heading } ${style.heading3} ${className || ''}` }>{children}</h3>;
        case 4:
            return <h4 className={`${style.heading } ${style.heading4} ${className || ''}` }>{children}</h4>;
        case 5:
            return <h5 className={`${style.heading } ${style.heading5} ${className || ''}` }>{children}</h5>;
        case 6:
            return <h6 className={`${style.heading } ${style.heading6} ${className || ''}` }>{children}</h6>;
        default:
            return <h1 className={`${style.heading } ${style.heading1} ${className || ''}` }>{children}</h1>;
    }
}
