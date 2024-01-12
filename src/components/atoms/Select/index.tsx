// Dependency
import {
  useMemo,
  createContext,
  useRef,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useMeasure, usePrevious, useBoolean } from '@kbam-frontend/hooks';

// css
import './select.css';

interface Select {
  id: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  width?: number;
  onChange?: (id: string, value: string) => void;
}

interface SelectOption {
  defaultValue?: boolean;
  children: string;
  value: string;
}

export type SelectState = {
  isOpen: boolean;
  value: string | null;
  text: string;
  toggle: () => void;
  setValue: (value: string) => void;
  setText: (text: string) => void;
};

const SelectContext = createContext<SelectState | null>(null);

function Select(props: Select) {
  const { id, defaultOpen, children, width = 110, onChange } = props;
  const [text, setText] = useState<string>('');
  const [value, setValue] = useState<string | null>(null);
  const { value: isOpen, toggle } = useBoolean(defaultOpen);
  const values = useMemo(
    () => ({ isOpen, toggle, value, setValue, text, setText }),
    [isOpen, toggle, value, text],
  );
  const previous = usePrevious(isOpen);
  const { ref, values: measureValues } = useMeasure();
  const wrapRef = useRef<HTMLInputElement>(null);

  const contentsHeight = useMemo(() => {
    return isOpen ? measureValues?.height : 0;
  }, [isOpen, measureValues?.height]);

  useEffect(() => {
    if (isOpen && wrapRef?.current) {
      wrapRef?.current.style.setProperty('height', `${measureValues.height}px`);
    }
  }, [isOpen, measureValues, wrapRef]);

  useEffect(() => {
    if (value) {
      onChange?.(id, value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, value]);

  return (
    <SelectContext.Provider value={values}>
      <div className='select-wrap'>
        <div
          className='select'
          style={{
            width,
          }}>
          <div
            aria-hidden
            className='select-head-wrap'
            onClick={(e) => {
              e.stopPropagation();
              toggle();
            }}>
            <div className='select-head'>
              <div className='selected'>{text}</div>
              <img
                className='arrow'
                src='/svg/page-next.svg'
                alt='다음'
                style={{
                  transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
                }}
              />
            </div>
          </div>
        </div>
        <div
          ref={wrapRef}
          className={`select-options ${isOpen ? 'active' : ''}`}
          style={{
            width,
            height: isOpen && previous === isOpen ? 'auto' : contentsHeight,
            opacity: isOpen ? 1 : 0,
            transition: isOpen
              ? 'height 0.25s ease-in, opacity 0.25s ease-in'
              : 'height 0.25s ease-out, opacity 0.25s ease-out',
          }}>
          <div className='select-option-wrap' ref={ref}>
            {children}
          </div>
        </div>
      </div>
    </SelectContext.Provider>
  );
}

function SelectOption(props: SelectOption) {
  const state = useContext(SelectContext);
  const { children, value, defaultValue } = props;

  const handleClick = () => {
    state?.toggle();
    state?.setValue(value);
    state?.setText(children);
  };

  useEffect(() => {
    if (defaultValue) {
      state?.setValue(value);
      state?.setText(children);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, children, defaultValue]);

  return (
    <div
      aria-hidden
      className={`select-option ${value === state?.value ? 'active' : ''}`}
      onClick={handleClick}>
      {children}
    </div>
  );
}

Select.Option = SelectOption;

export default Select;
