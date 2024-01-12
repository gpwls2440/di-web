/**
 * PieChart > StackBarChartLegendList
 */

// Dependency
import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { STACK_BAR_CHART_COLOR } from '@constants/chart';

// Components
import CircleIcon from '@components/atoms/CircleIcon';
import PercentText from '@components/atoms/PercentText';

// types
import { StackBarChartLegendItem } from '@interface/chart';

interface StackBarChartLegendList {
  index: number;
  data: StackBarChartLegendItem[];
}

export default memo(function StackBarChartLegendList(
  props: StackBarChartLegendList,
) {
  const { index, data } = props;
  const holdingsIndex = index !== -1 ? index + 1 : 0;

  return (
    <div className='stack-bar-chart-legend-list'>
      <ul>
        {data[holdingsIndex].holdings.map((legend, i) => (
          <li key={uuidv4()}>
            <div className='title-wrap'>
              <CircleIcon bgColor={STACK_BAR_CHART_COLOR[i]} />
              <div className='text'>{legend.name}</div>
            </div>
            <p className='text value'>
              <PercentText value={legend.weight} />
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
});
