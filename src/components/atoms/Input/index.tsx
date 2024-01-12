/**
 * Atoms > Input
 */

// Dependency
import React, { forwardRef, InputHTMLAttributes } from 'react';

// css
import './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  className?: string;
  type?: 'text' | 'number' | 'email' | 'password';
  disabled?: boolean;
  readonly?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type = 'text', className = '', readonly = false, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      className={`input ${className}`}
      type={type}
      readOnly={readonly}
      {...rest}
    />
  );
});

export default Input;
