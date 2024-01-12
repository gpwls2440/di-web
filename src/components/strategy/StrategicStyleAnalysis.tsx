// Dependency
import { useParams } from 'react-router';
import { useFetchMyStrategyStyle } from '@hooks/useFetchMyStrategyStyle';

// Components
import RadarChart from '@components/chart/RadarChart/RadarChart';

export default function StrategicStyleAnalysis() {
  const { myStrategyId } = useParams();
  const { radarChartsData, isLoading } = useFetchMyStrategyStyle(
    myStrategyId as string,
  );

  return (
    <div className='pd20'>
      <h3
        style={{
          marginTop: 20,
        }}>
        전략스타일 분석
      </h3>
      {!isLoading && (
        <div className='felxbox'>
          <p>기준일자: {radarChartsData.baseDate}</p>
          <div
            style={{
              height: '300px',
            }}>
            <RadarChart data={radarChartsData} />
          </div>
        </div>
      )}
    </div>
  );
}
