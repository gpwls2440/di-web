// Dependency
import { memo, useEffect } from 'react';

// types
import { HistogramChartItem } from '@interface/chart';

// css
import './histogram.css';

interface HistogramChart {
  data: HistogramChartItem[];
  activeColor?: string;
  inActiveColor?: string;
  onClick?: (index: number) => void;
}

export default memo(function HistogramChart(props: HistogramChart) {
  const {
    data = [],
    activeColor = '#FFDC00',
    inActiveColor = '#EEE',
    onClick = () => {},
  } = props;

  if (!data) {
    return <></>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    data.forEach((item) => {
      const rules = `
        @keyframes move${item.height} {
          from {
            height: 0%
          }
          to {
            height: ${item.height}%
          }
      `;
      const styleel = document.createElement('style');
      document.head.appendChild(styleel);
      const stylesheet = styleel.sheet;
      stylesheet?.insertRule(rules, 0);
    });
  }, [data]);

  return (
    <>
      <ul className='histogram'>
        {data.map((item, index) => (
          <li
            aria-hidden='true'
            onClick={() => onClick(index)}
            // eslint-disable-next-line react/no-array-index-key
            key={`histogram-${item.height}-${index}`}
            className={`bar ${item.volume === 0 ? 'no-volume' : ''}`}
            style={{
              height: `${item.height}%`,
              backgroundColor: item.inActive ? inActiveColor : activeColor,
              animation: `move${item.height} 0.5s ease`,
            }}
          />
        ))}
      </ul>
    </>
  );
});
