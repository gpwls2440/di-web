// Dependency
import { FetchNextPageOptions } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { countriesdAtom } from '@jotai/common';
import {
  useInfiniteGetStrategiesQuery,
  StrategyStatusEnum,
  UniverseCountryEnum,
  StrategyCategoryEnum,
  StrategyOrderMethod,
  StrategyOrderPeriodReturn,
  PageInfo,
} from '@services/base';

// types
import {
  StrategiesOrderMethod,
  StrategiesOrderPeriodReturn,
} from '@interface/strategies';

interface useFetchDiyStrategies {
  first?: number;
  orderMethod?: StrategiesOrderMethod;
  orderPeriodReturn?: StrategiesOrderPeriodReturn;
  keyword?: string;
}

export interface DiyStrategies {
  cursor: string;
  name: string;
  id: string;
  description: string;
  month3: number;
}

/**
 * useFetchDiyStrategies
 * @description 전략 선택 > 나만의 전략 리스트
 * @returns {Object} returnValue
 */
export function useFetchDiyStrategies(props: useFetchDiyStrategies): {
  hasNextPage: boolean | undefined;
  data: DiyStrategies[][];
  fetchNextPage: (options?: FetchNextPageOptions) => void;
  isLoading: boolean;
  pageInfo: PageInfo;
} {
  const {
    first = 20,
    keyword = '',
    orderMethod = 'CUMULATIVE',
    orderPeriodReturn = 'MONTH_3',
  } = props;

  const countries = useAtomValue(countriesdAtom);

  const {
    data: diyStrategiesData,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteGetStrategiesQuery({
    countries: countries as UniverseCountryEnum,
    status: StrategyStatusEnum.Activated,
    category: StrategyCategoryEnum.Diy,
    orderMethod: orderMethod as StrategyOrderMethod,
    orderPeriodReturn: orderPeriodReturn as StrategyOrderPeriodReturn,
    first,
    keyword,
  });

  const data = diyStrategiesData?.pages.map((item) => {
    return item.strategies?.edges.map((item) => {
      return {
        cursor: item?.cursor,
        name: item?.node?.name,
        id: item?.node?.__typename === 'ThemeStrategyType' && item.node.id,
        description:
          item?.node?.__typename === 'ThemeStrategyType' &&
          item.node.description,
        month3:
          item?.node?.__typename === 'ThemeStrategyType' &&
          item.node.returnSummary?.month3,
      };
    });
  }) as DiyStrategies[][];

  const pagesLenth = diyStrategiesData?.pages.length ?? 0;

  const pageInfo = diyStrategiesData?.pages[pagesLenth - 1].strategies
    ?.pageInfo as PageInfo;

  return {
    data,
    pageInfo,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}
