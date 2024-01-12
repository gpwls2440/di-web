/**
 * Atoms > Checkbox
 */

import { forwardRef, InputHTMLAttributes } from 'react';

// css
import './checkbox.css';

interface CheckBox extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name?: string;
  label?: string | React.ReactNode;
  checkBoxClassName?: string;
  checkBoxWrapClassName?: string;
  labelClassName?: string;
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBox>(function CheckBox(
  {
    id,
    name,
    label = '',
    labelClassName = '',
    checkBoxClassName = '',
    checkBoxWrapClassName = '',
    ...rest
  },
  ref,
) {
  return (
    <div className={`checkbox-wrap ${checkBoxWrapClassName}`}>
      <input
        name={name}
        type='checkbox'
        id={id}
        className={checkBoxClassName}
        ref={ref}
        {...rest}
      />
      <label htmlFor={id} className={labelClassName}>
        <span />
        {label}
      </label>
    </div>
  );
});

export default CheckBox;
