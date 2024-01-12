/**
 * StackBarChart > RebalanceTick
 */

// Dependency
import { SVGProps } from 'react';
import { CartesianTickItem } from 'recharts/types/util/types';

interface RebalanceTick extends SVGProps<SVGTextElement> {
  payload?: CartesianTickItem;
  visibleTicksCount?: number;
  index?: number;
}

export default function RebalanceTick(props: RebalanceTick) {
  const { x, y, payload, visibleTicksCount, index } = props;

  let customX = 0;

  // if (visibleTicksCount && visibleTicksCount > 5) {
  //   if (index === 0 || index === visibleTicksCount - 1) {
  //     customX = index === 0 ? 12 : -16;
  //   } else {
  //     return null;
  //   }
  // }

  if (visibleTicksCount && visibleTicksCount > 5) {
    if (
      index === 0 ||
      index === Math.ceil(visibleTicksCount / 2 - 1) ||
      index === visibleTicksCount - 1
    ) {
      customX = index === visibleTicksCount - 1 ? -16 : 1;
    } else {
      return null;
    }
  }

  return (
    <>
      <g transform={`translate(${x},${y})`}>
        <text
          x={customX}
          y={1}
          dy={16}
          textAnchor='middle'
          fontSize={12}
          fontWeight={300}
          fill='#222'>
          {`${payload?.value}`.slice(2)}
        </text>
      </g>
    </>
  );
}
