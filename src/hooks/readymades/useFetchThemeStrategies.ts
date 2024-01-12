// Dependency
import { FetchNextPageOptions } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { countriesdAtom } from '@jotai/common';
import { keywordAtom, themeVariablesAtom } from '@jotai/strategies';

// Components

import {
  useInfiniteGetStrategiesQuery,
  StrategyStatusEnum,
  UniverseCountryEnum,
  StrategyCategoryEnum,
  StrategyOrderMethod,
  StrategyOrderPeriodReturn,
  PageInfo,
} from '@services/base';

interface UseFetchThemeStrategies {
  first?: number;
}

export interface ThemeStrategies {
  cursor: string;
  name: string;
  id: string;
  description: string;
  month3: number;
}

/**
 * useFetchThemeStrategies
 * @description 전략 선택 > 테마 전략 리스트
 * @returns {Object} returnValue
 */
export function useFetchThemeStrategies(props: UseFetchThemeStrategies): {
  hasNextPage: boolean | undefined;
  data: ThemeStrategies[][];
  fetchNextPage: (options?: FetchNextPageOptions) => void;
  isLoading: boolean;
  pageInfo: PageInfo;
} {
  const { first = 20 } = props;

  const countries = useAtomValue(countriesdAtom);
  const { isKbPick, themeGroup, orderMethod, orderPeriodReturn } =
    useAtomValue(themeVariablesAtom);

  const keyword = useAtomValue(keywordAtom);

  const {
    data: themeStrategiesData,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteGetStrategiesQuery({
    countries: countries as UniverseCountryEnum,
    status: StrategyStatusEnum.Activated,
    category: StrategyCategoryEnum.Theme,
    orderMethod: orderMethod as StrategyOrderMethod,
    orderPeriodReturn: orderPeriodReturn as StrategyOrderPeriodReturn,
    first,
    isKbPick,
    themeGroup,
    keyword,
  });

  const data = themeStrategiesData?.pages.map((item) => {
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
  }) as ThemeStrategies[][];

  const pagesLenth = themeStrategiesData?.pages.length ?? 0;

  const pageInfo = themeStrategiesData?.pages[pagesLenth - 1].strategies
    ?.pageInfo as PageInfo;

  return {
    data,
    pageInfo,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}
