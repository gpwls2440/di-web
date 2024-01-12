// Dependency
import { useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
import Button from '@components/atoms/Button';

// types
import { SelectItem } from '@interface/common';

// css
import './button-tabs.css';

interface ButtonTab {
  id: string;
  defalutValue?: SelectItem;
  data: SelectItem[];
  onChange?: (id: string, value: SelectItem) => void;
}

export default function ButtonTab(props: ButtonTab) {
  const { id, defalutValue, data, onChange } = props;
  const [value, setValue] = useState<SelectItem>(defalutValue ?? data[0]);

  const handleClick = useCallback(
    (id: string, newValue: SelectItem) => {
      setValue(newValue);
      onChange?.(id, newValue);
    },
    [onChange],
  );

  return (
    <div className='button-tab-wrap'>
      <div className='button-tab'>
        {data.map((item) => {
          return (
            <Button
              key={uuidv4()}
              className={`${value.value === item.value ? 'active' : ''}`}
              onClick={() => handleClick(id, item)}>
              {item.text}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
