import { Treemap, ResponsiveContainer, Tooltip, TooltipProps } from 'recharts';
import { TREE_MAP_CHART_COLOR } from '@constants/chart';

// Components
import TreeMapChartTooltip from '@components/chart/TreeMapChart/TreeMapChartTooltip';
import TreeMapContents from '@components/chart/TreeMapChart/TreeMapContents';

interface TreeMapChartItem {
  name: string;
  size: number;
}
interface TreeMapChart {
  height: number;
  data: TreeMapChartItem[];
}

export default function TreeMapChart(props: TreeMapChart) {
  const { data, height } = props;

  return (
    <div
      style={{
        height,
      }}>
      <ResponsiveContainer width='100%' height='100%'>
        <Treemap
          data={data}
          dataKey='size'
          content={
            <TreeMapContents
              colors={TREE_MAP_CHART_COLOR}
              lastIndex={data.length - 1}
            />
          }>
          <Tooltip
            content={(e) =>
              TreeMapChartTooltip(e as TooltipProps<string, string | number>)
            }
          />
        </Treemap>
      </ResponsiveContainer>
    </div>
  );
}
