// Dependency
import { useGetStrategyQuery } from '@services/base';

export interface MasterStrategyDetail {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  img: string;
  masterFactors: string[];
  masterSrc: string[];
}

/**
 * useFetchMasterStrategyDetail
 * @description 전략 선택 > 대가들의 전략 상세
 * @param {string} id strategy id
 * @returns {Object} returnValue
 */
export function useFetchMasterStrategyDetail(id: string): {
  data: MasterStrategyDetail;
  isLoading: boolean;
} {
  // const countries = useAtomValue(countriesdAtom);

  const { data: masterStrategyData, isLoading } = useGetStrategyQuery({
    id,
  });

  const strategy = masterStrategyData?.strategy?.strategy;

  const data = {
    id: strategy?.id,
    name: strategy?.name,
    description: strategy?.description,
    shortDescription: strategy?.shortDescription,
    img: strategy?.__typename === 'MasterStrategyType' && strategy.img,
    masterFactors:
      strategy?.__typename === 'MasterStrategyType' && strategy.masterFactors,
    masterSrc:
      strategy?.__typename === 'MasterStrategyType' && strategy.masterSrc,
  } as MasterStrategyDetail;

  return {
    data,
    isLoading,
  };
}
