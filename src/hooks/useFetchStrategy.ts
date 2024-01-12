// Dependency

import {
  useGetStrategyQuery,
  ThemeStrategyType,
  MasterStrategyType,
  SectorIndustryStrategyType,
} from '@services/base';

interface UseFetchStrategy {
  strategyId: string;
}

/**
 * useFetchStrategy
 * @description 전략상세 내용 Hook
 * @returns {Object} returnValue
 */
export function useFetchStrategy(props: UseFetchStrategy): {
  data: ThemeStrategyType | MasterStrategyType | SectorIndustryStrategyType;
  isLoading: boolean;
} {
  const { strategyId } = props;
  const { data, isLoading } = useGetStrategyQuery(
    {
      id: strategyId,
    },
    {
      enabled: !!strategyId,
    },
  );

  const getData = () => {
    if (data?.strategy?.strategy?.__typename === 'MasterStrategyType') {
      return data.strategy.strategy as MasterStrategyType;
    }
    if (data?.strategy?.strategy?.__typename === 'SectorIndustryStrategyType') {
      return data.strategy.strategy as SectorIndustryStrategyType;
    }
    return data?.strategy?.strategy as ThemeStrategyType;
  };

  return {
    data: getData(),
    isLoading,
  };
}
