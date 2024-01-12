/**
 * RadarChart > Tick
 */

// Dependency
import { SVGProps } from 'react';
import { TickItem } from 'recharts/types/util/types';

// Components

interface RadarTick extends SVGProps<SVGTextElement> {
  index: number;
  payload: TickItem;
  fontSize?: number;
  fontWeight: number;
  textColor?: string;
}

export default function RadarTick(props: RadarTick) {
  const {
    index,
    x,
    textColor = '#000',
    fontSize = 12,
    fontWeight = 300,
    payload,
    ...rest
  } = props;
  const exceptionIndex = new Set([4, 5]).has(index);
  const values: string[] = exceptionIndex
    ? [payload.value]
    : payload.value.split(' ');
  const initDy = exceptionIndex ? 0.5 : 0;

  return (
    <text
      fill={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
      {...rest}>
      {values.map((value, vIndex) => {
        const _dy = initDy || vIndex * 1.5;
        return (
          // eslint-disable-next-line react/no-array-index-key
          <tspan key={`${vIndex}-${value}`} x={Number(x) - 1} dy={`${_dy}em`}>
            {value}
          </tspan>
        );
      })}
    </text>
  );
}
