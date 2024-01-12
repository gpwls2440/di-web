import { INVESTMENT_METHOD_LIST } from '@interface/strategies';

export const LEGEND_LIST = [
  {
    color: '#5B86D4',
    value: '프리셋(Pre-Set)',
  },
  {
    color: '#959CAB',
    value: 'KOSPI',
  },
];

export const STRATEGIES_FILTERS = [
  {
    title: '전략 정렬',
    id: 'orderMethod',
    items: [
      {
        title: '수익률 높은 순',
        value: 'CUMULATIVE',
      },
      {
        title: '수익률 낮은 순',
        value: 'CUMULATIVE_ASC',
      },
      {
        title: '가나다 순',
        value: 'NAME',
      },
    ],
  },
  {
    title: '기간 수익률',
    id: 'orderPeriodReturn',
    items: [
      {
        title: '최근 1개월',
        value: 'MONTH_1',
      },
      {
        title: '최근 3개월',
        value: 'MONTH_3',
      },
      {
        title: '최근 6개월',
        value: 'MONTH_6',
      },
    ],
  },
];

export const INVESTMENT_METHOD: INVESTMENT_METHOD_LIST[] = [
  {
    id: 'PRO',
    name: '중상급자',
    subName: '프로(Pro)투자',
    method: [
      {
        id: 'PRO_LEVEL_PRO',
        name: 'Level Pro',
        description: '모든 과정을 편집하여 전문가 수준으로 투자합니다.',
      },
      {
        id: 'PRO_LEVEL_2',
        name: 'Level 2',
        description: '투자스타일부터 종목까지 선택하여 투자합니다.',
      },
      {
        id: 'PRO_LEVEL_1',
        name: 'Level 1',
        description: '나만의 투자스타일과 금액만 설정하여 투자합니다.',
      },
    ],
  },
  {
    id: 'PRESET',
    name: '초급자',
    subName: '프리셋 투자',
    method: [
      {
        id: 'PRESET_LEVEL_2',
        name: 'Level 2',
        description: '4가지 투자기준과 종목을 선택하여 투자합니다.',
      },
      {
        id: 'PRESET_LEVEL_1',
        name: 'Level 1',
        description: '금액만 설정하여 빠르게 투자합니다.',
      },
    ],
  },
];

export const SECTOR_STRATEGIES_TAB = [
  {
    id: 'representative',
    title: '대표기업',
  },
  {
    id: 'listed',
    title: '상장기업',
  },
];
