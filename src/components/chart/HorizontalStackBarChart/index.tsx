// Dependency
import { memo, useEffect } from 'react';
import { useMeasure } from '@kbam-frontend/hooks';
import { HORIZONTAL_STACK_BAR_CHART_COLOR } from '@constants/chart';

// types
// import { HistogramChartItem } from '@interface/chart';

// css
import './horizontal-stack-bar-chart.css';

interface HorizontalStackBarChart {
  id: string;
  title?: string;
  data: number[];
}

export default memo(function HorizontalStackBarChart(
  props: HorizontalStackBarChart,
) {
  const { id, title, data = [] } = props;
  const { ref, values } = useMeasure();

  const chartData = data.map((item, i) => {
    return {
      width: item,
      totalWidth:
        data.reduce((acc, cur, index) => {
          return index > i ? acc : acc + cur;
        }, 0) *
          (values.width / 100) || 0,
    };
  });

  if (!data) {
    return <></>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    data.forEach((item, index) => {
      const rules = `
      @keyframes move${id}${index} {
        from {
          width: 0%
        }
        to {
          width: ${item}%
        }
    `;
      const styleel = document.createElement('style');
      document.head.appendChild(styleel);
      const stylesheet = styleel.sheet;
      stylesheet?.insertRule(rules, 0);
    });
  }, [data, id]);

  return (
    <div className='horizontal-stack-bar-chart'>
      {title && <h5>{title}</h5>}
      <ul ref={ref}>
        {chartData.map((item, index) => {
          return (
            <li
              aria-hidden='true'
              // eslint-disable-next-line react/no-array-index-key
              key={`horizontal-stack-bar-${item}-${index}`}
              style={{
                left: index !== 0 ? chartData[index - 1].totalWidth : 0,
                height: 28,
                backgroundColor: HORIZONTAL_STACK_BAR_CHART_COLOR[index],
                animation: `move${id}${index} 0.5s 1s forwards`,
              }}
            />
          );
        })}
      </ul>
      <div className='gridline'>
        <span>0</span>
        <span>20</span>
        <span>40</span>
        <span>60</span>
        <span>80</span>
        <span>100</span>
      </div>
    </div>
  );
});
