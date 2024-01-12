// Dependency
import {
  useGetMyStrategiesQuery,
  UniverseCountryEnum,
  MyStrategyOrderType,
  StrategyStatusEnum,
  MyStrategyType,
} from '@services/auth';
import { useAtomValue } from 'jotai';
import { countriesdAtom } from '@jotai/common';

// Components

/**
 * useFetchMyStrategies
 * @description 전략보관함 리스트 데이터변경해주는 Hooks
 * @returns {Object} returnValue
 */
export function useFetchMyStrategies(): {
  data: MyStrategyType[];
} {
  const countries = useAtomValue(countriesdAtom);
  const countriesKey = countries as keyof typeof UniverseCountryEnum;
  const { data: myStrategieData } = useGetMyStrategiesQuery({
    countries: UniverseCountryEnum[countriesKey],
    orderType: MyStrategyOrderType.ForwardStartDate,
    status: StrategyStatusEnum.Activated,
  });

  const data = myStrategieData?.myStrategies?.edges.map((item) => {
    return item?.node;
  }) as MyStrategyType[];

  return {
    data,
  };
}
