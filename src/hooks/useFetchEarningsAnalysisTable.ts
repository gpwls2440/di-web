// Dependency
import {
  useGetMyRiskAssessmentIndexQuery,
  SimulationTypeEnum,
  UniverseEnum,
} from '@services/auth';
import { numberToPercent } from '@kbam-frontend/madebyus';

// Types
import { Any } from '@interface/common';
import { StrategiesUniverse } from '@interface/strategies';

interface UseFetchEarningsAnalysisTable {
  myStrategyId: string;
  benchmark?: StrategiesUniverse;
}

interface UseFetchEarningsAnalysisTableData {
  name: string;
  annualAvgReturn: string[];
  annualAvgVolatility: string[];
  cumulative: string[];
  mdd: string[];
  sharpe: string[];
  volatility: string[];
}

/**
 * useFetchEarningsAnalysisTable
 * @description 수익 분석 테이블 데이터로 변경해주는 훅
 * @param {UseFetchEarningsAnalysisTable} UseFetchEarningsAnalysisTable UseFetchEarningsAnalysisTable
 * @returns {Object} returnValue
 */
export function useFetchEarningsAnalysisTable(
  props: UseFetchEarningsAnalysisTable,
): {
  data: UseFetchEarningsAnalysisTableData;
  isLoading: boolean;
  isError: boolean;
} {
  const { myStrategyId, benchmark = 'KOSPI' } = props;
  const {
    data: response,
    isSuccess,
    isLoading,
    isError,
  } = useGetMyRiskAssessmentIndexQuery(
    {
      myStrategyId: myStrategyId as string,
      benchmark: benchmark as UniverseEnum,
      simulationType: 'ALL' as SimulationTypeEnum,
    },
    {
      enabled: !!myStrategyId,
    },
  );

  const myRiskAssessmentIndex =
    response?.myRiskAssessmentIndex?.myRiskAssessmentIndex;

  const getChangeValue = (data: Any) => {
    if (data) {
      const newObj = JSON.parse(JSON.stringify(data));
      delete newObj.name;

      Object.keys(newObj).forEach((key) => {
        if (key !== 'sharpe') {
          newObj[key] = numberToPercent(newObj[key], true);
        }
        if (key === 'sharpe') {
          newObj[key] = (
            Number(numberToPercent(newObj[key], false)) / 100
          ).toFixed(2);
        }
      });
      return newObj;
    }
    return {};
  };

  const benchmarkData = getChangeValue(myRiskAssessmentIndex?.info?.benchmark);
  const myStrategyData = getChangeValue(
    myRiskAssessmentIndex?.info?.myStrategy,
  );
  const strategyData = getChangeValue(myRiskAssessmentIndex?.info?.strategy);

  const emptyDataArr = ['', '', '', ''];
  const data = {
    name: myRiskAssessmentIndex?.info?.benchmark?.name ?? '',
    annualAvgReturn:
      !isLoading && isSuccess
        ? [
            '연환산 수익률',
            `${myStrategyData.annualAvgReturn}`,
            `${strategyData.annualAvgReturn}`,
            `${benchmarkData.annualAvgReturn}`,
          ]
        : emptyDataArr,
    annualAvgVolatility:
      !isLoading && isSuccess
        ? [
            '연환산 변동성',
            `${myStrategyData.annualAvgVolatility}`,
            `${strategyData.annualAvgVolatility}`,
            `${benchmarkData.annualAvgVolatility}`,
          ]
        : emptyDataArr,
    cumulative:
      !isLoading && isSuccess
        ? [
            '수익률',
            `${myStrategyData.cumulative}`,
            `${strategyData.cumulative}`,
            `${benchmarkData.cumulative}`,
          ]
        : emptyDataArr,
    mdd:
      !isLoading && isSuccess
        ? [
            'MDD',
            `${myStrategyData.mdd}`,
            `${strategyData.mdd}`,
            `${benchmarkData.mdd}`,
          ]
        : emptyDataArr,
    sharpe:
      !isLoading && isSuccess
        ? [
            '샤프지수',
            `${myStrategyData.sharpe}`,
            `${strategyData.sharpe}`,
            `${benchmarkData.sharpe}`,
          ]
        : emptyDataArr,
    volatility:
      !isLoading && isSuccess
        ? [
            '수익률',
            `${myStrategyData.volatility}`,
            `${strategyData.volatility}`,
            `${benchmarkData.volatility}`,
          ]
        : emptyDataArr,
  };

  return {
    data,
    isLoading,
    isError,
  };
}
