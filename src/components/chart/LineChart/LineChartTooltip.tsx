/**
 * LineChart > LineChartTooltip
 */

// Dependency
import { TooltipProps } from 'recharts';
import { v4 as uuidv4 } from 'uuid';
import { numberToPercent } from '@kbam-frontend/madebyus';

// types
import { LABEL_MAPPED_NAME } from '@interface/chart';

// css
import './linechart.css';

export default function LineChartTooltip(
  props: TooltipProps<string, string | number>,
) {
  const { payload } = props;
  if (!payload || payload.length === 0) return null;

  return (
    <div className='line-chart-tooltip'>
      <div className='title'>{payload[0].payload.name}</div>
      <ul>
        {payload.map((item) => (
          <li key={uuidv4()}>
            <div className='text'>
              {LABEL_MAPPED_NAME[item?.dataKey as string]}
            </div>
            <div className='text'>{numberToPercent(Number(item?.value))}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
