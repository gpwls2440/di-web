// Dependency
import {
  useGetStyleFactorsQuery,
  UniverseCountryEnum,
  StyleFactorItem,
} from '@services/base';
import { useAtomValue } from 'jotai';
import { countriesdAtom } from '@jotai/common';
/**
 * useFetchStyleFactors
 * @description styleFactors Hook
 * @returns {Object} returnValue
 */
export function useFetchStyleFactors(): {
  data: StyleFactorItem[];
  high: number;
  middle: number;
  low: number;
  isLoading: boolean;
} {
  const countries = useAtomValue(countriesdAtom);
  const countriesKey = countries as keyof typeof UniverseCountryEnum;
  const { data, isLoading } = useGetStyleFactorsQuery({
    country: UniverseCountryEnum[countriesKey],
  });

  const simplePrest = data?.styleFactors?.styleFactors?.simplePrest;

  return {
    data: data?.styleFactors?.styleFactors?.styleFactors as StyleFactorItem[],
    isLoading,
    high: simplePrest?.high?.min ?? 0,
    middle: simplePrest?.middle?.min ?? 0,
    low: simplePrest?.low?.min ?? 0,
  };
}
