// Dependency
import { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import { useBoolean, useDebounce } from '@kbam-frontend/hooks';
import {
  addCommas,
  removeCommas,
  numberInRange,
} from '@kbam-frontend/madebyus';

// Components
import Input from '@components/atoms/Input';
import Box from '@components/atoms/Box';
import Title from '@components/atoms/Title';
import Button from '@components/atoms/Button';

// svg
import IcoButtonSelected from '@svg/ico-button-selected.svg?react';
import IcoWarnings from '@svg/ico-warnings.svg?react';

// types
import { SelectButtonBoxItem } from '@interface/common';

// css
import './select-button-box.css';

interface SelectButtonBox {
  id: string;
  title: string;
  description: string;
  warnings?: string;
  defalutValue?: string | number;
  viewCount?: number;
  data: SelectButtonBoxItem[];
  onChange?: (id: string, value: SelectButtonBoxItem) => void;
}

export default function SelectButtonBox(props: SelectButtonBox) {
  const {
    id,
    title,
    description,
    warnings,
    defalutValue,
    viewCount = 4,
    data,
    onChange,
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  const defalutValueData = useMemo(() => {
    const index = data.findIndex((item) => item.value === defalutValue);
    return data[index];
  }, [data, defalutValue]);

  const [buttonValue, setButtonValue] = useState<SelectButtonBoxItem>(
    defalutValueData ?? {},
  );

  const [inputValue, setInputValue] = useState<string>('');
  const debouncedValue = useDebounce<string | number>(inputValue, 500);
  const { value, setValue } = useBoolean(true);

  const handleClick = useCallback(
    (id: string, newValue: SelectButtonBoxItem) => {
      if (newValue.type === 'INPUT') {
        if (inputRef.current !== null) {
          inputRef.current.disabled = false;
          inputRef.current.focus();
        }
      }

      if (newValue.type !== 'INPUT') {
        setInputValue('');
        setValue(true);
      }
      setButtonValue(newValue);
      onChange?.(id, newValue);
    },
    [onChange, setValue],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const origin = e?.target?.value
      .split('만원')
      .map((item) => removeCommas(item))
      .join('');
    const isRange = numberInRange(Number(origin), 100, 100000);
    if (origin) {
      setValue(isRange);
      setInputValue(`${addCommas(origin)}만원`);
    } else {
      setInputValue('');
    }
  };

  useEffect(() => {
    if (debouncedValue) {
      const newValue = debouncedValue
        .toString()
        .split('만원')
        .map((item) => removeCommas(item))
        .join('');

      onChange?.(id, {
        text: value ? `${newValue}` : '',
        value: value ? Number(newValue) : '',
        type: 'INPUT',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, value, debouncedValue]);

  const handleKeyUp = () => {
    inputRef.current?.setSelectionRange(
      inputValue.length - 2,
      inputValue.length - 2,
    );
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setInputValue('');
      setValue(false);
    }
  };

  return (
    <div className='select-button-box'>
      <Box>
        <Title title={title} subTitle={description} />
        {warnings && (
          <p className={`select-button-box-warnings ${value ? 'error' : ''}`}>
            * {warnings}
          </p>
        )}
        <ul
          style={{
            gridTemplateColumns: `repeat(${viewCount},minmax(0,1fr))`,
          }}>
          {data.map((item, index) => {
            return (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={`${index}${item.value}`}
                className={`${
                  (index % viewCount) + 1 === viewCount ? 'mgr0' : ''
                }`}>
                {(!item.type || item.type === 'BUTTON') && (
                  <Button
                    className={`${
                      buttonValue.value === item.value ? 'active' : ''
                    }`}
                    onClick={() => handleClick(id, item)}>
                    {buttonValue.value === item.value && <IcoButtonSelected />}
                    {item.text}
                  </Button>
                )}
                {item.type === 'INPUT' && (
                  <Button
                    className={`input ${
                      buttonValue.value === item.value ? 'active' : ''
                    } ${!value ? 'error' : ''} `}
                    onClick={() => handleClick(id, item)}>
                    {!value && <IcoWarnings className='ico-warnings' />}
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      id='directInput'
                      name='directInput'
                      maxLength={9}
                      autoComplete='off'
                      placeholder='직접입력'
                      onBlur={handleBlur}
                      onChange={handleInputChange}
                      onKeyUp={handleKeyUp}
                    />
                  </Button>
                )}
              </li>
            );
          })}
        </ul>
      </Box>
    </div>
  );
}
