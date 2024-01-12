// Dependency
import { useFetchMasterStrategyDetail } from '@hooks/readymades/useFetchMasterStrategyDetail';
import { useParams } from 'react-router';

// Components
import UniversePresets from '@components/strategies/masterStrategies/UniversePresets';

// Types
// import { MasterStrategies } from '@hooks/readymades/useFetchMasterStrategies';

export default function Edit() {
  const { strategyId, step } = useParams();
  const { data } = useFetchMasterStrategyDetail(strategyId as string);

  return (
    <>
      <div className='pd20'>
        <h2>{data.name}</h2>
        <div>{data.shortDescription}</div>
      </div>
      {step && (
        <>
          {
            {
              1: <UniversePresets />,
              2: <p>팩터조정</p>,
              3: <p>투자기준</p>,
              4: <p>종목선택</p>,
            }[step]
          }
        </>
      )}
    </>
  );
}
