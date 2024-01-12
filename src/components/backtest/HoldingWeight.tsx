// Dependency
import { useParams } from 'react-router';
import { useFetchMyHoldingPositionAll } from '@hooks/useFetchMyHoldingPositionAll';

// Components
import Title from '@components/atoms/Title';
import Box from '@components/atoms/Box';
import TreeMapChart from '@components/chart/TreeMapChart';

// Types
// import { StackBarChartLegendItem } from '@interface/chart';

export default function HoldingWeight() {
  const { myStrategyId } = useParams();
  const { baseDate, isLoading, weightData, weightInfo } =
    useFetchMyHoldingPositionAll(myStrategyId ?? '');

  return (
    <Box>
      <Title title='종목 비중' subTitle={baseDate} />
      <div className='weight-info'>
        <div className='weight-info-percent'>
          <span>종목비중 {weightInfo.total}</span>
          <span>현금비중 {weightInfo.cash}</span>
        </div>
        <div className='total'>총 100.00%</div>
      </div>
      <div className='holding-weight'>
        {!isLoading && <TreeMapChart data={weightData} height={406} />}
      </div>
    </Box>
  );
}
