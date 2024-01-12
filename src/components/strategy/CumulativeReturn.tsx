// Dependency
import { useParams } from 'react-router';
import {
  useGetDetailedMyStrategyQuery,
  SimulationTypeEnum,
} from '@services/auth';
import {
  RATE_INFO_DESCRIPTIONS,
  PRICE_INFO_DESCRIPTIONS,
} from '@constants/text';
import { v4 as uuidv4 } from 'uuid';

// Components
import PercentText from '@components/atoms/PercentText';
import DateText from '@components/atoms/DateText';

export default function CumulativeReturn() {
  const { myStrategyId } = useParams();
  const { data, isLoading } = useGetDetailedMyStrategyQuery(
    {
      id: myStrategyId as string,
      simulationType: 'ALL' as SimulationTypeEnum,
    },
    {
      enabled: !!myStrategyId,
    },
  );

  return (
    <div className='pd20'>
      {!isLoading && (
        <>
          <h2
            style={{
              fontSize: '20px',
            }}>
            {data?.detailedMyStrategy?.detailedMyStrategy?.name}
          </h2>
          <h3
            style={{
              marginTop: 20,
            }}>
            누적 수익률
          </h3>
          {data?.detailedMyStrategy?.detailedMyStrategy?.baseDate?.start &&
            data?.detailedMyStrategy?.detailedMyStrategy?.baseDate?.end && (
              <p
                style={{
                  marginTop: 20,
                }}>
                기준일자:
                <DateText
                  startDate={
                    data?.detailedMyStrategy?.detailedMyStrategy?.baseDate
                      ?.start
                  }
                  endDate={
                    data?.detailedMyStrategy?.detailedMyStrategy?.baseDate?.end
                  }
                />
              </p>
            )}
          <div
            className='pd20'
            style={{
              marginTop: 20,
              backgroundColor: '#f8f8f8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <dl
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <dt>나의 전략</dt>
              <dd>
                <PercentText
                  value={
                    data?.detailedMyStrategy?.detailedMyStrategy?.myStrategy
                      ?.cumulative as number
                  }
                />
              </dd>
            </dl>
            <dl
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <dt>프리셋 전략</dt>
              <dd>
                <PercentText
                  value={
                    data?.detailedMyStrategy?.detailedMyStrategy?.strategy
                      ?.cumulative as number
                  }
                />
              </dd>
            </dl>
          </div>
          <ul
            style={{
              color: '#eee',
              fontSize: '11px',
            }}>
            {RATE_INFO_DESCRIPTIONS.map((item) => {
              return <li key={uuidv4()}>{item}</li>;
            })}
          </ul>
          <ul
            style={{
              marginTop: 10,
              fontSize: '11px',
            }}>
            {PRICE_INFO_DESCRIPTIONS.map((item) => {
              return (
                <li key={uuidv4()} style={{ color: '#f13333' }}>
                  {item}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
