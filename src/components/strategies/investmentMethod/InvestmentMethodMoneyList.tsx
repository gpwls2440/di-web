// Dependency
import { useEffect, useState, useCallback } from 'react';
import { BOOKSIZE_OPTIONS } from '@constants/readymades';

// Components
import CheckButton from '@components/molecules/CheckButton';

interface InvestmentMethodMoneyList {
  defaultValue?: number;
  onChange?: (value: number) => void;
}

export default function InvestmentMethodMoneyList(
  props: InvestmentMethodMoneyList,
) {
  const { defaultValue, onChange } = props;
  const [price, setPrice] = useState<number | string>(
    defaultValue ?? BOOKSIZE_OPTIONS[1].value,
  );

  const handleClick = useCallback(
    (value: number) => {
      setPrice(value);
      onChange?.(value);
    },
    [onChange],
  );

  useEffect(() => {
    if (defaultValue) {
      setPrice(defaultValue);
    }
  }, [defaultValue]);

  return (
    <div className='investment-method-list'>
      <ul>
        {BOOKSIZE_OPTIONS?.map((item) => {
          return (
            <li key={item.value}>
              <CheckButton
                className={`${price === item.value ? 'active' : ''}`}
                onClick={() => handleClick(Number(item.value))}>
                <div className='level-wrap'>
                  <h5 className='level-title'> {item.text}</h5>
                </div>
              </CheckButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
