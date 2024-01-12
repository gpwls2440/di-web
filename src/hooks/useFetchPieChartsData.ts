// Dependency
import {
  SimulationTypeEnum,
  useGetMyExposureQuery,
  MyExposureType,
} from '@services/auth';
import dayjs from 'dayjs';

/**
 * useFetchPieChartsData
 * @description PieChartsData로 변경해주는 Hooks
 * @param {string} myStrategyId myStrategyId
 * @returns {Object} returnValue
 */
export function useFetchPieChartsData(myStrategyId: string): {
  data: MyExposureType | undefined;
  baseDate: string;
  isLoading: boolean;
} {
  const { data, isLoading } = useGetMyExposureQuery(
    {
      id: myStrategyId,
      simulationType: SimulationTypeEnum.All,
    },
    {
      enabled: !!myStrategyId,
    },
  );

  const response = data?.myExposure?.myExposure as MyExposureType;

  return {
    data: response,
    baseDate: dayjs(response?.baseDate?.end).format('YYYY/MM/DD'),
    isLoading,
  };
}
