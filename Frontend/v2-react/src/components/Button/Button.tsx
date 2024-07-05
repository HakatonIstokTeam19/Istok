import React from 'react';
import style from './style.module.css';

type ButtonProps<C extends React.ElementType> = {
    variant?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'smallX' | 'smallM' | 'smallL' | 'medium' | 'large';
    className?: string;
    loading? : boolean;
    onClick?: () => void;
    as?: C;
  } & Omit<React.ComponentPropsWithoutRef<C>, 'as'>;

  type PolymorphicButtonComponent = <C extends React.ElementType = 'button'>(
    props: ButtonProps<C>
  ) => React.ReactElement | null;

  const Button: PolymorphicButtonComponent = ({
    variant = 'primary',
    size = 'large',
    disabled = false,
    loading = false,
    className = '',
    onClick,
    as,
    ...props
  }) => {
    const Component = as || 'button';
    return (
      <Component
        className={`${style.button} ${style[variant]} ${style[size]} ${className}`}
        disabled={disabled}
        onClick={onClick}
        {...props}
      >
        {loading ? 'Loading...' : props.children}
      </Component>
    );
  };

export default Button;