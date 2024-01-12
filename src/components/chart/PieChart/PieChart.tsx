/**
 * PieChart
 */

// Dependency
import { Cell, Pie, PieChart as RechartPieChart } from 'recharts';
import { v4 as uuidv4 } from 'uuid';
import { CHART_BLUE_COLOR, CHART_ORANGE_COLOR } from '@constants/chart';
import { WeightItem } from '@services/auth';

// Types
import { ChartColorType } from '@interface/chart';

// Components
import Title from '@components/atoms/Title';
import PieChartLegendList from './PieChartLegendList';

// css
import './piechart.css';

interface PieChartProps {
  title?: string;
  className?: string;
  data: WeightItem[] | undefined;
  isShowLegendList?: boolean;
  color?: ChartColorType;
}

export default function PieChart(props: PieChartProps) {
  const { title, className, data = [], isShowLegendList = true, color } = props;

  const colorList = color === 'blue' ? CHART_BLUE_COLOR : CHART_ORANGE_COLOR;
  return (
    <div className={`pie-chart-wrap ${className || ''}`}>
      <div className='pie-chart'>
        {title && <Title title={title} />}
        <RechartPieChart width={180} height={180}>
          <Pie
            data={data}
            dataKey='weight'
            nameKey='name'
            outerRadius={90}
            innerRadius={40}
            startAngle={90}
            endAngle={450}>
            {data.map((_, index) => (
              <Cell key={uuidv4()} fill={colorList[index]} />
            ))}
          </Pie>
        </RechartPieChart>
      </div>
      {isShowLegendList && !!data.length && (
        <PieChartLegendList data={data} colorList={colorList} />
      )}
    </div>
  );
}
