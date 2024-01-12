import { memo } from 'react';
import { numberToPercent } from '@kbam-frontend/madebyus';

// Types
import { Any } from '@interface/common';

export default memo(function TreeMapContents(props: Any) {
  const {
    root,
    depth,
    x,
    y,
    width,
    height,
    index,
    colors,
    name,
    size,
    lastIndex,
  } = props;

  return (
    <>
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: colors[Math.floor((index / root.children.length) * 5)],
            stroke: '#fff',
            strokeWidth: 2 / (depth + 1e-10),
            strokeOpacity: 1 / (depth + 1e-10),
          }}
        />
        {depth === 1 ? (
          <text
            x={x + width / 2}
            y={y + height / 2 + 7}
            textAnchor='middle'
            fontSize={name.length > 5 ? 10 : 10}
            fontWeight={100}>
            <tspan x={x + width / 2} y={y + height / 2}>
              {width < 110 && name.length > 4 ? `${name.slice(0, 4)}...` : name}
            </tspan>
            <tspan x={x + width / 2} y={y + height / 2 + 12}>
              {numberToPercent(size, true)}
            </tspan>
          </text>
        ) : null}
      </g>
      {index === lastIndex && (
        <g>
          <rect
            x={x}
            y={y}
            width={width}
            height={height}
            style={{
              fill: '#f8f8f8',
              stroke: '#fff',
              strokeWidth: 2 / (depth + 1e-10),
              strokeOpacity: 1 / (depth + 1e-10),
            }}
          />
          {depth === 1 ? (
            <text
              x={x + width / 2}
              y={y + height / 2 + 7}
              textAnchor='middle'
              fontSize={name.length > 5 ? 10 : 10}
              fontWeight={100}>
              <tspan x={x + width / 2} y={y + height / 2}>
                {width < 110 && name.length > 4
                  ? `${name.slice(0, 4)}...`
                  : name}
              </tspan>
              <tspan x={x + width / 2} y={y + height / 2 + 12}>
                {numberToPercent(size, true)}
              </tspan>
            </text>
          ) : null}
        </g>
      )}
    </>
  );
});
