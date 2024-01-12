export type InvestmentMethodType = 'PRO' | 'PRESET';

export type StrategiesOrderMethod = 'CUMULATIVE' | 'CUMULATIVE_ASC' | 'NAME';

export type RebalancingPeriod = 'MONTH' | 'QUARTER' | 'HALF';

export type Optimization = 'MARKET_WEIGHT' | 'EQUAL_WEIGHT' | 'RISK_PARITY';

export type StrategiesOrderPeriodReturn = 'MONTH_1' | 'MONTH_3' | 'MONTH_6';

export type StrategiesUniverse =
  | 'KOSPI'
  | 'KOSPI200'
  | 'KOSDAQ'
  | 'KOSDAQ150'
  | 'KRX300'
  | 'NASDAQ100'
  | 'SNP500';

export type UniversePresets =
  | 'KOSPI200_KOSDAQ150_KRX300'
  | 'KOSPI200'
  | 'KOSDAQ150'
  | 'KRX300'
  | 'KOSPI_KOSDAQ'
  | 'KOSPI'
  | 'KOSDAQ'
  | 'SNP500'
  | 'NASDAQ100'
  | 'SNP500_NASDAQ100';

export interface INVESTMENT_METHOD_ITEM {
  [index: string]: string;
  id: string;
  name: string;
  description: string;
}

export interface INVESTMENT_METHOD_LIST {
  id?: string;
  name: string;
  subName: string;
  method: INVESTMENT_METHOD_ITEM[];
}
