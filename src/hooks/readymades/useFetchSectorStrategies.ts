// Dependency
import { FetchNextPageOptions } from '@tanstack/react-query';
import { useAtomValue } from 'jotai';
import { countriesdAtom } from '@jotai/common';
import { sectorVariablesAtom, keywordAtom } from '@jotai/strategies';
import {
  useInfiniteGetStrategiesQuery,
  StrategyStatusEnum,
  UniverseCountryEnum,
  UniversePresetEnum,
  StrategyCategoryEnum,
  StrategyOrderMethod,
  StrategyOrderPeriodReturn,
  PageInfo,
} from '@services/base';

interface useFetchSectorStrategies {
  first?: number;
}

export interface SectorStrategies {
  cursor: string;
  name: string;
  id: string;
  img: string;
  description: string;
  month3: number;
}

/**
 * useFetchSectorStrategies
 * @description 전략 선택 > 업존 전략
 * @returns {Object} returnValue
 */
export function useFetchSectorStrategies(props: useFetchSectorStrategies): {
  hasNextPage: boolean | undefined;
  data: SectorStrategies[][];
  fetchNextPage: (options?: FetchNextPageOptions) => void;
  isLoading: boolean;
  pageInfo: PageInfo;
} {
  const { first = 20 } = props;

  const countries = useAtomValue(countriesdAtom);
  const { orderMethod, orderPeriodReturn, universePreset } =
    useAtomValue(sectorVariablesAtom);

  const keyword = useAtomValue(keywordAtom);

  const {
    data: sectorStrategiesData,
    isLoading,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteGetStrategiesQuery({
    countries: countries as UniverseCountryEnum,
    status: StrategyStatusEnum.Activated,
    category: StrategyCategoryEnum.SectorIndustry,
    orderMethod: orderMethod as StrategyOrderMethod,
    orderPeriodReturn: orderPeriodReturn as StrategyOrderPeriodReturn,
    universePreset: universePreset as UniversePresetEnum,
    first,
    keyword,
  });

  const data = sectorStrategiesData?.pages.map((item) => {
    return item.strategies?.edges.map((item) => {
      return {
        cursor: item?.cursor,
        name: item?.node?.name,
        id:
          item?.node?.__typename === 'SectorIndustryStrategyType' &&
          item.node.id,

        img:
          item?.node?.__typename === 'SectorIndustryStrategyType' &&
          item.node.img,

        description:
          item?.node?.__typename === 'SectorIndustryStrategyType' &&
          item.node.description,
        month3:
          item?.node?.__typename === 'SectorIndustryStrategyType' &&
          item.node.returnSummary?.month3,
      };
    });
  }) as SectorStrategies[][];

  const pagesLenth = sectorStrategiesData?.pages.length ?? 0;

  const pageInfo = sectorStrategiesData?.pages[pagesLenth - 1].strategies
    ?.pageInfo as PageInfo;

  return {
    data,
    pageInfo,
    isLoading,
    hasNextPage,
    fetchNextPage,
  };
}
