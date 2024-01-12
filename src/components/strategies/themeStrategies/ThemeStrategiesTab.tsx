// Dependency
import { memo, useEffect } from 'react';
import { useBoolean } from '@kbam-frontend/hooks';
import { useModal } from '@hooks/useModal';
import { useAtom } from 'jotai';
import { countriesdAtom } from '@jotai/common';
import { themeVariablesAtom, themeKeywordsAtom } from '@jotai/strategies';
import {
  useGetThemeGroupsQuery,
  UniverseCountryEnum,
  ThemeGroupStatusEnum,
  ThemeGroupType,
} from '@services/base';

// Components
import Button from '@components/atoms/Button';
import ThemeKeywordCheckboxes from '@components/strategies/themeStrategies/ThemeKeywordCheckboxes';
import ThemeKeywordList from '@components/strategies/themeStrategies/ThemeKeywordList';

export default memo(function ThemeStrategiesTab() {
  const [countries] = useAtom(countriesdAtom);
  const [themeVariables, setThemeVariables] = useAtom(themeVariablesAtom);
  const [themeKeyword, setThemeKeywords] = useAtom(themeKeywordsAtom);
  const { value, setTrue, setFalse } = useBoolean(false);
  const { isLoading, data } = useGetThemeGroupsQuery(
    {
      countries: countries as UniverseCountryEnum,
      status: ThemeGroupStatusEnum.Activated,
    },
    {
      enabled: value,
      staleTime: 1,
    },
  );
  const { openModal, modalList } = useModal();

  const handleTabClick = (type: string) => {
    setThemeVariables({
      orderMethod: 'CUMULATIVE',
      orderPeriodReturn: 'MONTH_3',
      themeGroup: [],
      isKbPick: type === 'pick',
    });

    if (type === 'pick') {
      setThemeKeywords([]);
    }
  };

  const handleClick = () => {
    setTrue();
  };

  useEffect(() => {
    if (value) {
      if (!isLoading && data) {
        openModal({
          name: 'themeKeyword',
          children: (
            <ThemeKeywordCheckboxes
              data={data?.themeGroups?.themeGroups as ThemeGroupType[]}
            />
          ),
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, data]);

  useEffect(() => {
    !modalList.length && setFalse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalList]);

  return (
    <div className='theme-strategies-tab'>
      <Button
        className={`tab-style ${themeVariables.isKbPick ? 'active' : ''}`}
        onClick={() => handleTabClick('pick')}>
        KB`s PICK
      </Button>
      <Button
        className={`tab-style ${!themeVariables.isKbPick ? 'active' : ''}`}
        onClick={() => handleTabClick('kb')}>
        KB 테마
      </Button>
      {!themeVariables.isKbPick && (
        <>
          <Button className='tab-style button-filter' onClick={handleClick}>
            <img src='/svg/ico-filter.svg' alt='필터' />
            키워드 필터
          </Button>
          {themeKeyword && <ThemeKeywordList />}
        </>
      )}
    </div>
  );
});
