import { STRATEGY_FACTOR_NAME } from '@constants/strategy';

export interface FactorInfoItem {
  name: StrategyFactorType;
  text: string;
  desc: string;
  subs: SubFactorInfoItemModel[];
}

interface SubFactorInfoItemModel {
  name: string;
  desc: string;
  cmName: string;
  min: number;
  max: number;
  img: number;
  comments: string[];
}

export type StrategyFactorType = (typeof STRATEGY_FACTOR_NAME)[number];
