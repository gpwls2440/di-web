import Button from '@components/atoms/Button';
import Title from '@components/atoms/Title';
import { factorCheckedAtom } from '@jotai/factor';
import { useAtomValue } from 'jotai';

export default function FactorHistogram() {
  const factorChecked = useAtomValue(factorCheckedAtom);

  const factorCheckedCnt = Object.values(factorChecked).filter(
    (value) => !!value,
  ).length;

  return (
    <>
      <li>
        <div className='selected-wrap'>
          <Title title='선택 항목' />
          <div className='selected'>
            <strong>{factorCheckedCnt}</strong>
            <span className='selected-length'>개 선택됨</span>
            <Button>
              <img src='/svg/reset.svg' alt='초기화' />
              초기화
            </Button>
          </div>
        </div>
        <div className='empty-wrap'>
          <div className='empty'>
            <img src='/svg/warning.svg' alt='주의' />
            <div className='main'>선택된 팩터가 없습니다.</div>
            <div className='sub'>최소 한개 이상의 지표를 선택해주세요.</div>
          </div>
        </div>
      </li>
    </>
  );
}
