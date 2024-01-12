// Dependency
import { useParams } from 'react-router';

import BackTestContent from '@components/backtest/BackTestContent';

export default function Readymades() {
  const { step = 1, level, strategyCategory, myStrategyId } = useParams();

  return (
    <>
      {strategyCategory && level && step && myStrategyId && (
        <div className='container readymades'>
          <div className='content'>
            <BackTestContent />
          </div>
        </div>
      )}
    </>
  );
}
