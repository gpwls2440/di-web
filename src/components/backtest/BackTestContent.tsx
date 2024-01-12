/**
 * Readymades > BackTest
 */

// Dependency
import { useState, useMemo } from 'react';

// css
import './backtest.css';

// Components
import Box from '@components/atoms/Box';
import ButtonTab from '@components/molecules/ButtonTab';
import CumulativeReturn from '@components/backtest/CumulativeReturn';
import EarningsAnalysisTable from '@components/backtest/EarningsAnalysisTable';
import RebalancingHistory from '@components/backtest/RebalancingHistory';
import HoldingPositionAll from '@components/backtest/HoldingPositionAll';
import BlackWhiteList from '@components/backtest/BlackWhiteList';
import HoldingWeight from '@components/backtest/HoldingWeight';
import SectorIndustry from '@components/backtest/SectorIndustry';
import MyStrategyStyle from '@components/backtest/MyStrategyStyle';
import Investment from '@components/backtest/Investment';

// types
import { SelectItem } from '@interface/common';

const tab = [
  {
    text: '전략개요',
    value: 'STRATEGY_OVERVIEW',
  },
  {
    text: '수익률&리밸런싱',
    value: 'CUMULATIVERETURN',
  },
  {
    text: '구성항목',
    value: 'HOLDINGS',
  },
];

// const MESSAGE: DataItem = {
//   CUMULATIVERETURN: '나만의 전략을 편집한 결과 백테스트 수익률을 확인해보세요.',
//   HOLDINGS: '포트폴리오에 담긴 구성 항목을 확인해보세요.',
//   STRATEGY_OVERVIEW: '포트폴리오에 담긴 구성 항목을 확인해보세요.',
// };

export default function BackTestContent() {
  const [tabeValue, setTabValue] = useState<string>('STRATEGY_OVERVIEW');

  const handleChange = (_id: string, item: SelectItem) => {
    setTabValue(item?.value as string);
  };

  const currentPage = useMemo(() => {
    return tab.findIndex((item) => item.value === tabeValue) + 1;
  }, [tabeValue]);

  return (
    <div className='backtest'>
      <div className='backtest-head-area'>
        <ButtonTab
          data={tab}
          onChange={handleChange}
          id='tab'
          defalutValue={tab[0]}
        />
        <div className='paging'>
          {currentPage}/{tab.length} Page
        </div>
      </div>
      {
        {
          STRATEGY_OVERVIEW: (
            <ul>
              <li>
                <MyStrategyStyle />
                <Investment />
              </li>
              <li>
                <SectorIndustry />
              </li>
            </ul>
          ),
          CUMULATIVERETURN: (
            <ul>
              <li>
                <Box>
                  <CumulativeReturn />
                  <EarningsAnalysisTable />
                </Box>
              </li>
              <li>
                <RebalancingHistory />
              </li>
            </ul>
          ),
          HOLDINGS: (
            <ul>
              <li>
                <HoldingPositionAll />
              </li>
              <li>
                <BlackWhiteList />
                <HoldingWeight />
              </li>
            </ul>
          ),
        }[tabeValue]
      }
    </div>
  );
}
