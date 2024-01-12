// Dependency
import { useCallback, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { numberToPercent } from '@kbam-frontend/madebyus';

// Components
import Box from '@components/atoms/Box';
import Title from '@components/atoms/Title';
import Button from '@components/atoms/Button';
import IconTooltip from '@components/atoms/IconTooltip';

// svg
import IcoButtonSelected from '@svg/ico-button-selected.svg?react';

// types

// css
import './style-factor.css';

interface StyleFactor {
  id: string;
  title: string;
  description: string;
  defalutValue?: number;
  high: number;
  middle: number;
  low: number;
  onChange?: (id: string, value: number) => void;
}

export default function StyleFactor(props: StyleFactor) {
  const { id, title, description, defalutValue, high, middle, low, onChange } =
    props;
  const [value, setValue] = useState<number>(defalutValue ?? 0);

  const data = [
    {
      id: 'high',
      value: high,
    },
    {
      id: 'middle',
      value: middle,
    },
    {
      id: 'low',
      value: low,
    },
  ];
  const viewCount = data.length;

  const handleClick = useCallback(
    (id: string, newValue: number) => {
      setValue(newValue);
      onChange?.(id, newValue);
    },
    [onChange],
  );

  const percent = useMemo(() => {
    return Number(numberToPercent(value, false, 0));
  }, [value]);

  return (
    <div className='style-factor'>
      <Box>
        <Title
          title={
            <>
              <IcoButtonSelected className='ico-title' />
              <span>{title}</span>
              <IconTooltip description={description} />
            </>
          }
        />
        <div className='percent-bar-box'>
          <div className='num'>{value === 0 ? 0 : 100 - percent}%</div>
          <div className='bar-wrap'>
            <div
              className='bar'
              style={{
                width: `${percent}%`,
              }}
            />
          </div>
          <div className='num'>100%</div>
        </div>
        <ul
          style={{
            gridTemplateColumns: `repeat(${viewCount},minmax(0,1fr))`,
          }}>
          {data.map((item, index) => {
            return (
              <li
                key={uuidv4()}
                className={`${
                  (index % viewCount) + 1 === viewCount ? 'mgr0' : ''
                }`}>
                <Button
                  className={`${value === item.value ? 'active' : ''}`}
                  onClick={() => handleClick(id, item?.value)}>
                  {value === item.value && <IcoButtonSelected />}
                  상위 0~{numberToPercent(item.value, true, 0)}
                </Button>
              </li>
            );
          })}
        </ul>
      </Box>
    </div>
  );
}
