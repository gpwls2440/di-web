// Dependency
import {
  GetFactorsQuery,
  useGetFactorsQuery,
  UniversePresetEnum,
  FactorItem,
  HistogramItem,
} from '@services/base';
import { approximate } from '@utils/chart';

// types
import { ProFactorsData } from '@interface/chart';

/**
 * useFetchProFactors
 * @description 프로투자 팩터 데이터로 변경해주는 Hooks
 * @param {string} strategyId strategyId
 * @returns {Object} returnValue
 */
export function useFetchProFactors(
  strategyId: string,
  universePreset?: UniversePresetEnum,
): {
  data: GetFactorsQuery | undefined;
  isLoading: boolean;
  proFactorsData: ProFactorsData[];
} {
  const { data, isLoading } = useGetFactorsQuery(
    {
      strategyId,
      universePreset,
    },
    {
      staleTime: 50,
    },
  );

  const proFactorsData = data?.factors?.factors?.map((item) => {
    return {
      style: item?.style,
      factors: item?.factors?.map((factor) => {
        const { cmName, displayName, description, comments, img } =
          factor as FactorItem;
        const histogramData = factor?.histogramData;
        const {
          stickCounts = [],
          range,
          high,
          factorRange,
        } = histogramData as HistogramItem;

        const commonDifference =
          ((range?.max || 0) - (range?.min || 0)) / (100 - 1);

        const makeHistograms = Array.from(
          { length: 100 },
          (_v, i) =>
            i !== 0 &&
            i !== 99 &&
            (range?.min as number) + commonDifference * i,
        ).filter((item) => typeof item === 'number');

        const maxCount =
          stickCounts && stickCounts.length > 0
            ? Math.max(...(stickCounts as number[]))
            : 0;

        const winsorizedHistograms = [
          range?.min,
          ...makeHistograms,
          range?.max,
        ] as number[];

        const histogramChartData = stickCounts?.map((item) => {
          const heightValue = Math.floor(((item as number) * 100) / maxCount);

          return {
            height: heightValue < 4 ? 4 : heightValue,
            volume: item,
          };
        });

        const minCloesValue = approximate(
          winsorizedHistograms,
          high?.min || 0,
        ).index;
        const maxCloseValue = approximate(
          winsorizedHistograms,
          high?.max || 0,
        ).index;

        return {
          cmName,
          displayName,
          description,
          img,
          comments,
          minLimit: range?.min || 0,
          maxLimit: range?.max || 0,
          min: high?.min || 0,
          max: high?.max || 0,
          winsorizedHistograms,
          histogramChartData,
          rawHistograms: [
            factorRange?.min,
            ...makeHistograms,
            factorRange?.max,
          ],
          initRange: [minCloesValue, maxCloseValue],
        };
      }),
    };
  }) as ProFactorsData[] | [];

  return {
    data,
    isLoading,
    proFactorsData,
  };
}
