// Dependency
import { renameKeys } from '@kbam-frontend/madebyus';
import {
  StrategyFactorStyle,
  useGetStrategyStyleQuery,
  GetStrategyStyleQuery,
} from '@services/base';

type RadarChartsKeyType = 'benchmark' | 'strategy';

interface ChartsData {
  name: string;
  benchmark?: number;
  strategy?: number;
}

interface RadarChartsData {
  data: ChartsData[];
  strategyName: string;
  benchmarkName: string;
  baseDate: number;
}

/**
 * useFetchStrategyStyle
 * @description RadarChartsData로 변경해주는 Hooks
 * @param {string} myStrategyId myStrategyId
 * @returns {Object} returnValue
 */
export function useFetchStrategyStyle(strategyId: string): {
  data: GetStrategyStyleQuery | undefined;
  isLoading: boolean;
  radarChartsData: RadarChartsData;
} {
  const { data, isLoading } = useGetStrategyStyleQuery({
    strategyId,
  });

  const keys: RadarChartsKeyType[] = ['strategy', 'benchmark'];

  // 모든 데이터를 합칩니다.
  const allDatas = keys
    .map((item) => {
      if (item && data?.strategyStyle?.info) {
        return Object.values(
          Object.entries(data?.strategyStyle?.info).filter(([key]) => {
            return key === item;
          })[0][1] as StrategyFactorStyle[],
        ).map((datas) => {
          if (datas) {
            return renameKeys(datas, { value: item }) as ChartsData;
          }
          return datas;
        });
      }
      return {};
    })
    .flat(1)
    .filter((item) => item !== null) as ChartsData[];

  // 이름 기준으로 차트데이터 생성
  const radarChartsData = Array.from(
    allDatas
      .reduce((acc, obj) => {
        const { name } = obj;
        return acc.set(name, { ...(acc.get(name) || {}), ...obj });
      }, new Map())
      .values(),
  ) as ChartsData[];

  return {
    data,
    isLoading,
    radarChartsData: {
      data: data ? radarChartsData : [],
      strategyName: data?.strategyStyle?.info?.strategyName ?? '',
      benchmarkName: data?.strategyStyle?.info?.benchmarkName ?? '',
      baseDate: data?.strategyStyle?.info?.baseDate?.end ?? 0,
    },
  };
}
