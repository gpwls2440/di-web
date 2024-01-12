// Dependency
// import { useParams } from 'react-router';

// Components
import Box from '@components/atoms/Box';

// Types
// import { StackBarChartLegendItem } from '@interface/chart';

export default function BlackWhiteList() {
  // const { myStrategyId } = useParams();

  return (
    <Box padding='12px 16px 0px 16px'>
      <ul className='black-white-list-wrap'>
        <li>
          <div className='title-wrap'>
            <h5 className='title'>제외 종목</h5>
            <span className='selected'>
              <strong>5</strong>개 선택
            </span>
          </div>
          <div className='list-wrap'>
            <ul className='black-list'>
              <li>카카오</li>
              <li>한국 철강</li>
              <li>두산에너빌리티</li>
              <li>한화</li>
              <li>가비아</li>
              <li>메가스터디교육</li>
              <li>메가스터디교육</li>
              <li>메가스터디교육</li>
              <li>메가스터디교육</li>
              <li>메가스터디교육</li>
              <li>메가스터디교육</li>
              <li>메가스터디교육</li>
              <li>메가스터디교육</li>
            </ul>
          </div>
        </li>
        <li>
          <div className='title-wrap'>
            <h5 className='title'>추가 종목</h5>
            <span className='selected'>
              <strong>5</strong>개 선택
            </span>
          </div>
          <div className='list-wrap'>
            <ul className='white-list'>
              <li>카카오</li>
              <li>한국 철강</li>
              <li>두산에너빌리티</li>
              <li>한화</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
              <li>에코프로에이치엔</li>
            </ul>
          </div>
        </li>
      </ul>
    </Box>
  );
}
