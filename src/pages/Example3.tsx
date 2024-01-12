// Dependency
import { useEffect, useState } from 'react';
import { UniversePresetEnum } from '@services/base';
import { useFetchMasterFactors } from '@hooks/useFetchMasterFactors';
import { useFetchProFactors } from '@hooks/useFetchProFactors';
import { log } from '@utils/common';

// Components
import MasterFactor from '@components/factors/MasterFactor';
import ProFactor from '@components/factors/ProFactor';
import Button from '@components/atoms/Button';
import { MasterFactorHistogramChartItem } from '@interface/chart';

export default function Example3() {
  const id = 'TWFzdGVyU3RyYXRlZ3lUeXBlOjIx';
  const id2 = 'VGhlbWVTdHJhdGVneVR5cGU6MTEw';

  const [universePreset] = useState<UniversePresetEnum>(
    UniversePresetEnum.KospiKosdaq,
  );

  const { masterFactorData, isFetching } = useFetchMasterFactors({
    strategyId: id,
    universePreset,
  });
  const { proFactorsData, isLoading: proFactorsDataLoading } =
    useFetchProFactors(id2, universePreset);

  const [value, setValue] = useState<number>(0);
  const [totoalCount, setTotalCount] = useState(0);
  const [factorsIndex, setFactorsIndex] = useState<number>(0);

  const handleChange = (
    value: number,
    data: MasterFactorHistogramChartItem,
  ) => {
    setValue(value);
    setTotalCount(data?.totalCount as number);
  };

  const handleProFactorChange = (value: number[], isStartRange: boolean) => {
    log(value);
    log('앞의 레인지 여부', isStartRange);
  };

  useEffect(() => {
    if (masterFactorData.value) {
      setValue(masterFactorData.value);
    }
  }, [masterFactorData.value]);

  useEffect(() => {
    if (masterFactorData?.startTotalCount) {
      setTotalCount(masterFactorData.startTotalCount);
    }
  }, [masterFactorData.startTotalCount]);

  return (
    <>
      <div className='pd20'>
        {!isFetching && (
          <>
            <div>종목 수 :{totoalCount}</div>
            <div>인덱스 {value}</div>
            <MasterFactor
              data={masterFactorData.histogram}
              startIndex={masterFactorData.startIndex}
              onChange={handleChange}
            />
          </>
        )}
      </div>
      <div className='pd20'>
        {!proFactorsDataLoading && (
          <>
            <div
              style={{
                marginBottom: '15px',
              }}>
              {proFactorsData[0].factors?.[factorsIndex].displayName}
            </div>
            <ProFactor
              data={proFactorsData[0].factors?.[factorsIndex]}
              onChange={handleProFactorChange}
            />
          </>
        )}
      </div>
      <div>
        <Button onClick={() => setFactorsIndex(0)}>0번</Button>
        <Button onClick={() => setFactorsIndex(1)}>1번</Button>
      </div>
    </>
  );
}
