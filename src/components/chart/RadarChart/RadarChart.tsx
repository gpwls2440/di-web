/**
 * RadarChart > Tick
 */

// Dependency
import { memo } from 'react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartRadarChart,
  ResponsiveContainer,
} from 'recharts';

// Types
import { ProfitChartModel } from '@interface/chart';

// Components
import RadarChartLegendRender from './RadarChartLegendList';
import RadarTick from './RadarTick';

interface RadarChartProps {
  data: ProfitChartModel;
  isShowLegendList?: boolean;
}

export default memo(function RadarChart(props: RadarChartProps) {
  const { data, isShowLegendList = false } = props;
  const { data: chartData, benchmarkName, strategyName, myStrategyName } = data;

  return (
    <>
      {data && (
        <ResponsiveContainer width='100%' height='100%'>
          <RechartRadarChart cy='50%' reverseStackOrder data={chartData}>
            <PolarGrid stroke='#eee' />
            <PolarAngleAxis dataKey='name' tick={RadarTick} />
            <PolarRadiusAxis axisLine={false} tick={false} domain={[0, 6]} />
            {isShowLegendList && (
              <Legend
                height={32}
                verticalAlign='top'
                content={RadarChartLegendRender}
              />
            )}
            <Radar
              name={benchmarkName}
              dataKey='benchmark'
              stroke='#A1A0B4'
              fill='#A1A0B4'
              strokeWidth={0}
              fillOpacity={0.5}
            />
            {strategyName && (
              <Radar
                name={strategyName}
                dataKey='strategy'
                stroke='#5B86D4'
                fill='#5B86D4'
                strokeWidth={0}
                fillOpacity={0.5}
              />
            )}
            {myStrategyName && (
              <Radar
                name={myStrategyName}
                dataKey='myStrategy'
                stroke='#FFDC00'
                fill='#FFDC00'
                strokeWidth={0}
                fillOpacity={0.5}
              />
            )}
          </RechartRadarChart>
        </ResponsiveContainer>
      )}
    </>
  );
});
