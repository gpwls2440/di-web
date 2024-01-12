/**
 * PieChart > RadarChartLegendList
 */

// Dependency
import { v4 as uuidv4 } from 'uuid';
import { WeightItem } from '@services/auth';

// Components
import CircleIcon from '@components/atoms/CircleIcon';
import PercentText from '@components/atoms/PercentText';

interface PieChartLegendListProps {
  data: WeightItem[];
  colorList: string[];
}

export default function PieChartLegendList(props: PieChartLegendListProps) {
  const { data = [], colorList } = props;

  return (
    <ul className='pie-chart-legend-list'>
      {data.map((legend, i) => (
        <li key={uuidv4()}>
          <div className='title-wrap'>
            <CircleIcon bgColor={colorList[i]} />
            <div className='text'>{legend.name}</div>
          </div>
          <p className='text value'>
            <PercentText value={legend.weight} />
          </p>
        </li>
      ))}
    </ul>
  );
}
