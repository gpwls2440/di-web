// Dependency
import { v4 as uuidv4 } from 'uuid';

// Components
import Tabs from '@components/molecules/Tabs';
import PercentText from '@components/atoms/PercentText';

const tabData = [
  {
    name: '3개월 수익률',
    id: 'TOP',
    path: '',
  },
];

const data = [
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: -0.35,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: -0.35,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: -0.35,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: -0.35,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: -0.35,
  },
  {
    title: '반도체 제조 장비 테마 전략',
    subTitle: '테마전략 / KB’s Pick',
    percent: 0.22,
  },
];

export default function TopStrategies() {
  return (
    <>
      <div className='top-strategies'>
        <h4>전체 전략 수익률 Top20</h4>
        <Tabs data={tabData} activeId='TOP' />
        <ul className='top-strategies-list'>
          {data.map((item, index) => {
            return (
              <li key={uuidv4()}>
                <div className='top-strategies-list-num'>{index + 1}</div>
                <div className='top-strategies-list-detail'>
                  <div className='top-strategies-list-title'>{item.title}</div>
                  <div className='top-strategies-list-sub-title'>
                    {item.subTitle}
                  </div>
                </div>
                <PercentText value={item.percent} isSymbols />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
