// Dependency
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { sectorVariablesAtom, keywordAtom } from '@jotai/strategies';

// Components
import Main from '@components/strategies/sectorStrategies/Main';
import TopStrategies from '@components/strategies/TopStrategies';

export default function SectorStrategies() {
  const [, setSectorVariables] = useAtom(sectorVariablesAtom);
  const [, setKeyword] = useAtom(keywordAtom);

  useEffect(() => {
    setSectorVariables({
      orderMethod: 'CUMULATIVE',
      orderPeriodReturn: 'MONTH_3',
      universePreset: 'KOSPI200_KOSDAQ150_KRX300',
    });
    setKeyword('');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='container'>
      <div className='content'>
        <div className='strategies-wrap'>
          <Main />
        </div>
        <TopStrategies />
      </div>
    </div>
  );
}
