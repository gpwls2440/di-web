/**
 * Atoms > Button
 */

/* eslint-disable react/button-has-type */
// Dependency
import React, { ButtonHTMLAttributes } from 'react';

// css
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}
export default React.memo(function Button(props: ButtonProps) {
  const { type = 'button', className = '', children, ...rest } = props;

  return (
    <button className={`button ${className}`} type={type} {...rest}>
      {children}
    </button>
  );
});
