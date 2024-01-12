// Dependency
import { useParams } from 'react-router';
import { useState } from 'react';
import { useFetchRebalancingHistory } from '@hooks/useFetchRebalancingHistory';

// Components
import Title from '@components/atoms/Title';
import Box from '@components/atoms/Box';
import StackBarChart from '@components/chart/StackBarChart/StackBarChart';
import StackBarChartLegendList from '@components/chart/StackBarChart/StackBarChartLegendList';

// Types
// import { StackBarChartLegendItem } from '@interface/chart';

export default function RebalancingHistory() {
  const { myStrategyId } = useParams();
  const { baseDate, stackBarChartList, legendList, isLoading } =
    useFetchRebalancingHistory(myStrategyId ?? '');
  const [index, setIndex] = useState<number>(-1);

  const handleChange = (index: number) => {
    setIndex(index);
  };

  return (
    <>
      <Box>
        <div className='cumulative-return'>
          <div className='bar-chart-wrap'>
            {!isLoading && stackBarChartList && (
              <StackBarChart
                onChange={handleChange}
                headContents={
                  <Title
                    title='리밸런싱 내역'
                    subTitle={`${baseDate} (설정된 리밸런싱 주기는 3개월마다 한 번 입니다.)`}
                  />
                }
                height={284}
                data={stackBarChartList}
              />
            )}
          </div>
        </div>
      </Box>
      <Box className='rebalancing-history-top'>
        <Title title='리밸런싱 비중 Top5' />
        {!isLoading && (
          <StackBarChartLegendList data={legendList} index={index} />
        )}
      </Box>
    </>
  );
}
