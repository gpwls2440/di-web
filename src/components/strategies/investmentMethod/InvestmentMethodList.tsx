// Dependency
import { useEffect, useState, useCallback } from 'react';

// Components
import CheckButton from '@components/molecules/CheckButton';

// types
import { INVESTMENT_METHOD_ITEM } from '@interface/strategies';

interface InvestmentMethodList {
  data: INVESTMENT_METHOD_ITEM[];
  defaultValue: string;
  onChange?: (id: string) => void;
}

export default function InvestmentMethodList(props: InvestmentMethodList) {
  const { defaultValue, data, onChange } = props;
  const [level, setLevel] = useState<string>(data[0].id);

  const handleClick = useCallback(
    (id: string) => {
      setLevel(id);
      onChange?.(id);
    },
    [onChange],
  );

  useEffect(() => {
    setLevel(defaultValue);
  }, [defaultValue]);

  return (
    <div className='investment-method-list'>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <CheckButton
                className={`${level === item.id ? 'active' : ''}`}
                onClick={() => handleClick(item.id)}>
                <div className='level-wrap'>
                  <h5 className='level-title'> {item.name}</h5>
                  <img
                    src={`/svg/investment-method/${item.id.toLowerCase()}.svg`}
                    alt={item.name}
                  />
                  <p className='level-description'> {item.description}</p>
                </div>
              </CheckButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
