/**
 * LineChart > LineChartLegendRender
 */

// Dependency
import { Props } from 'recharts/types/component/DefaultLegendContent';
import { v4 as uuidv4 } from 'uuid';

// Components
import CircleIcon from '@components/atoms/CircleIcon';

export default function LineChartLegend(props: Props) {
  const { payload } = props;

  if (!payload || payload.length === 0) return null;

  return (
    <ul className='line-chart-legend-list'>
      {payload.map((entry) => {
        return (
          <li key={uuidv4()}>
            <CircleIcon bgColor={`${entry.color}`} />
            <div className='text'>{entry.value}</div>
          </li>
        );
      })}
    </ul>
  );
}
