// Dependency
import { memo, useMemo, useRef, useEffect, useState, Fragment } from 'react';
import {
  useMeasure,
  usePrevious,
  useBoolean,
  useOnClickOutside,
} from '@kbam-frontend/hooks';

// Components
import Button from '@components/atoms/Button';

// types
import { DataItem } from '@interface/common';

// svg
import IcoArrow from '@svg/ico-arrow.svg?react';

// css
import './select-button-list.css';

interface SelectButtonListDataItem {
  title: string;
  value: string;
}

interface SelectButtonListData {
  title: string;
  id: string;
  defaultValue?: string;
  items: SelectButtonListDataItem[];
}

interface SelectButtonList {
  id: string;
  defaultValues: DataItem;
  data: SelectButtonListData[];
  defaultOpen?: boolean;
  width?: number;
  onClick?: (id: string, value: DataItem) => void;
}

export default memo(function SelectButtonList(props: SelectButtonList) {
  const { id, defaultOpen, defaultValues, data, width = 176, onClick } = props;

  const { value: isOpen, toggle, setFalse } = useBoolean(defaultOpen);

  const [orginListState, setOriginListState] =
    useState<DataItem>(defaultValues);
  const [listState, setListState] = useState<DataItem>(defaultValues);

  const previous = usePrevious(isOpen);
  const { ref, values: measureValues } = useMeasure();
  const wrapRef = useRef<HTMLInputElement>(null);
  const buttonListRef = useRef<HTMLDivElement>(null);

  const contentsHeight = useMemo(() => {
    return isOpen ? measureValues?.height : 0;
  }, [isOpen, measureValues?.height]);

  useEffect(() => {
    if (isOpen && wrapRef?.current) {
      wrapRef?.current.style.setProperty('height', `${measureValues.height}px`);
    }
  }, [isOpen, measureValues, wrapRef]);

  const handleClick = (id: string, value: string) => {
    setListState({
      ...listState,
      [id]: value,
    });
  };

  const handleSearchClick = () => {
    setOriginListState(listState);
    onClick?.(id, listState);
    toggle();
  };

  const statusNames = useMemo(() => {
    return data
      .map((item) => {
        return item.items.filter((list) =>
          Object.values(orginListState).includes(list.value),
        );
      })
      .flat();
  }, [data, orginListState]);

  useOnClickOutside(buttonListRef, () => setFalse());

  return (
    <div className='select-button-list-wrap' ref={buttonListRef}>
      <div
        className='select-button-list'
        style={{
          width,
        }}>
        <div
          aria-hidden
          className='select-button-list-head-wrap'
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}>
          <div className='select-button-list-head'>
            <ul>
              {statusNames.map((item) => {
                return <li key={item.value}>{item.title}</li>;
              })}
            </ul>
            <IcoArrow
              style={{
                transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
              }}
            />
          </div>
        </div>
      </div>
      <div
        ref={wrapRef}
        className={`select-button-list-options ${isOpen ? 'active' : ''}`}
        style={{
          width,
          height: isOpen && previous === isOpen ? 'auto' : contentsHeight,
          opacity: isOpen ? 1 : 0,
          transition: isOpen
            ? 'height 0.25s ease-in, opacity 0.25s ease-in'
            : 'height 0.25s ease-out, opacity 0.25s ease-out',
        }}>
        <div className='select-button-list-option-wrap' ref={ref}>
          {data.map((item) => {
            return (
              <Fragment key={item.id}>
                <h6>{item.title}</h6>
                <ul>
                  {item.items.map((list) => {
                    return (
                      <li
                        key={list.value}
                        className={`${
                          listState[item.id] === list.value ? 'active' : ''
                        }`}>
                        <Button
                          onClick={() => handleClick(item.id, list.value)}>
                          {list.title}
                        </Button>
                      </li>
                    );
                  })}
                </ul>
              </Fragment>
            );
          })}
          <div className='select-button-list-option-button-wrap'>
            <Button onClick={handleSearchClick} className='basic primary'>
              검색
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});
