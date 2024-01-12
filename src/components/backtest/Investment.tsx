/**
 * Readymades > BackTest
 */

// Dependency
import { v4 as uuidv4 } from 'uuid';

// css
import './backtest.css';

// Components
import Box from '@components/atoms/Box';
import Title from '@components/atoms/Title';

const BACKTEST_INVESTMENT = [
  {
    title: '전략 선택',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
  {
    title: '백테스트 시작일',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
  {
    title: '전략 생성일',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
  {
    title: '시가 총액',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
  {
    title: '투자 금액',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
  {
    title: '거래대금',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
  {
    title: '최적화 옵션',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
  {
    title: '섹터/업종',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
  {
    title: '리밸런싱 주기',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
  {
    title: '편집 팩터',
    description: '시가총액은 작을수록 점수가 높습니다.',
  },
];

export default function Investment() {
  return (
    <Box className='investment'>
      <Title title='투자 기준' subTitle='2020/10/30' />

      <ul>
        {BACKTEST_INVESTMENT.map((item) => {
          return (
            <li key={uuidv4()}>
              <dl>
                <dt>{item.title}</dt>
                <dd>나만의 전략</dd>
              </dl>
            </li>
          );
        })}
      </ul>
    </Box>
  );
}
