/**
 * Readymades > 나만의 전략 > 섹터/업종
 */

// Dependency
import { useFetchSector } from '@hooks/useFetchSector';

// Components
import SectorsList from '@components/sectors/SectorsList';

export default function ReadymadesSector() {
  const { data, isLoading } = useFetchSector();

  return <>{!isLoading && <SectorsList data={data} />}</>;
}
