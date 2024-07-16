import React, { forwardRef } from 'react';
import style from './style.module.css';
import spritesheet from '../../assets/images/interface/icons-sprite-sheet.svg';

type ButtonProps<C extends React.ElementType> = {
  variant?: 'primary' | 'outline' | 'transparent' | 'wrap' | 'close';
  size?: 'smallX' | 'smallM' | 'smallL' | 'medium' | 'large';
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  as?: C;
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>;

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

type PolymorphicButtonComponent = <C extends React.ElementType = 'button'>(
  props: ButtonProps<C> & { ref?: PolymorphicRef<C> }
) => React.ReactElement | null;

export const Button: PolymorphicButtonComponent = forwardRef(function Button<C extends React.ElementType = 'button'>(
  {
    variant = 'primary',
    size = 'large',
    disabled = false,
    loading = false,
    className = '',
    onClick,
    as,
    ...props
  }: ButtonProps<C>,
  ref?: PolymorphicRef<C>
) {
  const Component = as || 'button';

  return (
    <Component
      className={`${style.button} ${style[variant]} ${style[size]} ${className}`}
      disabled={disabled}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {loading ? 'Loading...' : props.children}
      {variant === 'close' && (
        <svg className={style.closeIcon} >
          <use href={`${spritesheet}#close`}></use>
        </svg>)
      }
    </Component>
  );
}) as PolymorphicButtonComponent;

