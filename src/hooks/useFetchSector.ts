// Dependency

import { useGetSectorsQuery } from '@services/base';
import { SectorsChecks } from '@interface/sectors';

/**
 * useFetchSector
 * @description Sector 데이터로 변경해주는 Hooks
 * @returns {Object} returnValue
 */
export function useFetchSector(): {
  data: SectorsChecks[];
  isLoading: boolean;
} {
  const { data: sectorsData, isLoading } = useGetSectorsQuery();

  const data =
    (sectorsData?.sectors?.sectors?.map((item) => {
      const industriesData = item?.industries;

      const industriesIsChecked = industriesData?.map((item) => {
        return item?.isChecked;
      });
      const industriesCheckedLength = industriesIsChecked?.filter(
        (checked) => checked === true,
      ).length;

      return {
        name: item?.name,
        id: item?.sector,
        description: `${item?.sector} 재무적으로 우량한 종목들에 투자해보세요.`,
        sectors: {
          [`${item?.sector}`]:
            industriesCheckedLength === item?.industries?.length,
        },
        selected: industriesCheckedLength,
        childrenLength: industriesData?.length,
        children: industriesData?.map((item) => {
          return {
            id: item?.industry,
            name: item?.name,
            isChecked: item?.isChecked ?? false,
          };
        }),
        childrenChecks: industriesData?.reduce((acc, item) => {
          return {
            ...acc,
            [`${item?.industry}`]: item?.isChecked ?? false,
          };
        }, {}),
      };
    }) as SectorsChecks[]) ?? [];

  return {
    data,
    isLoading,
  };
}
