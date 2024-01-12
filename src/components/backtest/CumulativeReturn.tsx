// Dependency
import { useParams } from 'react-router';
import { useAtom } from 'jotai';
import { strategiesUniverseAtom } from '@jotai/backtest';
import { useFetchLineChartsData } from '@hooks/useFetchLineChartsData';

// Components
import Select from '@components/atoms/Select';
import Title from '@components/atoms/Title';

// Types
import { StrategiesUniverse } from '@interface/strategies';
import LineChart from '@components/chart/LineChart/LineChart';

export default function CumulativeReturn() {
  const { myStrategyId } = useParams();

  const [strategiesUniverse, setStrategiesUniverse] = useAtom(
    strategiesUniverseAtom,
  );

  const { data, isLoading } = useFetchLineChartsData({
    myStrategyId: myStrategyId as string,
    benchmark: strategiesUniverse as StrategiesUniverse,
  });

  const handleChange = (_id: string, value: string) => {
    setStrategiesUniverse(value as StrategiesUniverse);
  };

  return (
    <div className='cumulative-return'>
      <Select id='strategiesUniverse' onChange={handleChange}>
        <Select.Option defaultValue value='KOSPI'>
          KOSPI
        </Select.Option>
        <Select.Option value='KOSPI200'>KOSPI200</Select.Option>
        <Select.Option value='KOSDAQ'>KOSDAQ</Select.Option>
        <Select.Option value='KOSDAQ150'>KOSDAQ 150</Select.Option>
        <Select.Option value='KRX300'>KRX300</Select.Option>
      </Select>
      <Title title='누적 수익률' subTitle={isLoading ? '' : data.period} />
      <div className='line-chart-wrap'>
        {!isLoading && <LineChart data={data} />}
      </div>
    </div>
  );
}
