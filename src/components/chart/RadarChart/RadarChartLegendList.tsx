/**
 * RadarChart > RadarChartLegendList
 */

// Dependency
import { Props } from 'recharts/types/component/DefaultLegendContent';
import { v4 as uuidv4 } from 'uuid';

// Components
import CircleIcon from '@components/atoms/CircleIcon';

// css
import './radarchart.css';

export default function RadarChartLegendList(props: Props) {
  const { payload } = props;
  if (!payload || payload.length === 0) return null;

  return (
    <ul className='radar-chart-legend-list'>
      {payload.map((entry) => (
        <li key={uuidv4()}>
          <CircleIcon bgColor={entry.color ?? ''} />
          <p className='text value'>{entry?.value}</p>
        </li>
      ))}
    </ul>
  );
}
