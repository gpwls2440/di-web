// Dependency
import { useParams } from 'react-router';

import ReadymadesContent from '@components/readymades/ReadymadesContent';

export default function Readymades() {
  const { step = 1, level, strategyCategory } = useParams();

  return (
    <>
      {strategyCategory && level && step && (
        <div className='container'>
          <div className='content reaymades'>
            <ReadymadesContent />
          </div>
        </div>
      )}
    </>
  );
}
