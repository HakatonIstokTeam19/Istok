import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import './Button.css';

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
} & ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'medium',
    disabled = false,
    onClick,
    children,
    ...rest
}) => {
    const buttonClasses = `button button-${variant} button-${size} ${
        disabled ? 'button-disabled' : ''
    }`;

    if (rest.href) {
        return (
            <a className={buttonClasses} onClick={onClick} {...rest}>
                {children}
            </a>
        );
    }

    return (
        <button className={buttonClasses} onClick={onClick} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};

export default Button;