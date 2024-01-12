// Dependency
import { useParams } from 'react-router';
import { useFetchMyStrategyStyle } from '@hooks/useFetchMyStrategyStyle';

// Components
import Box from '@components/atoms/Box';
import Title from '@components/atoms/Title';
import RadarChart from '@components/chart/RadarChart/RadarChart';

export default function MyStrategyStyle() {
  const { myStrategyId } = useParams();
  const { radarChartsData, isLoading } = useFetchMyStrategyStyle(
    myStrategyId as string,
  );

  return (
    <Box className='my-strategy-style'>
      <Title title='전략 스일 분석' subTitle={radarChartsData.baseDate} />

      <div className='chart'>
        {!isLoading && <RadarChart data={radarChartsData} isShowLegendList />}
      </div>
    </Box>
  );
}
