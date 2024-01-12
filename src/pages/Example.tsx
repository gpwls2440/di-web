// Dependency
import { useState } from 'react';
import { renameKeys } from '@kbam-frontend/madebyus';

import { WeightItem } from '@services/auth';
import { useFetchMyStrategyStyle } from '@hooks/useFetchMyStrategyStyle';
import { useFetchLineChartsData } from '@hooks/useFetchLineChartsData';
import { useFetchPieChartsData } from '@hooks/useFetchPieChartsData';

// Components
import Button from '@components/atoms/Button';
import PieChart from '../components/chart/PieChart/PieChart';
import RadarChart from '../components/chart/RadarChart/RadarChart';
import LineChart from '../components/chart/LineChart/LineChart';
import Switch from '../components/atoms/Switch';

import test from './test.json';

type RadarChartsKeyType = 'myStrategy' | 'benchmark' | 'strategy';

interface ChartsData {
  name: string;
  myStrategy?: number;
  benchmark?: number;
  strategy?: number;
}

type ExposureType = 'sectors' | 'industries';

export default function Example() {
  const id = 'TXlTdHJhdGVneVR5cGU6MzkzMA==';
  const [exposure, setExposure] = useState<ExposureType>('sectors');
  const { data: pieData, isLoading: pieIsLoading } = useFetchPieChartsData(id);
  const { radarChartsData, isLoading: raderIsLoading } =
    useFetchMyStrategyStyle(id);
  const { data: lineData, isLoading: lineIsLoading } = useFetchLineChartsData({
    myStrategyId: id,
  });

  const buttonList = [
    {
      name: '섹터',
      value: 'sectors',
    },
    {
      name: '업종',
      value: 'industries',
    },
  ];

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const data = e?.currentTarget?.dataset;
    const test2 = data?.role as ExposureType;

    setExposure(test2);
  };
  const keys: RadarChartsKeyType[] = ['strategy', 'benchmark'];

  const allDatas = keys
    .map((item) => {
      if (item && test.data?.strategyStyle?.info) {
        return Object.values(
          Object.entries(test.data?.strategyStyle?.info).filter(
            ([key]) => key === item,
          )[0][1],
        ).map((datas) => {
          return renameKeys(datas, { value: item }) as ChartsData;
        });
      }
      return {};
    })
    .flat(1) as ChartsData[];

  const radarChartsDatas = Array.from(
    allDatas
      .reduce((acc, obj) => {
        const { name } = obj;
        return acc.set(name, { ...(acc.get(name) || {}), ...obj });
      }, new Map())
      .values(),
  ) as ChartsData[];

  const radarChartsData2 = {
    data: radarChartsDatas,
    strategyName: test.data?.strategyStyle?.info?.strategyName ?? '',
    benchmarkName: test.data?.strategyStyle?.info?.benchmarkName ?? '',
    baseDate: test.data?.strategyStyle?.info?.baseDate?.end ?? 0,
  };

  return (
    <div className='pd20'>
      <Switch>테스트</Switch>

      <div
        style={{
          minHeight: '190px',
        }}>
        {!raderIsLoading && radarChartsData && (
          <div
            className='felxbox'
            style={{
              width: 330,
            }}>
            <div
              style={{
                height: '190px',
              }}>
              <RadarChart data={radarChartsData} />
            </div>
          </div>
        )}
      </div>
      <div
        style={{
          minHeight: '290px',
        }}>
        <div
          className='felxbox'
          style={{
            width: 360,
          }}>
          <div
            style={{
              height: '290px',
            }}>
            <RadarChart data={radarChartsData2} />
          </div>
        </div>
      </div>
      <div>
        {buttonList.map((item) => (
          <Button
            className={`button ${item?.value === exposure && 'active'}`}
            key={item.value}
            data-role={item.value}
            onClick={handleClick}>
            {item.name}
          </Button>
        ))}
      </div>
      {pieData?.myStrategy && !pieIsLoading && (
        <div className='pd20'>
          <div className='pie-chart-title'>나의 전략</div>
          <PieChart data={pieData?.myStrategy?.[exposure] as WeightItem[]} />
          <div className='pie-chart-title'>프리셋(Pre-set)</div>
          <PieChart
            data={pieData?.strategy?.[exposure] as WeightItem[]}
            color='blue'
          />
        </div>
      )}

      {!lineIsLoading && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 'initial',
            height: '484px',
            gap: '20px',
            padding: '20px',
          }}>
          <LineChart data={lineData} />
        </div>
      )}
    </div>
  );
}
