// Dependency
import { useParams } from 'react-router';
import { useFetchMyHoldingPositionAll } from '@hooks/useFetchMyHoldingPositionAll';

// Components
import Title from '@components/atoms/Title';
import Box from '@components/atoms/Box';

// Types
// import { StackBarChartLegendItem } from '@interface/chart';

export default function HoldingPositionAll() {
  const { myStrategyId } = useParams();
  const { baseDate, isLoading, positionData } = useFetchMyHoldingPositionAll(
    myStrategyId ?? '',
  );

  return (
    <>
      <Box>
        <Title title='종목 리스트 ' subTitle={baseDate} />
        {!isLoading && (
          <div className='holding-position-all'>
            <table className='holding-position-all-head'>
              <colgroup>
                <col width={30} />
              </colgroup>
              <thead>
                <tr>
                  <th>순</th>
                  <th>종목명</th>
                  <th>섹터</th>
                  <th>업종</th>
                  <th>종목비중</th>
                </tr>
              </thead>
              <tbody>
                {positionData.map((item) => {
                  return (
                    <tr key={item.ccid}>
                      <td> {item.index}</td>
                      <td> {item.name}</td>
                      <td> {item.sector}</td>
                      <td>{item.industry}</td>
                      <td>{item.percent}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Box>
    </>
  );
}
