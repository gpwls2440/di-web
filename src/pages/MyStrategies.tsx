// Dependency
import { useNavigate } from 'react-router-dom';

// Components
import Button from '@components/atoms/Button';
import List from '@components/myStrategies/List';

export default function MyStrategies() {
  const navigate = useNavigate();

  return (
    <div className='pd20'>
      <h1>MyStrategies</h1>
      <Button
        style={{
          padding: 10,
          width: 'initial',
          height: 'initial',
        }}
        onClick={() => navigate('/strategies/theme/')}>
        전략 만들기
      </Button>
      <List />
    </div>
  );
}
