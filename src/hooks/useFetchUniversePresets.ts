// Dependency
import { useAtomValue } from 'jotai';
import { countriesdAtom } from '@jotai/common';

// Components

import {
  useGetUniversePresetsQuery,
  UniverseCountryEnum,
  UniversePresetItem,
} from '@services/base';

interface UniversePresetsList {
  listed?: UniversePresetItem[];
  representative?: UniversePresetItem[];
  usa?: UniversePresetItem[];
}

/**
 * useFetchUniversePresets
 * @description 전략 선택 > 유니버스 선택
 * @returns {Object} returnValue
 */
export function useFetchUniversePresets(): {
  data: UniversePresetsList;
  countries: UniverseCountryEnum;
  isLoading: boolean;
} {
  const countries = useAtomValue(countriesdAtom);

  const { data: universePresetsData, isLoading } = useGetUniversePresetsQuery({
    countries: countries as UniverseCountryEnum,
  });

  const representative = ['KOSPI200', 'KOSDAQ150', 'KRX300'];
  const listed = ['KOSPI', 'KOSDAQ'];

  const representativeList =
    universePresetsData?.universePresets?.universePresets?.filter((item) => {
      return item?.universes.some((universes) => {
        return universes && representative.indexOf(universes) !== -1;
      });
    });

  const listedList =
    universePresetsData?.universePresets?.universePresets?.filter((item) => {
      return item?.universes.some((universes) => {
        return universes && listed.indexOf(universes) !== -1;
      });
    });

  const data = {
    representative: representativeList,
    listed: listedList,
    usa: universePresetsData?.universePresets?.universePresets,
  } as UniversePresetsList;

  return {
    countries: countries as UniverseCountryEnum,
    data,
    isLoading,
  };
}
