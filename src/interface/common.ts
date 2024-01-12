// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type GQLVariables = {
  [key: string]: Any;
};

export type CheckType = {
  [key: string]: boolean;
};

export interface DataItem {
  [key: string]: string | number;
}

export interface ModalInfo {
  name: string;
  isDimmed?: boolean;
  isDimmedClickClose?: boolean;
  children: React.ReactNode;
}

export type READYMADE_BASE_ID_TYPE =
  | 'SECTOR'
  | 'FACTOR'
  | 'FACTOR_ADJUST'
  | 'MASTER_FACTOR_ADJUST'
  | 'UNIVERSE'
  | 'INVESTMENT'
  | 'STOCK_SELECTION'
  | 'BACKTEST';

export interface READYMADE_BASE_ITEM {
  id?: string;
  name: string;
  description?: string;
}

export interface SelectItem {
  text: string;
  value: string | number;
}

export interface LegendListItem {
  color: string;
  value: string;
}

export interface SelectButtonBoxItem {
  text: string;
  value: string | number;
  type?: 'BUTTON' | 'INPUT' | 'CALENDAR';
}
