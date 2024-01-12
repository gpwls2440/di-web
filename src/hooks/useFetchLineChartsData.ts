// Dependency
import {
  useGetMyCumulativeReturnQuery,
  SimulationTypeEnum,
  IntervalEnum,
  UniverseEnum,
  BaseDate,
} from '@services/auth';
import { TickDto, LineChartsData } from '@interface/chart';
import dayjs from 'dayjs';

// types
import { StrategiesUniverse } from '@interface/strategies';

interface UseFetchLineChartsData {
  myStrategyId: string;
  benchmark?: StrategiesUniverse;
}

/**
 * useFetchLineChartsData
 * @description LineChartsData로 변경해주는 Hooks
 * @param {string} myStrategyId myStrategyId
 * @returns {Object} returnValue
 */
export function useFetchLineChartsData(props: UseFetchLineChartsData): {
  data: LineChartsData;
  isLoading: boolean;
  isError: boolean;
} {
  const { myStrategyId, benchmark = 'KOSPI' } = props;
  const { data, isLoading, isError } = useGetMyCumulativeReturnQuery(
    {
      myStrategyId,
      simulationType: SimulationTypeEnum.All,
      interval: IntervalEnum.Day,
      benchmark: benchmark as UniverseEnum,
    },
    {
      enabled: !!myStrategyId,
    },
  );

  const response = data?.myCumulativeReturn?.myCumulativeReturn;
  const baseDate = response?.baseDate as BaseDate;

  const chartData = response?.chart?.map((item) => {
    return {
      myStrategy: item?.myStrategy?.value || 0,
      strategy: item?.strategy?.value || 0,
      benchmark: item?.benchmark?.value || 0,
      name: dayjs(item?.ts).format('YYYY/MM/DD'),
    };
  }) as TickDto[];

  return {
    data: {
      data: chartData,
      strategyName: response?.chart?.[0]?.strategy?.name ?? '',
      myStrategyName: response?.chart?.[0]?.myStrategy?.name ?? '',
      benchmarkName: response?.chart?.[0]?.benchmark?.name ?? '',
      baseDate,
      period: `${dayjs(baseDate?.start).format('YYYY/MM/DD')} ~ ${dayjs(
        baseDate?.end,
      ).format('YYYY/MM/DD')}`,
    },
    isLoading,
    isError,
  };
}
