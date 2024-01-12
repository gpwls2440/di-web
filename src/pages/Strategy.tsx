// Components
import CumulativeReturn from '@components/strategy/CumulativeReturn';
import StrategicStyleAnalysis from '@components/strategy/StrategicStyleAnalysis';
import EarningsAnalysis from '@components/strategy/EarningsAnalysis';

export default function Strategy() {
  return (
    <>
      <CumulativeReturn />
      <StrategicStyleAnalysis />
      <EarningsAnalysis />
    </>
  );
}
