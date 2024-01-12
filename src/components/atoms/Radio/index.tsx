/**
 * Atoms > Radio
 */

import { forwardRef, InputHTMLAttributes } from 'react';

// css
import './radio.css';

interface Radio extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  label?: string | React.ReactNode;
  radioClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = forwardRef<HTMLInputElement, Radio>(function Radio(
  { id, name, label = '', labelClassName = '', radioClassName = '', ...rest },
  ref,
) {
  return (
    <div className='radio-wrap'>
      <input
        name={name}
        type='radio'
        id={id}
        className={radioClassName}
        ref={ref}
        {...rest}
      />
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
    </div>
  );
});

export default Radio;
