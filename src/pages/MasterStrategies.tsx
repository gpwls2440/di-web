// Dependency

// Components
import Main from '@components/strategies/masterStrategies/Main';
import TopStrategies from '@components/strategies/TopStrategies';

export default function MasterStrategies() {
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
