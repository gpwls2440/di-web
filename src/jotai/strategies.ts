import { atom } from 'jotai';
import { threeYearsAgoOfThisMonth } from '@constants/date';
import { ThemeGroupType } from '@services/base';
import {
  RebalancingPeriod,
  Optimization,
  StrategiesOrderMethod,
  StrategiesOrderPeriodReturn,
  UniversePresets,
} from '@interface/strategies';
import { FactorInputItem, WhitelistInputItem } from '@services/auth';

export interface SimulationOptionScreeningAtom {
  [index: string]:
    | string
    | string[]
    | number
    | WhitelistInputItem[]
    | RebalancingPeriod
    | FactorInputItem[];
  blacklist: string[];
  whitelist: WhitelistInputItem[];
  booksize: number;
  startDate: number;
  rebalancing: RebalancingPeriod;
  optimization: Optimization;
  factors: FactorInputItem[];
}

type Keyword = string;

type ThemeVariables = {
  isKbPick: boolean;
  themeGroup: string[];
  orderMethod: StrategiesOrderMethod;
  orderPeriodReturn: StrategiesOrderPeriodReturn;
};

type SectorVariables = {
  orderMethod: StrategiesOrderMethod;
  orderPeriodReturn: StrategiesOrderPeriodReturn;
  universePreset: UniversePresets;
};

export const strategyIdAtom = atom<string>('');

export const simulationOptionScreeningAtom =
  atom<SimulationOptionScreeningAtom>({
    blacklist: [],
    whitelist: [],
    booksize: 10000000,
    startDate: threeYearsAgoOfThisMonth,
    factors: [],
    rebalancing: 'HALF',
    optimization: 'EQUAL_WEIGHT',
  });

export const themeVariablesAtom = atom<ThemeVariables>({
  isKbPick: false,
  themeGroup: [],
  orderMethod: 'CUMULATIVE',
  orderPeriodReturn: 'MONTH_3',
});

export const sectorVariablesAtom = atom<SectorVariables>({
  orderMethod: 'CUMULATIVE',
  orderPeriodReturn: 'MONTH_3',
  universePreset: 'KOSPI200_KOSDAQ150_KRX300',
});

export const keywordAtom = atom<Keyword>('');
export const themeKeywordsAtom = atom<ThemeGroupType[]>([]);
