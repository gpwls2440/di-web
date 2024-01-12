/**
 * TreeMapChart > TreeMapChartTooltip
 */

// Dependency
import { TooltipProps } from 'recharts';
import { v4 as uuidv4 } from 'uuid';
import { numberToPercent } from '@kbam-frontend/madebyus';

// css
import './tree-map-chart.css';

export default function TreeMapChartTooltip(
  props: TooltipProps<string, string | number>,
) {
  const { payload } = props;
  if (!payload || payload.length === 0) return null;

  return (
    <div className='tree-map-chart-tooltip'>
      {payload.map((item) => (
        <ul key={uuidv4()}>
          <li className='text'>{item?.payload.name}</li>
          <li className='text'>
            {numberToPercent(Number(item?.value) ?? 0, true)}
          </li>
        </ul>
      ))}
    </div>
  );
}
