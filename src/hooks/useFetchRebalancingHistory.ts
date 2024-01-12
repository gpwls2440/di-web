// Dependency
import {
  SimulationTypeEnum,
  useGetMyRebalancingHistoryQuery,
} from '@services/auth';
import dayjs from 'dayjs';

import {
  StackBarChartItemDto,
  StackBarChartLegendItem,
} from '@interface/chart';

/**
 * useFetchRebalancingHistory
 * @description StackBarChart로 변경해주는 Hooks
 * @param {string} myStrategyId myStrategyId
 * @returns {Object} returnValue
 */
export function useFetchRebalancingHistory(myStrategyId: string): {
  baseDate: string;
  isLoading: boolean;
  stackBarChartList: StackBarChartItemDto[];
  legendList: StackBarChartLegendItem[];
} {
  const { data, isLoading } = useGetMyRebalancingHistoryQuery(
    {
      id: myStrategyId,
      simulationType: SimulationTypeEnum.All,
    },
    {
      enabled: !!myStrategyId,
    },
  );
  const rebalancingHistoryData =
    data?.myRebalancingHistory?.myRebalancingHistory;
  const infoData = rebalancingHistoryData?.info;
  const stackBarChartList = infoData
    ?.map((item) => {
      return item?.holdings?.reduce<StackBarChartItemDto>(
        (prev, cur, i: number) => {
          // eslint-disable-next-line no-param-reassign
          prev[i] = cur?.weight ? Math.round(cur.weight * 10000) : 0;
          return prev;
        },
        {
          cash: item.cash?.weight ? Math.round(item.cash.weight * 10000) : 0,
          date: dayjs(item?.ts).format('YYYY/MM/DD'),
          0: 0,
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        },
      );
    })
    .reverse() as StackBarChartItemDto[];

  const legendList = infoData?.map((item) => {
    return {
      holdings: item?.holdings?.concat({
        name: '현금',
        weight: item.cash?.weight ?? 0,
      }),
    };
  }) as StackBarChartLegendItem[];

  return {
    baseDate: `${dayjs(rebalancingHistoryData?.baseDate?.start).format(
      'YYYY/MM/DD',
    )} ~ ${dayjs(rebalancingHistoryData?.baseDate?.end).format('YYYY/MM/DD')}`,
    isLoading,
    stackBarChartList,
    legendList,
  };
}
