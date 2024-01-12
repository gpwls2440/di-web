// Dependency
import { useFetchMyStrategies } from '@hooks/useFetchMyStrategies';

// Components
import DateText from '@components/atoms/DateText';
import PercentText from '@components/atoms/PercentText';

export default function MyStrategiesList() {
  const { data } = useFetchMyStrategies();

  return (
    <div className='pd20'>
      <h1>MyStrategiesList</h1>
      <div>
        <ul>
          {data?.map((item) => {
            return (
              <li
                key={item?.id}
                style={{
                  border: '1px solid #333',
                  borderRadius: 5,
                  padding: 10,
                  marginBottom: 10,
                }}>
                <div>
                  전략생성일 <DateText startDate={item?.createdAt} />
                </div>
                <div>{item?.baseStrategyName}</div>
                <div>
                  모의투자 성과
                  <DateText
                    startDate={
                      item?.returnSummary?.forward?.baseDate?.start ?? 0
                    }
                    endDate={item?.returnSummary?.forward?.baseDate?.end ?? 0}
                  />
                </div>
                <div
                  style={{
                    padding: 10,
                  }}>
                  <PercentText
                    value={
                      item?.returnSummary?.forward?.returnSummary?.cumulative ??
                      0
                    }
                  />
                  <p>나의 누적 수익률</p>
                </div>
                <div
                  style={{
                    padding: 10,
                  }}>
                  {item?.returnSummary?.baseStrategyCumulative && (
                    <>
                      <PercentText
                        value={item?.returnSummary?.baseStrategyCumulative ?? 0}
                      />
                      <p>프리셋 수익률</p>
                    </>
                  )}
                  {!item?.returnSummary?.baseStrategyCumulative && (
                    <>
                      <PercentText
                        value={item?.returnSummary?.benchmarkCumulative ?? 0}
                      />
                      <p>벤치마크 수익률</p>
                    </>
                  )}
                </div>
                <div>
                  백테스트 결과
                  <DateText
                    startDate={
                      item?.returnSummary?.backtest?.baseDate?.start ?? 0
                    }
                    endDate={item?.returnSummary?.backtest?.baseDate?.end ?? 0}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
