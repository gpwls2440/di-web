/**
 * Layout > header
 */

// Dependency
import { useParams } from 'react-router';
import { READYMADE_STEP } from '@constants/readymades';
// import { useFetchStrategy } from '@hooks/useFetchStrategy';

// Components
import Tab from '@components/strategies/Tab';
import Badge from '@components/atoms/Badge';
import Status from '@components/molecules/Status';
import Step from '@components/atoms/Step';
import Button from '@components/atoms/Button';

export default function Header() {
  const { strategyCategory = 'diy', level, step } = useParams();
  // const { pathname } = useLocation();
  // const type = pathname.split('/')[3];

  const stepData =
    level && step
      ? READYMADE_STEP[strategyCategory][level ?? ''].data.map((item) => {
          return {
            name: item.name,
          };
        })
      : [];

  const data = [
    {
      title: '나의 전략',
      status: 0.75,
    },
    {
      title: '나의 전략',
    },
    {
      title: 'KOSPI',
      status: -0.01,
    },
  ];

  return (
    <header>
      <div className='header'>
        {level && step ? (
          <div className='header-content'>
            <Badge
              className='large'
              label='백테스트 결과'
              backgroundColor='#5177bc1a'
              frontColor='#5177BC'
            />
            <div className='header-title-wrap'>
              <h2>반도체 제조장비 테마전략</h2>
              <h4>
                반도체 웨이퍼 위에 회로도를 새겨 넣고 형성하여 제품을 맞게
                자르는 일련의 제조 과에서 요구되는 장비를 말합니다.
              </h4>
            </div>
            <div className='header-status-wrap'>
              <Status data={data} />
              <div className='header-button-wrap'>
                <Button className='basic'>이전단계</Button>
                <Button className='basic primary'>백테스트 시작</Button>
              </div>
            </div>
            <Step data={stepData} activeIndex={Number(step) - 1} />
          </div>
        ) : (
          <div className='header-content'>
            <h2 className='title'>
              <img
                className='flag'
                src='/svg/korean.svg'
                alt='한국 전략 선택'
              />
              한국 전략 선택
            </h2>
            <h3 className='sub-title'>
              테마 전략은 상장되어 있는 테마와 SNS 핫한 키워드를 벤치마크할 수
              있는 전략입니다.
            </h3>
            <Tab />
          </div>
        )}
      </div>
    </header>
  );
}
