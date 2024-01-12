// Dependency

// Components
import Main from '@components/strategies/diyStrategies/Main';
import TopStrategies from '@components/strategies/TopStrategies';

export default function DiyStrategies() {
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
