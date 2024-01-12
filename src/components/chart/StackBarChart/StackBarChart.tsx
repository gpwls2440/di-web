/**
 * StackBarChart > StackBarChart
 */

// Dependency
import { useState, memo, useCallback } from 'react';
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  TooltipProps,
} from 'recharts';
import { chunkArray } from '@kbam-frontend/madebyus';
import { STACK_BAR_CHART_COLOR } from '@constants/chart';

// Types
import {
  CategoricalChartFunc,
  CategoricalChartState,
} from 'recharts/types/chart/generateCategoricalChart';
import { StackBarChartItemDto } from '@interface/chart';

// Components
import StackBarChartTooltip from './StackBarChartTooltip';
import RebalanceTick from './RebalanceTick';
import StackBarChartPageNation from './StackBarChartPageNation';

// css
import './staackbarchart.css';

interface StackBarChartProps {
  headContents?: React.ReactNode;
  data: StackBarChartItemDto[];
  height?: number;
  stackBarsIndex?: number;
  isShowPageNation?: boolean;
  onChange?: (index: number) => void;
}

export default memo(function StackBarChart(props: StackBarChartProps) {
  const {
    headContents,
    data = [],
    height = 300,
    stackBarsIndex = 6,
    isShowPageNation = true,
    onChange,
  } = props;
  const newArr = chunkArray(data, 24) as StackBarChartItemDto[][];
  const stackBarChartData = newArr
    .map((item) => {
      return item.reverse();
    })
    .reverse();

  const totalIndex = stackBarChartData.length;
  const STACK_BARS_KEY_LIST = [...Array(stackBarsIndex)]
    .map((_v, i) => i)
    .reverse();
  const [chartX, setChartX] = useState<number>(-1);
  const [chartIndex, setChartIndex] = useState<number>(-1);
  const [pageNationIndex, setPageNationIndex] = useState<number>(0);

  const lastIndex = data.length;

  const handleMouseMove: CategoricalChartFunc = useCallback(
    (nextState: CategoricalChartState) => {
      const { activeCoordinate, chartX, activeTooltipIndex } = nextState;

      const newChartX = activeCoordinate?.x || chartX;
      if (newChartX) {
        setChartX(newChartX);
        setChartIndex(activeTooltipIndex ?? -1);
        onChange?.(chartIndex);
      }
    },
    [onChange, chartIndex],
  );

  return (
    <div className='stack-bar-chart'>
      <div className='stack-bar-chart-head-wrap'>
        {headContents && <>{headContents}</>}

        {!!stackBarChartData?.length && isShowPageNation && (
          <StackBarChartPageNation
            index={pageNationIndex}
            totalIndex={totalIndex}
            setPageNationIndex={setPageNationIndex}
          />
        )}
      </div>
      {data && !!data.length && (
        <>
          <div
            style={{
              height,
            }}>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart
                data={stackBarChartData[pageNationIndex]}
                margin={{
                  top: 20,
                  left: -18,
                }}
                onMouseMove={handleMouseMove}
                barCategoryGap={1}>
                <XAxis
                  dataKey='date'
                  padding={{ left: 2 }}
                  strokeWidth={1}
                  axisLine={false}
                  tickLine={false}
                  fontSize={12}
                  fontWeight={300}
                  color='#eee'
                  tickFormatter={() => ''}
                  tick={<RebalanceTick />}
                />
                <YAxis
                  strokeWidth={1}
                  tickCount={6}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${value / 100}%`}
                  padding={{ bottom: 2 }}
                  fontSize={12}
                  fontWeight={300}
                  color='#eee'
                />
                <Tooltip
                  position={{ x: chartX - 42 }}
                  content={(e) =>
                    StackBarChartTooltip(
                      e as TooltipProps<string, string | number>,
                      chartX,
                      lastIndex,
                    )
                  }
                />
                <Bar
                  key='stack-bar-cash'
                  dataKey='cash'
                  stackId='history'
                  fill='#ddd'
                />
                {STACK_BARS_KEY_LIST.map((item) => {
                  return (
                    <Bar
                      key={`stack-bar-${item}`}
                      dataKey={item}
                      stackId='history'
                      fill={STACK_BAR_CHART_COLOR[item]}
                    />
                  );
                })}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}
    </div>
  );
});
