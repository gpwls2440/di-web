// Dependency
import { useFetchLineChartsData } from '@hooks/useFetchLineChartsData';
import { useFetchMyStrategyStyle } from '@hooks/useFetchMyStrategyStyle';

// Components
import LineChart from '../components/chart/LineChart/LineChart';
import RadarChart from '../components/chart/RadarChart/RadarChart';

export default function Example() {
  const id = 'TXlTdHJhdGVneVR5cGU6MzkzMA==';

  const {
    data: lineData,
    isLoading: lineIsLoading,
    isError,
  } = useFetchLineChartsData({
    myStrategyId: id,
  });

  const { radarChartsData, isLoading: raderIsLoading } =
    useFetchMyStrategyStyle(id);

  return (
    <div
      className='pd20'
      style={{
        height: '400px',
      }}>
      {!lineIsLoading && !isError && (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 'initial',
              height: '484px',
              gap: '20px',
              padding: '20px',
            }}>
            <LineChart data={lineData} />
          </div>
        </>
      )}
      <div
        style={{
          minHeight: '420px',
        }}>
        {!raderIsLoading && radarChartsData && (
          <>
            <div className='felxbox'>
              <div
                style={{
                  height: '300px',
                }}>
                <RadarChart data={radarChartsData} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
