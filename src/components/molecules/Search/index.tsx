// Dependency
import { memo, useEffect, useRef } from 'react';
import { useBoolean, useOnClickOutside } from '@kbam-frontend/hooks';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { useAtom } from 'jotai';
import { recentsSearchKeywordAtom } from '@jotai/common';

// Components
import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
// types

// svg
import IcoButtonSearch from '@svg/ico-button-search.svg?react';
import IcoButtonX from '@svg/ico-button-x.svg?react';

// css
import './search.css';

interface Search {
  value: string;
  onSearchKeywordDelete: () => void;
  onSearch?: (value: string) => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default memo(function Search(props: Search) {
  const { value, onSearch, onChange, onSearchKeywordDelete } = props;
  const divRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [recentsSearchKeyword, setRecentsSearchKeyword] = useAtom(
    recentsSearchKeywordAtom,
  );

  const {
    value: active,
    setFalse: setInActive,
    setTrue: setActive,
  } = useBoolean();

  const { value: isOpen, setFalse: setClose, setTrue: setOpen } = useBoolean();
  const {
    value: focus,
    setFalse: setFocusOut,
    setTrue: setFocus,
  } = useBoolean();

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();
    const data = e?.currentTarget?.dataset;
    const buttonRole = data?.role;
    const keywordValue = data?.value;

    const newData = recentsSearchKeyword.filter((_, idx) => {
      return idx !== Number(data?.index);
    });

    switch (buttonRole) {
      case 'ICO_SEARCH_BUTTON':
        if (inputRef.current !== null) {
          inputRef.current.focus();
          inputRef.current.focus();
        }
        setActive();
        break;
      case 'SEARCH_BUTTON':
        if (value) {
          setRecentsSearchKeyword(
            [
              {
                value,
                date: dayjs().format('MM/DD'),
              },
              ...recentsSearchKeyword,
            ].splice(0, 5),
          );
        }
        onSearch?.(value);
        break;
      case 'SEARCHES_KEYWORD_DELETE':
        onSearchKeywordDelete?.();
        if (inputRef.current !== null) {
          inputRef.current.focus();
          inputRef.current.focus();
        }
        break;
      case 'RECENT_SEARCHES_DELETE_ALL_BUTTON':
        setRecentsSearchKeyword([]);
        break;
      case 'RECENT_SEARCHES_KEYWORD_BUTTON':
        onSearch?.(`${keywordValue}`);
        setClose();
        break;
      case 'RECENT_SEARCHES_DELETE_BUTTON':
        setRecentsSearchKeyword(newData);
        break;
      default:
        break;
    }
  };

  // Input KeyDown
  const handleInputKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && event.nativeEvent.isComposing === false) {
      event.preventDefault();

      if (value) {
        setRecentsSearchKeyword(
          [
            {
              value,
              date: dayjs().format('MM/DD'),
            },
            ...recentsSearchKeyword,
          ].splice(0, 5),
        );
      }
      onSearch?.(value);
      setClose();
      if (inputRef.current !== null) {
        inputRef.current.blur();
        inputRef.current.blur();
      }
    }
  };

  // Input Focus
  const handleInputFocus = () => {
    setOpen();
    setFocus();
  };

  // Input Click
  const handleInputClick = () => {
    setOpen();
    setFocus();
  };

  // Input FocusOut
  const handleBlur = () => {
    setFocusOut();
  };

  // 검색영억 전체에서 이탈
  const handleSearchOut = () => {
    if (!value) {
      setInActive();
    }
    setFocusOut();
    setClose();
  };

  useOnClickOutside(divRef, handleSearchOut);

  useEffect(() => {
    if (!value && !focus) {
      setInActive();
      setClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div
      className={`search-wrap ${active ? 'active' : ''}  
      ${isOpen ? 'isOpen' : ''} ${focus ? 'focus' : ''}`}
      ref={divRef}>
      <Button
        className='ico-search-button'
        data-role='ICO_SEARCH_BUTTON'
        onClick={handleClick}>
        <IcoButtonSearch />
      </Button>
      <div className='search-container'>
        <div className='search'>
          <div className='search-input-wrap'>
            <Button
              className='ico-search-button'
              data-role='SEARCH_BUTTON'
              onClick={handleClick}>
              <IcoButtonSearch />
            </Button>
            <Input
              ref={inputRef}
              className='search-input'
              value={value}
              onChange={onChange}
              onBlur={handleBlur}
              onFocus={handleInputFocus}
              onKeyDown={handleInputKeyDown}
              onClick={handleInputClick}
            />
            {value.toString().length > 0 && (
              <Button
                className='button-close'
                data-role='SEARCHES_KEYWORD_DELETE'
                onClick={handleClick}>
                <IcoButtonX />
              </Button>
            )}
          </div>
          <div className='recent-searches-wrap'>
            <div className='recent-searches-button-wrap'>
              <div className='keyword-title'>최근 검색어</div>
              <Button
                onClick={handleClick}
                data-role='RECENT_SEARCHES_DELETE_ALL_BUTTON'>
                전체 삭제
              </Button>
            </div>
            <ul className='recent-searches-list'>
              {recentsSearchKeyword.map((item, index) => {
                return (
                  <li key={uuidv4()}>
                    <Button
                      className='recent-searches-list-keyword'
                      data-role='RECENT_SEARCHES_KEYWORD_BUTTON'
                      data-value={item?.value as string}
                      onClick={handleClick}>
                      {item.value}
                    </Button>
                    <div className='recent-searches-list-date'>{item.date}</div>
                    <Button
                      className='recent-searches-list-delete-button'
                      data-index={index}
                      data-role='RECENT_SEARCHES_DELETE_BUTTON'
                      onClick={handleClick}>
                      <img src='/svg/button-x.svg' alt='삭제' />
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});
