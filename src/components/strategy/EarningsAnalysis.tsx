// Dependency
import { useState, ChangeEvent } from 'react';
import { useParams } from 'react-router';
import { useFetchLineChartsData } from '@hooks/useFetchLineChartsData';

// Components
import DateText from '@components/atoms/DateText';
import LineChart from '@components/chart/LineChart/LineChart';

// Types
import { StrategiesUniverse } from '@interface/strategies';
import { UniverseEnum } from '@services/auth';

export default function EarningsAnalysis() {
  const [benchmark, setBenchmark] = useState<StrategiesUniverse>('KOSPI');
  const { myStrategyId } = useParams();
  const { data, isLoading } = useFetchLineChartsData({
    myStrategyId: myStrategyId as string,
    benchmark: benchmark as UniverseEnum,
  });

  const handleChangeBenchmark = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setBenchmark(e.target.value as StrategiesUniverse);
    }
  };

  return (
    <div className='pd20'>
      <h3
        style={{
          marginTop: 20,
        }}>
        수익 분석
      </h3>
      {!isLoading && (
        <div className='felxbox'>
          <p>
            기준일자:{' '}
            <DateText
              startDate={data.baseDate.start as number}
              endDate={data.baseDate.end as number}
            />
          </p>
          <select
            value={benchmark}
            onChange={handleChangeBenchmark}
            style={{
              marginRight: 10,
            }}>
            <option value='KOSPI'>KOSPI</option>
            <option value='KOSPI200'>KOSPI 200</option>
            <option value='KOSDAQ'>KOSDAQ</option>
            <option value='KOSDAQ150'>KOSDAQ 150</option>
            <option value='KRX300'>KRX300</option>
          </select>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 'initial',
              height: '484px',
              gap: '20px',
              padding: '20px',
            }}>
            <LineChart data={data} />
          </div>
        </div>
      )}
    </div>
  );
}
