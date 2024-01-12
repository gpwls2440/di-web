import { READYMADE_BASE_ITEM, SelectButtonBoxItem } from '@interface/common';
import {
  threeYearsAgoOfThisMonth,
  twoYearsAgoOfThisMonth,
  oneYearAgoOfThisMonth,
} from '@constants/date';

export interface ReadymadeStepListStep {
  [index: string]: string | READYMADE_BASE_ITEM[] | undefined;
  name?: string;
  data: READYMADE_BASE_ITEM[];
}

export type ReadymadeStepType = {
  [index: string]: ReadymadeStepListStep;
};

export type READYMADE_STEP_TYPE = {
  [index: string]: ReadymadeStepType;
  // diy: ReadymadeStepType;
  master: ReadymadeStepType;
  theme: ReadymadeStepType;
};

export type INVESTMENT_SELECTED_TYPE = {
  [index: string]: string;
};

export type INVESTMENT_OPTIONS_TYPE = {
  [index: string]: SelectButtonBoxItem[];
};

export const BACKTEST = [
  {
    id: 'BACKTEST',
    name: '백테스트',
    description: '',
  },
];

export const STRATEGY_PRESET_LEVEL_2 = [
  {
    id: 'INVESTMENT',
    name: '투자기준',
    description:
      '투자 금액, 최적화 옵션, 리밸런싱 주기, 백테스트 시작일을 원하는 대로 설정해보세요.',
  },
  {
    id: 'STOCK_SELECTION',
    name: '종목선택',
    description:
      '구성된 종목 리스트에서 종목을 제외하거나, +버튼을 눌러 제외한 종목을 리스트에 재편입시킬 수 있습니다.',
  },
  ...BACKTEST,
];

export const STRATEGY_PRO_LEVEL_1 = [
  {
    id: 'INVESTMENT_STYLE',
    name: '투자 스타일',
    description: '간편하게 팩터의 강도만을 선택하여 전략을 구성합니다.',
  },
  {
    id: 'ONLY_MONEY',
    name: '금액만 설정',
    description: '',
  },
  ...BACKTEST,
];

export const STRATEGY_PRO_LEVEL_2 = [
  {
    id: 'INVESTMENT_STYLE',
    name: '투자 스타일',
    description: '간편하게 팩터의 강도만을 선택하여 전략을 구성합니다.',
  },
  ...STRATEGY_PRESET_LEVEL_2,
];

export const STRATEGY_PRO = [
  {
    id: 'FACTOR_ADJUST',
    name: '팩터조정',
    description:
      '다양한 팩터들의 세부 값을 나만의 기준으로 조정하여 전략을 구성합니다.',
  },
];

export const STRATEGY_PRO_LEVEL_PRO = [
  ...STRATEGY_PRO,
  ...STRATEGY_PRESET_LEVEL_2,
  ...BACKTEST,
];

export const STRATEGY_DIY_LEVEL_PRO = [
  {
    id: 'SECTOR',
    name: '섹터/업종',
    description: '투자하고 싶은 섹터나 산업을 선택하세요.',
  },
  ...STRATEGY_PRO,
  ...STRATEGY_PRESET_LEVEL_2,
];

export const STRATEGY_MASTER = [
  {
    id: 'UNIVERSE',
    name: '유니버스',
    description: '기준이 되는 유니버스를 선택하여 전략을 구성합니다.',
  },
  {
    id: 'MASTER_FACTOR_ADJUST',
    name: '팩터조정',
    description: '스코어가 높을 수록 대가들의 투자 스타일에 적합한 종목입니다.',
  },
  {
    id: 'INVESTMENT',
    name: '투자기준',
    description:
      '투자 금액, 최적화 옵션, 리밸런싱 주기, 백테스트 시작일을 원하는 대로 설정해보세요.',
  },
  {
    id: 'STOCK_SELECTION',
    name: '종목선택',
    description:
      '구성된 종목 리스트에서 종목을 제외하거나, +버튼을 눌러 제외한 종목을 리스트에 재편입시킬 수 있습니다.',
  },
];

export const READYMADE_STEP: READYMADE_STEP_TYPE = {
  diy: {
    preset_level_2: {
      name: 'Level 2',
      data: STRATEGY_PRESET_LEVEL_2,
    },
    pro_level_pro: {
      name: 'Level Pro',
      data: STRATEGY_DIY_LEVEL_PRO,
    },
  },
  theme: {
    preset_level_1: {
      name: 'Level 1',
      data: BACKTEST,
    },
    preset_level_2: {
      name: 'Level 2',
      data: STRATEGY_PRESET_LEVEL_2,
    },
    pro_level_1: {
      name: 'Level 1',
      data: STRATEGY_PRO_LEVEL_1,
    },
    pro_level_2: {
      name: 'Level 2',
      data: STRATEGY_PRO_LEVEL_2,
    },
    pro_level_pro: {
      name: 'Level Pro',
      data: STRATEGY_PRO_LEVEL_PRO,
    },
  },
  master: {
    level_1: {
      name: 'level1',
      data: STRATEGY_MASTER,
    },
  },
};

export const BOOKSIZE_OPTIONS: SelectButtonBoxItem[] = [
  {
    text: '직접입력',
    value: '',
    type: 'INPUT',
  },
  {
    text: '1,000만원',
    value: 10000000,
    type: 'BUTTON',
  },
  {
    text: '3,000만원',
    value: 30000000,
    type: 'BUTTON',
  },
  {
    text: '5,000만원',
    value: 5000000,
    type: 'BUTTON',
  },
  {
    text: '1억원',
    value: 100000000,
    type: 'BUTTON',
  },
  {
    text: '2억원',
    value: 200000000,
    type: 'BUTTON',
  },
  {
    text: '3억원',
    value: 300000000,
    type: 'BUTTON',
  },
  {
    text: '5억원',
    value: 500000000,
    type: 'BUTTON',
  },
];

export const REBALANCING_OPTIONS: SelectButtonBoxItem[] = [
  {
    text: '리밸린성 없음',
    value: 'NONE',
  },
  {
    text: '1개월에 한번',
    value: 'MONTH',
  },
  {
    text: '3개월에 한번',
    value: 'QUARTER',
  },
  {
    text: '6개월에 한 번',
    value: 'HALF',
  },
];

export const OPTIMIZATION_OPTIONS: SelectButtonBoxItem[] = [
  {
    text: '시가 총액 최적화',
    value: 'MARKET_WEIGHT',
  },
  {
    text: '동일 비중 최적화',
    value: 'EQUAL_WEIGHT',
  },
  {
    text: '위험균형 죄적화',
    value: 'RISK_PARITY',
  },
];

export const STARTDATE_OPTIONS: SelectButtonBoxItem[] = [
  {
    text: '직접입력',
    value: '',
    type: 'CALENDAR',
  },
  {
    text: '1년전',
    value: oneYearAgoOfThisMonth,
    type: 'BUTTON',
  },
  {
    text: '2년전',
    value: twoYearsAgoOfThisMonth,
    type: 'BUTTON',
  },
  {
    text: '3년전',
    value: threeYearsAgoOfThisMonth,
    type: 'BUTTON',
  },
];

export const INVESTMENT_OPTIONS: INVESTMENT_OPTIONS_TYPE = {
  BOOKSIZE_OPTIONS,
  REBALANCING_OPTIONS,
  OPTIMIZATION_OPTIONS,
  STARTDATE_OPTIONS,
};

export const INVESTMENT_SELECTED: INVESTMENT_SELECTED_TYPE[] = [
  {
    text: '투자금액',
    key: 'booksize',
  },
  {
    text: '투자금액',
    key: 'optimization',
  },
  {
    text: '리밸런싱 주기',
    key: 'rebalancing',
  },
  {
    text: '백테스트 시작일',
    key: 'startDate',
  },
];
