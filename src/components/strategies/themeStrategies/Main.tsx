// Dependency
import { STRATEGIES_FILTERS, LEGEND_LIST } from '@constants/strategies';
import { useAtom } from 'jotai';
import { themeVariablesAtom } from '@jotai/strategies';
import { useFetchThemeStrategies } from '@hooks/readymades/useFetchThemeStrategies';

// Components
import Button from '@components/atoms/Button';
import LegendList from '@components/molecules/LegendList';
import ThemeStrategiesList from '@components/strategies/themeStrategies/List';
import SelectButtonList from '@components/molecules/SelectButtonList';
import ThemeStrategiesTab from './ThemeStrategiesTab';

// types
// eslint-disable-next-line import/order
import { DataItem } from '@interface/common';

export default function Main() {
  const [themeVariables, setThemeVariables] = useAtom(themeVariablesAtom);
  const { data, isLoading, fetchNextPage, pageInfo } = useFetchThemeStrategies(
    {},
  );

  const handleSelectButtonListClick = (_id: string, value: DataItem) => {
    setThemeVariables({
      ...themeVariables,
      ...value,
    });
  };

  const handleClcik = () => {
    fetchNextPage({
      pageParam: {
        after: pageInfo.endCursor,
      },
    });
  };

  return (
    <div className='strategies-theme'>
      <ThemeStrategiesTab />
      <div className='strategies-sort-wrap'>
        <LegendList data={LEGEND_LIST} />
        {!themeVariables.isKbPick && (
          <SelectButtonList
            id='strategiesUniverse'
            data={STRATEGIES_FILTERS}
            onClick={handleSelectButtonListClick}
            defaultValues={{
              orderMethod: themeVariables.orderMethod,
              orderPeriodReturn: themeVariables.orderPeriodReturn,
            }}
          />
        )}
      </div>
      {!isLoading && (
        <>
          <ThemeStrategiesList data={data} />
          {pageInfo.hasNextPage && <Button onClick={handleClcik}>다음</Button>}
        </>
      )}
    </div>
  );
}
