/**
 * StackBarChart> Tooltip
 */

// Dependency
import { TooltipProps } from 'recharts';

export type TooltipPositionType = 'first' | 'last' | undefined;

export default function StackBarChartTooltip(
  props: TooltipProps<string, string | number>,
  index: number,
  lastIndex: number,
) {
  const isFirst = index === 0;
  const isLast = index === lastIndex;

  return (
    <div
      className={`stack-bar-chart-tooltip ${isFirst && 'first'} ${
        isLast && 'last'
      }`}>
      <div className='contents'>{props?.label}</div>
    </div>
  );
}
