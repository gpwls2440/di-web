// Dependency
import { FetchNextPageOptions } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { countriesdAtom } from '@jotai/common';

// Components

import {
  useInfiniteGetStrategiesQuery,
  StrategyStatusEnum,
  UniverseCountryEnum,
  StrategyCategoryEnum,
  StrategyOrderMethod,
  PageInfo,
} from '@services/base';

interface UseFetchMasterStrategies {
  keyword?: string;
  first?: number;
}

export interface MasterStrategies {
  cursor: string;
  name: string;
  id: string;
  img: string;
  shortDescription: string;
}

/**
 * useFetchMasterStrategies
 * @description 전략 선택 > 대가들의 전략
 * @returns {Object} returnValue
 */
export function useFetchMasterStrategies(props: UseFetchMasterStrategies): {
  hasNextPage: boolean | undefined;
  data: MasterStrategies[][];
  fetchNextPage: (options?: FetchNextPageOptions) => void;
  isLoading: boolean;
  pageInfo: PageInfo;
} {
  const { keyword = '', first = 20 } = props;
  const countries = useAtomValue(countriesdAtom);

  const {
    data: masterStrategiesData,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteGetStrategiesQuery({
    countries: countries as UniverseCountryEnum,
    status: StrategyStatusEnum.Activated,
    category: StrategyCategoryEnum.Master,
    orderMethod: StrategyOrderMethod.Cumulative,
    keyword,
    first,
  });

  const data = masterStrategiesData?.pages.map((item) => {
    return item.strategies?.edges.map((item) => {
      return {
        cursor: item?.cursor,
        name: item?.node?.name,
        id: item?.node?.__typename === 'MasterStrategyType' && item.node.id,
        shortDescription:
          item?.node?.__typename === 'MasterStrategyType' &&
          item.node.shortDescription,
        img: item?.node?.__typename === 'MasterStrategyType' && item.node.img,
      };
    });
  }) as MasterStrategies[][];

  const pagesLenth = masterStrategiesData?.pages.length ?? 0;

  const pageInfo = masterStrategiesData?.pages[pagesLenth - 1].strategies
    ?.pageInfo as PageInfo;

  return {
    data,
    pageInfo,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}
