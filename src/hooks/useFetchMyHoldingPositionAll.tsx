// Dependency
import {
  SimulationTypeEnum,
  useGetMyHoldingPositionAllQuery,
} from '@services/auth';
import dayjs from 'dayjs';
import { SECTOR_MAP, INDUSTRY_MAP } from '@constants/common';
import { numberToPercent } from '@kbam-frontend/madebyus';

interface WeightInfo {
  total: string;
  cash: string;
}
interface HoldingPositionAllDataItem {
  index: number;
  ccid: string;
  name: string;
  sector: string;
  industry: string;
  percent: string;
}

interface HoldingWeightItem {
  name: string;
  size: number;
}

/**
 * useFetchMyHoldingPositionAll
 * @description 종목구성 리스트 보여주는 Hooks
 * @param {string} myStrategyId myStrategyId
 * @returns {Object} returnValue
 */
export function useFetchMyHoldingPositionAll(myStrategyId: string): {
  weightInfo: WeightInfo;
  positionData: HoldingPositionAllDataItem[];
  weightData: HoldingWeightItem[];
  baseDate: string;
  isLoading: boolean;
} {
  const { data, isLoading, isSuccess } = useGetMyHoldingPositionAllQuery(
    {
      id: myStrategyId,
      simulationType: SimulationTypeEnum.All,
    },
    {
      enabled: !!myStrategyId,
    },
  );
  const holdingPositionAllData =
    data?.myHoldingPositionAll?.myHoldingPositionAll;
  const positionData =
    (holdingPositionAllData?.position?.map((item, index) => {
      return {
        index: index + 1,
        ccid: item?.ccid,
        name: item?.name,
        sector: SECTOR_MAP[item?.sector ?? ''],
        industry: INDUSTRY_MAP[item?.industry ?? ''],
        percent: numberToPercent(item?.weight ?? 0, true),
      };
    }) as HoldingPositionAllDataItem[]) ?? [];

  const weightData =
    (holdingPositionAllData?.position
      ?.map((item) => {
        return {
          size: item?.weight ?? 0,
          name: item?.name,
        };
      })
      .concat({
        size: holdingPositionAllData?.cash?.weight ?? 0,
        name: '현금',
      }) as HoldingWeightItem[]) ?? [];

  const total =
    holdingPositionAllData?.position
      ?.map((item) => {
        return item?.weight ?? 0;
      })
      .reduce((sum, value) => {
        return sum + value;
      }) ?? 0;

  return {
    weightInfo: {
      total: numberToPercent(total),
      cash: numberToPercent(holdingPositionAllData?.cash?.weight ?? 0),
    },
    positionData,
    weightData,
    baseDate: isSuccess
      ? `${dayjs(holdingPositionAllData?.baseDate?.end).format('YYYY/MM/DD')}`
      : '',
    isLoading,
  };
}
