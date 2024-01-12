// Dependency
import { useState } from 'react';
import { useParams } from 'react-router';
import { useFetchPieChartsData } from '@hooks/useFetchPieChartsData';

// Components
import Title from '@components/atoms/Title';
import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';

import PieChart from '@components/chart/PieChart/PieChart';
import LegendList from '@components/molecules/LegendList';

// types
import { WeightItem } from '@services/auth';

type ExposureType = 'sectors' | 'industries';

const sectorLegendList = [
  {
    color: '#FFDC00',
    value: '나의 전략',
  },
  {
    color: '#5B86D4',
    value: '프리셋(Pre-Set)',
  },
];

const sectorButtons = [
  {
    id: 'sectors',
    titile: '섹터',
  },
  {
    id: 'industries',
    titile: '업종',
  },
];

export default function SectorIndustry() {
  const { myStrategyId } = useParams();
  const [exposure, setExposure] = useState<ExposureType>('sectors');
  // const { data, baseDate, legendList, isLoading } = useFetchMyExposure(
  //   myStrategyId ?? '',
  // );

  const {
    data: pieData,
    isLoading: pieIsLoading,
    baseDate,
  } = useFetchPieChartsData(myStrategyId ?? '');

  return (
    <Box className='sector-industry'>
      <Title title='섹터/업종 구성' subTitle={baseDate} />
      <LegendList data={sectorLegendList} />
      <ul className='sector-industry-button-wrap'>
        {sectorButtons.map((item) => {
          return (
            <li key={item.id}>
              <Button
                className={item.id === exposure ? 'active' : ''}
                onClick={() => setExposure(item?.id as ExposureType)}>
                {item.titile}
              </Button>
            </li>
          );
        })}
      </ul>
      {pieData?.myStrategy && !pieIsLoading && (
        <>
          <PieChart
            title='나의 전략 센터'
            data={pieData?.myStrategy?.[exposure] as WeightItem[]}
          />
          <PieChart
            className='preset'
            title='프리셋 전략 섹터'
            data={pieData?.strategy?.[exposure] as WeightItem[]}
            color='blue'
          />
        </>
      )}
    </Box>
  );
}
