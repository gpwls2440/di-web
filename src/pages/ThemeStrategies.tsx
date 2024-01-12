// Dependency
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { themeVariablesAtom, keywordAtom } from '@jotai/strategies';

// Components
import Main from '@components/strategies/themeStrategies/Main';
import TopStrategies from '@components/strategies/TopStrategies';

export default function ThemeStrategies() {
  const [, setThemeVariables] = useAtom(themeVariablesAtom);
  const [, setKeyword] = useAtom(keywordAtom);

  useEffect(() => {
    setThemeVariables({
      orderMethod: 'CUMULATIVE',
      orderPeriodReturn: 'MONTH_3',
      isKbPick: true,
      themeGroup: [],
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
