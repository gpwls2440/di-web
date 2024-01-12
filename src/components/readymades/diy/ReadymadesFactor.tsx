import FactorHistogram from '@components/factors/FactorHistogram';
import FactorList from '@components/factors/FactorList';
import { useFetchProFactors } from '@hooks/useFetchProFactors';

export default function ReadymadesFactor() {
  const { data, isLoading } = useFetchProFactors(
    'VGhlbWVTdHJhdGVneVR5cGU6MTEw',
  );
  return (
    <>
      {!isLoading && (
        <div className='sectors'>
          <ul>
            <FactorList data={data} />
            <FactorHistogram />
          </ul>
        </div>
      )}
    </>
  );
}
