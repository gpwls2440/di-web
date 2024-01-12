// Dependency
import { renameKeys } from '@kbam-frontend/madebyus';
import dayjs from 'dayjs';
import {
  useGetMyStrategyStyleQuery,
  StrategyFactorStyle,
  GetMyStrategyStyleQuery,
  SimulationTypeEnum,
} from '@services/auth';

type RadarChartsKeyType = 'myStrategy' | 'benchmark' | 'strategy';

interface ChartsData {
  name: string;
  myStrategy?: number;
  benchmark?: number;
  strategy?: number;
}

interface RadarChartsData {
  data: ChartsData[];
  strategyName: string;
  benchmarkName: string;
  myStrategyName: string;
  baseDate: string;
}

/**
 * useFetchMyStrategyStyle
 * @description RadarChartsData로 변경해주는 Hooks
 * @param {string} myStrategyId myStrategyId
 * @returns {Object} returnValue
 */
export function useFetchMyStrategyStyle(myStrategyId: string): {
  data: GetMyStrategyStyleQuery | undefined;
  isLoading: boolean;
  radarChartsData: RadarChartsData;
} {
  const { data, isLoading } = useGetMyStrategyStyleQuery({
    myStrategyId,
    simulationType: SimulationTypeEnum.All,
  });

  const keys: RadarChartsKeyType[] = ['myStrategy', 'benchmark', 'strategy'];

  // 모든 데이터를 합칩니다.
  const allDatas = keys
    .map((item) => {
      if (item && data?.myStrategyStyle?.info) {
        return Object.values(
          Object.entries(data?.myStrategyStyle?.info).filter(
            ([key]) => key === item,
          )[0][1] as StrategyFactorStyle[],
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
      strategyName: data?.myStrategyStyle?.info?.strategyName ?? '',
      benchmarkName: data?.myStrategyStyle?.info?.benchmarkName ?? '',
      myStrategyName: data?.myStrategyStyle?.info?.myStrategyName ?? '',
      baseDate: `기준일자: ${dayjs(
        data?.myStrategyStyle?.info?.baseDate?.end ?? 0,
      ).format('YYYY/MM/DD')}`,
    },
  };
}
