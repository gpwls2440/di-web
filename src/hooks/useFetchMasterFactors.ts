// Dependency
import {
  GetFactorsQuery,
  useGetFactorsQuery,
  UniversePresetEnum,
} from '@services/base';

import {
  MasterFactorData,
  MasterFactorHistogramChartItem,
} from '@interface/chart';

interface useFetchMasterFactors {
  strategyId: string;
  universePreset: UniversePresetEnum;
  isFetch?: boolean;
}

/**
 * useFetchMasterFactors
 * @description 대가의 전략 팩터 데이터로 변경해주는 Hooks
 * @param {string} strategyId strategyId
 * @returns {Object} returnValue
 */
export function useFetchMasterFactors(props: useFetchMasterFactors): {
  data: GetFactorsQuery | undefined;
  isFetching: boolean;
  masterFactorData: MasterFactorData;
} {
  const { strategyId, universePreset, isFetch } = props;
  const { data, isFetching } = useGetFactorsQuery(
    {
      strategyId,
      universePreset,
    },
    {
      enabled: isFetch,
      refetchInterval: 0,
    },
  );

  const factorsData = data?.factors?.factors?.[0]?.factors?.[0];
  const stickCounts =
    (factorsData?.histogramData?.stickCounts as number[]) || ([] as number[]);
  const min = factorsData?.min ?? 0;
  const max = factorsData?.max ?? 0;
  const maxCount = stickCounts.length > 0 ? Math.max(...stickCounts) : 0;

  const floorIndex = Math.floor((max + min) / 2);
  const startIndex = (floorIndex === 0 ? floorIndex - 1 : floorIndex) - 1;
  const getTotalCount = (index: number) => {
    return stickCounts?.slice(index).reduce((acc, cur) => acc + cur, 0) || 0;
  };
  const histogram = stickCounts?.map((item, i) => {
    const heightValue = Math.floor((item * 100) / maxCount);

    return {
      height: heightValue < 4 ? 4 : heightValue,
      volume: item,
      totalCount: getTotalCount(i),
    };
  }) as MasterFactorHistogramChartItem[];

  return {
    data,
    isFetching,
    masterFactorData: {
      histogram,
      startIndex,
      value: startIndex ? startIndex + 1 : undefined,
      startTotalCount: startIndex ? getTotalCount(startIndex) : 0,
    },
  };
}
