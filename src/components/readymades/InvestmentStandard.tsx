/**
 * 투자 기준
 */

// Dependency
import { v4 as uuidv4 } from 'uuid';
import { INVESTMENT_OPTIONS, INVESTMENT_SELECTED } from '@constants/readymades';
import { useAtom } from 'jotai';
import dayjs from 'dayjs';
import { simulationOptionScreeningAtom } from '@jotai/strategies';
import { formatNumber } from '@utils/number';

// Components
import Box from '@components/atoms/Box';
import Title from '@components/atoms/Title';
import SelectButtonBox from '@components/molecules/SelectButtonBox';

// types
import { SelectButtonBoxItem } from '@interface/common';
import { RebalancingPeriod, Optimization } from '@interface/strategies';

export default function InvestmentStandard() {
  const [simulationOptionScreening, setSimulationOptionScreening] = useAtom(
    simulationOptionScreeningAtom,
  );

  const handleChange = (id: string, target: SelectButtonBoxItem) => {
    switch (id) {
      case 'booksize':
        setSimulationOptionScreening({
          ...simulationOptionScreening,
          [id]:
            target.type === 'INPUT'
              ? ((Number(target.value) * 10000) as number)
              : (target.value as number),
        });
        break;
      case 'optimization':
        setSimulationOptionScreening({
          ...simulationOptionScreening,
          [id]: target.value as Optimization,
        });
        break;
      case 'rebalancing':
        setSimulationOptionScreening({
          ...simulationOptionScreening,
          [id]: target.value as RebalancingPeriod,
        });
        break;
      case 'startDate':
        setSimulationOptionScreening({
          ...simulationOptionScreening,
          [id]: target.value as number,
        });
        break;
      default:
        break;
    }
  };

  const getValues = (key: string) => {
    const value = simulationOptionScreening[key];
    const optimizationIndex = INVESTMENT_OPTIONS.OPTIMIZATION_OPTIONS.findIndex(
      (item) => item.value === value,
    );
    const rebalancingIndex = INVESTMENT_OPTIONS.REBALANCING_OPTIONS.findIndex(
      (item) => item.value === value,
    );

    switch (key) {
      case 'booksize':
        return value !== 0 ? `${formatNumber(value as number)}원` : '0원';
      case 'optimization':
        return INVESTMENT_OPTIONS.OPTIMIZATION_OPTIONS[optimizationIndex]?.text;
      case 'rebalancing':
        return INVESTMENT_OPTIONS.REBALANCING_OPTIONS[rebalancingIndex]?.text;
      case 'startDate':
        return dayjs(value as number).format('YYYY/MM');
      default:
        return '';
    }
  };

  return (
    <>
      <div className='investment-standard'>
        <ul>
          <li>
            <Title title='전체 항목' titleWrapClass='mgt20' />
            <SelectButtonBox
              id='booksize'
              data={INVESTMENT_OPTIONS.BOOKSIZE_OPTIONS}
              defalutValue={simulationOptionScreening.booksize}
              title='투자금액'
              description='설정한 투자 금액이 적으면 온전히 반영되지 않습니다. 프리셋 전략(Pre-set)은 1억원 기준입니다. '
              warnings='투자 금액은 최소 100만원부터 최대 10억원까지 입력 가능합니다.'
              onChange={handleChange}
            />
            <SelectButtonBox
              id='optimization'
              data={INVESTMENT_OPTIONS.OPTIMIZATION_OPTIONS}
              title='최적화 옵션'
              defalutValue={simulationOptionScreening.optimization}
              viewCount={3}
              description='투자 전략에 따라 추출된 종목들의 비중을 설정하는 방법을 선택해주세요. '
              onChange={handleChange}
            />
            <SelectButtonBox
              id='rebalancing'
              data={INVESTMENT_OPTIONS.REBALANCING_OPTIONS}
              title='리밸런싱 주기'
              defalutValue={simulationOptionScreening.rebalancing}
              description='투자 전략에 맞추어 포트폴리오 내 종목 비중을 재조정할 주기를 설정해주세요. '
              onChange={handleChange}
            />

            <SelectButtonBox
              id='startDate'
              data={INVESTMENT_OPTIONS.STARTDATE_OPTIONS}
              title='백테스트 시작일'
              defalutValue={simulationOptionScreening.startDate}
              description='전략 성과 시뮬레이션 시작일을 선택해주세요.'
              onChange={handleChange}
            />
          </li>
          <li>
            <Title title='선택 항목' titleWrapClass='mgt20' />
            <Box className='investment-standard-selected'>
              <ol>
                {INVESTMENT_SELECTED.map((item, index) => {
                  return (
                    <li key={uuidv4()}>
                      <div className='investment-standard-selected-num'>
                        {index + 1}
                      </div>
                      <div className='investment-standard-selected-title'>
                        {item.text}
                      </div>
                      <div className='investment-standard-selected-value'>
                        {getValues(item.key)}
                      </div>
                    </li>
                  );
                })}
              </ol>
            </Box>
          </li>
        </ul>
      </div>
    </>
  );
}
