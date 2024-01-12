// Dependency
import { STRATEGIES_FILTERS, LEGEND_LIST } from '@constants/strategies';
import { useAtom } from 'jotai';
import { sectorVariablesAtom } from '@jotai/strategies';
import { useFetchSectorStrategies } from '@hooks/readymades/useFetchSectorStrategies';

// Components
import Button from '@components/atoms/Button';
import SectorStrategiesTab from '@components/strategies/sectorStrategies/SectorStrategiesTab';
import SectorStrategiesList from '@components/strategies/sectorStrategies/List';
import LegendList from '@components/molecules/LegendList';
import SelectButtonList from '@components/molecules/SelectButtonList';

// types
import { DataItem } from '@interface/common';

export default function Main() {
  const [sectorVariables, setSectorVariables] = useAtom(sectorVariablesAtom);
  const { data, isLoading, fetchNextPage, pageInfo } = useFetchSectorStrategies(
    {},
  );

  const handleClcik = () => {
    fetchNextPage({
      pageParam: {
        after: pageInfo.endCursor,
      },
    });
  };

  const handleSelectButtonListClick = (_id: string, value: DataItem) => {
    setSectorVariables({
      ...sectorVariables,
      ...value,
    });
  };

  return (
    <div className='strategies-sector'>
      <SectorStrategiesTab />

      <div className='strategies-sort-wrap'>
        <LegendList data={LEGEND_LIST} />
        <SelectButtonList
          id='strategiesUniverse'
          data={STRATEGIES_FILTERS}
          onClick={handleSelectButtonListClick}
          defaultValues={{
            orderMethod: sectorVariables.orderMethod,
            orderPeriodReturn: sectorVariables.orderPeriodReturn,
          }}
        />
      </div>
      {!isLoading && (
        <>
          <SectorStrategiesList data={data} />
          {pageInfo.hasNextPage && <Button onClick={handleClcik}>다음</Button>}
        </>
      )}
    </div>
  );
}
