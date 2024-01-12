// Dependency
import { useParams } from 'react-router';
import { useAtom } from 'jotai';
import { strategiesUniverseAtom } from '@jotai/backtest';
import { useFetchEarningsAnalysisTable } from '@hooks/useFetchEarningsAnalysisTable';

// Components
import Title from '@components/atoms/Title';
import DataTable from '@components/atoms/DataTable';

// Types
import { StrategiesUniverse } from '@interface/strategies';

export default function EarningsAnalysisTable() {
  const { myStrategyId } = useParams();

  const [strategiesUniverse] = useAtom(strategiesUniverseAtom);

  const { data, isLoading } = useFetchEarningsAnalysisTable({
    myStrategyId: myStrategyId as string,
    benchmark: strategiesUniverse as StrategiesUniverse,
  });

  return (
    <>
      <Title title='수익률 분석' titleWrapClass='yield-analysis' />
      <DataTable
        isLoading={!isLoading}
        className='mgt10'
        col={['19%', '27%', '27%', '27%']}
        head={[
          {
            title: '구분',
          },
          {
            color: '#FFDC00',
            title: '나의 전략',
          },
          {
            color: '#5B86D4',
            title: '프리셋(Pre-set)',
          },
          {
            color: '#959CAB',
            title: data.name,
          },
        ]}
        data={[
          data.cumulative,
          data.annualAvgReturn,
          data.volatility,
          data.annualAvgVolatility,
          data.sharpe,
          data.mdd,
        ]}
      />
    </>
  );
}
