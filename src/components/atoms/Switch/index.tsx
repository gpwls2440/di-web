import React, { useEffect, useState } from 'react';

// css
import './switch.css';

interface Switch {
  children: string | React.ReactNode;
  disabled?: boolean;
  isChecked?: boolean;
  labelPosition?: 'left' | 'right';
  onColor?: string;
  offColor?: string;
  onChange?: (checked: boolean) => void;
}

export default function Switch(props: Switch) {
  const {
    children,
    disabled = false,
    isChecked = false,
    labelPosition = 'right',
    onColor = '#ffdc00',
    offColor = '#ddd',
    onChange,
  } = props;
  const [checked, setChecked] = useState<boolean>(isChecked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (disabled) {
      return;
    }
    setChecked((v) => !v);
    onChange?.(e.target.checked);
  };

  useEffect(() => {
    setChecked(isChecked);
  }, [isChecked]);

  return (
    <div className='switch'>
      {labelPosition === 'left' && children}
      <label className={disabled ? 'disabled' : ''}>
        <input type='checkbox' checked={checked} onChange={handleChange} />
        <span
          className='switcher'
          style={{
            backgroundColor: checked ? onColor : offColor,
          }}
        />
      </label>
      {labelPosition === 'right' && children}
    </div>
  );
}
