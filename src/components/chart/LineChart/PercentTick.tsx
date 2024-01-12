/**
 * LineChart > PercentTick
 */

import { SVGProps } from 'react';
import { numberToPercent } from '@kbam-frontend/madebyus';

interface PercentTickPayload {
  coordinate: number;
  isShow: boolean;
  offset: number;
  tickCoord: number;
  value: number;
}

interface PercentTick extends SVGProps<SVGTextElement> {
  payload?: PercentTickPayload;
  decimal: boolean;
}

export default function PercentTick(props: PercentTick) {
  const { x, y, payload, decimal } = props;

  if (!payload) {
    return null;
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={4}
        dx={-28}
        textAnchor='start'
        fontSize={10}
        fontWeight={300}
        fill='#000'>
        {numberToPercent(payload?.value, true, decimal ? 2 : 0)}
      </text>
    </g>
  );
}
