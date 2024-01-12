// Dependency
// import { useFetchStrategyStyle } from '@hooks/useFetchStrategyStyle';

// Components
// import RadarChart from '@components/chart/RadarChart/RadarChart';
import PercentText from '@components/atoms/PercentText';
import Button from '@components/atoms/Button';

// css
import './card.css';

interface Card {
  id: string;
  title: string;
  description: string;
  month3: number;
  onClick: (role: string, id: string) => void;
}

export default function Card(props: Card) {
  const { id, title, description, month3, onClick } = props;
  // const { radarChartsData, isLoading } = useFetchStrategyStyle(id);

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    onClick(e?.currentTarget?.dataset?.role ?? '', id);
  };

  return (
    <div className='card' data-id={id}>
      <div className='card-display'>
        {/* <div className='card-chart'>
          {!isLoading && radarChartsData && (
            <RadarChart data={radarChartsData} />
          )}
        </div> */}
      </div>
      <div className='card-content'>
        <h4>{title}</h4>
        <div className='card-earnings'>
          <PercentText value={month3} isSymbols />
          <p>3개월 수익률</p>
        </div>
        <h5>{description}</h5>
      </div>

      <div className='button-area'>
        <div className='gradation' />
        <div className='button-wrap'>
          <Button data-role='detail' onClick={handleClick}>
            전략 상세
          </Button>
          <Button data-role='select' onClick={handleClick} className='primiry'>
            전략 선택
          </Button>
        </div>
      </div>
    </div>
  );
}
