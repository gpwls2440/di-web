import { WeightItem, BaseDate } from '@services/auth';
import { FactorStyleItem } from '@services/base';

export type ChartColorType = 'blue' | 'yellow';
export interface ChartModel<T> {
  data: T[];
}

export interface TickDto {
  myStrategy?: string | number;
  strategy?: string | number;
  benchmark?: string | number;
  name: string | number;
}

export interface ProfitChartModel extends ChartModel<TickDto> {
  baseDate?: string | number;
  myStrategyName?: string;
  strategyName?: string;
  benchmarkName?: string;
}

export const LABEL_MAPPED_NAME: Record<string, string> = {
  myStrategy: '나의 전략',
  strategy: '프리셋',
  benchmark: '벤치마크',
};

export interface LineChartsData {
  strategyName: string;
  myStrategyName: string;
  benchmarkName: string;
  baseDate: BaseDate;
  data: TickDto[];
  period: string;
}

export interface StackBarChartItemDto {
  /** yyyy-mm-dd 형태의 숫자열 */
  date: string;
  cash: number;
  [key: number]: number;
}

export interface StackBarChartLegendItem {
  holdings: WeightItem[];
}

export interface HistogramChartItem {
  height: number;
  inActive: boolean;
  volume: number;
}

export interface MasterFactorHistogramChartItem extends HistogramChartItem {
  totalCount?: number;
}

export interface MasterFactorData {
  histogram: MasterFactorHistogramChartItem[];
  startIndex: number;
  value: number | undefined;
  startTotalCount: number;
}

export interface ChartData {
  volume?: number;
  weight?: number;
}

export interface ProFactors {
  cmName: string;
  displayName: string;
  description: string;
  img: number;
  comments: string;
  minLimit: number;
  maxLimit: number;
  min: number;
  max: number;
  winsorizedHistograms: number[];
  histogramChartData: ChartData[];
  rawHistograms: number[];
  initRange: number[];
}

export interface ProFactorsData {
  factors: ProFactors[];
  style: FactorStyleItem[];
}
