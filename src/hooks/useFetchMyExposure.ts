// Dependency
import {
  SimulationTypeEnum,
  useGetMyExposureQuery,
  ExposureItem,
  MyExposureType,
} from '@services/auth';
import { numberToPercent } from '@kbam-frontend/madebyus';
import dayjs from 'dayjs';
import { HORIZONTAL_STACK_BAR_CHART_COLOR } from '@constants/chart';

// types
import { LegendListItem } from '@interface/common';

interface useFetchMyExposureDataItem {
  id: string;
  industries: number[];
  name: string;
  sectors: number[];
}

interface useFetchMyExposureLegendListItem {
  id: string;
  industries: LegendListItem[];
  sectors: LegendListItem[];
}

/**
 * useFetchMyExposure
 * @description 섹터/업종 Top5 변경해주는 Hooks
 * @param {string} myStrategyId myStrategyId
 * @returns {Object} returnValue
 */
export function useFetchMyExposure(myStrategyId: string): {
  data: useFetchMyExposureDataItem[];
  legendList: useFetchMyExposureLegendListItem[];
  baseDate: string;
  isLoading: boolean;
} {
  const { data, isLoading, isSuccess } = useGetMyExposureQuery(
    {
      id: myStrategyId,
      simulationType: SimulationTypeEnum.All,
    },
    {
      enabled: !!myStrategyId,
    },
  );

  const response = data?.myExposure?.myExposure as MyExposureType;

  const keys = ['myStrategy', 'strategy'];

  const result =
    response &&
    (keys.map((key) => {
      return {
        name: key === 'myStrategy' ? '나의 전략' : '프리셋 전략',
        sectors: (
          response?.[key as keyof MyExposureType] as ExposureItem
        )?.sectors?.map((item) => {
          return Number(numberToPercent(item?.weight ?? 0, false));
        }),
        industries: (
          response?.[key as keyof MyExposureType] as ExposureItem
        )?.industries?.map((item) => {
          return Number(numberToPercent(item?.weight ?? 0, false));
        }),
        id: key,
      };
    }) as useFetchMyExposureDataItem[]);

  const legendList =
    response &&
    (keys.map((key) => {
      return {
        sectors: (
          response?.[key as keyof MyExposureType] as ExposureItem
        )?.sectors?.map((item, index) => {
          return {
            value: item?.name,
            color: HORIZONTAL_STACK_BAR_CHART_COLOR[index],
          };
        }),
        industries: (
          response?.[key as keyof MyExposureType] as ExposureItem
        )?.industries?.map((item, index) => {
          return {
            value: item?.name,
            color: HORIZONTAL_STACK_BAR_CHART_COLOR[index],
          };
        }),
        id: key,
      };
    }) as useFetchMyExposureLegendListItem[]);

  return {
    data: result,
    legendList,
    baseDate:
      !isLoading && isSuccess
        ? dayjs(response?.baseDate?.end).format('YYYY/MM/DD')
        : '',
    isLoading,
  };
}
