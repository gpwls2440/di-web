// Dependency
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { useAtom } from 'jotai';
import { v4 as uuidv4 } from 'uuid';
import { useModal } from '@hooks/useModal';
import { useChecks } from '@hooks/useChecks';
import { ThemeGroupType } from '@services/base';
import { themeVariablesAtom, themeKeywordsAtom } from '@jotai/strategies';
import { ObjectFilterValues } from '@utils/object';

// Components
import Title from '@components/atoms/Title';
import Button from '@components/atoms/Button';
import Checkbox from '@components/atoms/CheckBox';

// types

interface ThemeKeywordCheckboxes {
  data: ThemeGroupType[];
}

export default function ThemeKeywordCheckboxes(props: ThemeKeywordCheckboxes) {
  const { data = [] } = props;
  const [themeGroup, setThemeGroup] = useState<string[]>([]);
  const [keywordData, setKeywordData] = useState<ThemeGroupType[]>([]);
  const [themeVariables, setThemeVariables] = useAtom(themeVariablesAtom);
  const [themeKeyword, setThemeKeywords] = useAtom(themeKeywordsAtom);
  const { closeModal } = useModal();

  const selectedKeywordId = useMemo(() => {
    return themeKeyword.map((item) => item.id);
  }, [themeKeyword]);

  const checkboxData = useMemo(() => {
    return data.reduce((acc, item) => {
      const { id } = item;
      return { ...acc, [`${id}`]: selectedKeywordId.includes(id) };
    }, {});
  }, [data, selectedKeywordId]);

  const { handleDirectChecked, checkboxes, handleDirectAllChecked } =
    useChecks(checkboxData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    handleDirectChecked(value, !!checked);
  };

  const handleClickClose = () => {
    setThemeGroup([]);
    setThemeVariables({
      ...themeVariables,
      themeGroup: [],
    });
    closeModal('themeKeyword');
  };

  const handleClick = () => {
    setThemeVariables({
      ...themeVariables,
      themeGroup,
    });

    setThemeKeywords(keywordData);
    closeModal('themeKeyword');
  };

  useEffect(() => {
    const checkedArr = [...Object.keys(ObjectFilterValues(checkboxes, true))];
    const keywordDataArr = data.filter((item) =>
      checkedArr.includes(item.id),
    ) as ThemeGroupType[];

    setKeywordData(keywordDataArr);
    setThemeGroup(checkedArr);
  }, [checkboxes, data]);

  return (
    <div className='modal theme-keyword'>
      <Title
        title='테마 키워드 선택'
        subTitle='선택한 키워드별로 전략을 확인할 수 있습니다.'
      />
      <Button className='button-close' onClick={handleClickClose}>
        <img src='/svg/button-close.svg' alt='닫기' />
      </Button>
      <div className='content'>
        <div className='theme-keyword-list-wrap'>
          <ul className='theme-keyword-list'>
            {data.map((item, index) => {
              return (
                <li
                  key={uuidv4()}
                  className={`${index % 2 === 0 ? 'odd' : ''}`}>
                  <Checkbox
                    onChange={handleChange}
                    id={item.id}
                    label={item.name}
                    value={item.id}
                    defaultChecked={checkboxes[item.id]}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className='theme-keyword-button-wrap'>
          <Button
            className='button-refresh'
            onClick={() => handleDirectAllChecked(false)}>
            <img src='/svg/ico-refresh.svg' alt='초기화' />
            초기화
          </Button>
          <Button className='basic cancle' onClick={handleClickClose}>
            취소
          </Button>
          <Button className='basic primary' onClick={handleClick}>
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
