/**
 * LineChart > DateTick
 */

// Dependency
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Types
import { LineChartsData } from '@interface/chart';

// Components
import DateTick from './DateTick';
import PercentTick from './PercentTick';
import LineChartTooltip from './LineChartTooltip';
import LineChartLegendList from './LineChartLegendList';

// css
import './linechart.css';

interface LineChartProps {
  data: LineChartsData;
  isShowLegendList?: boolean;
  strategyColor?: string;
  benchmarkColor?: string;
  myStrategyColor?: string;
}

const lineColorObjDefault = {
  strategy: '#5B86D4',
  benchmark: '#959CAB',
  myStrategy: '#FFDC00',
};

export default function LineChart(props: LineChartProps) {
  const {
    data,
    isShowLegendList = true,
    strategyColor = lineColorObjDefault.strategy,
    benchmarkColor = lineColorObjDefault.benchmark,
    myStrategyColor = lineColorObjDefault.myStrategy,
  } = props;
  const { data: chartData, myStrategyName, strategyName, benchmarkName } = data;

  const isDecimal = chartData.findIndex((item) => {
    let checkOverFivePercent = Math.abs(+(item?.benchmark || 0)) > 0.05;

    if (item.strategy) {
      if (Math.abs(+item.strategy) > 0.05) {
        checkOverFivePercent = true;
      }
    }
    if (item.myStrategy) {
      if (Math.abs(+item.myStrategy) > 0.05) {
        checkOverFivePercent = true;
      }
    }
    return checkOverFivePercent;
  });

  return (
    <ResponsiveContainer>
      <RechartLineChart data={chartData} margin={{ left: -24 }}>
        <XAxis
          dataKey='name'
          tickLine={false}
          axisLine={false}
          padding='no-gap'
          tick={<DateTick />}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tick={<PercentTick decimal={isDecimal < 0} />}
        />
        <CartesianGrid vertical={false} />
        {isShowLegendList && (
          <Legend
            height={48}
            verticalAlign='top'
            content={LineChartLegendList}
          />
        )}
        <Tooltip
          cursor={{
            stroke: '#000',
            strokeDasharray: '3 3',
          }}
          content={LineChartTooltip}
        />
        {myStrategyName && (
          <Line
            name={myStrategyName}
            type='monotone'
            dataKey='myStrategy'
            stroke={myStrategyColor}
            dot={false}
            strokeWidth={1.5}
            activeDot={{
              stroke: myStrategyColor,
              strokeWidth: 2,
              r: 4,
            }}
          />
        )}
        {strategyName && (
          <Line
            name={strategyName}
            type='monotone'
            dataKey='strategy'
            stroke={strategyColor}
            dot={false}
            strokeWidth={1.5}
            activeDot={{ stroke: strategyColor, strokeWidth: 2, r: 4 }}
          />
        )}
        <Line
          name={benchmarkName}
          type='monotone'
          dataKey='benchmark'
          stroke={benchmarkColor}
          dot={false}
          strokeWidth={1.5}
          activeDot={{ stroke: benchmarkColor, strokeWidth: 2, r: 4 }}
        />
      </RechartLineChart>
    </ResponsiveContainer>
  );
}
