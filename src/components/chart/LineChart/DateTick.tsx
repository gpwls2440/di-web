/**
 * LineChart > DateTick
 */

import { SVGProps } from 'react';

// Components
// Types

interface DateTickPayload {
  coordinate: number;
  index: number;
  isShow: boolean;
  offset: number;
  tickCoord: number;
  value: string;
}

interface DateTick extends SVGProps<SVGTextElement> {
  payload?: DateTickPayload;
}
// Components
// Types

export default function DateTick(props: DateTick) {
  const { x, y, payload } = props;
  if (!payload) {
    return null;
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor='middle'
        fontSize={12}
        fontWeight={300}
        fill='#000'>
        {`${payload.value}`.slice(2, 7)}
      </text>
    </g>
  );
}
