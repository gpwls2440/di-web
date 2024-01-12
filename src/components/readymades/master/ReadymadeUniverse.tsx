// Dependency
import { useEffect, useState, ChangeEvent, useCallback } from 'react';
import { useParams } from 'react-router';
import { useFetchUniversePresets } from '@hooks/useFetchUniversePresets';
import { useFetchMasterFactors } from '@hooks/useFetchMasterFactors';

// Components
import Box from '@components/atoms/Box';
import Title from '@components/atoms/Title';
import Radio from '@components/atoms/Radio';
import MasterFactor from '@components/factors/MasterFactor';

// types
import { UniversePresetEnum } from '@services/base';
import { MasterFactorHistogramChartItem } from '@interface/chart';

export default function ReadymadeUniverse() {
  const { strategyId } = useParams();
  const [value2, setVaule] = useState<string>('KOSPI_KOSDAQ');
  const [factorValue, setFctorValue] = useState<number>(0);
  const [totoalCount, setTotalCount] = useState<number>(0);

  const { data, isLoading } = useFetchUniversePresets();
  const { masterFactorData, isFetching } = useFetchMasterFactors({
    strategyId: strategyId ?? '',
    universePreset: value2 as UniversePresetEnum,
    isFetch: !!value2,
  });

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setVaule(e.target.value);
  }, []);

  const handleMasterFactorChange = (
    value: number,
    data: MasterFactorHistogramChartItem,
  ) => {
    setFctorValue(value);
    setTotalCount(data?.totalCount as number);
  };

  useEffect(() => {
    if (masterFactorData.value) {
      setFctorValue(masterFactorData.value);
    }
  }, [masterFactorData.value]);

  useEffect(() => {
    if (masterFactorData?.startTotalCount) {
      setTotalCount(masterFactorData.startTotalCount);
    }
  }, [masterFactorData.startTotalCount]);

  return (
    <div className='master-universe'>
      <div>{value2}</div>
      <ul>
        <li>
          {!isLoading &&
            data?.listed?.map((item) => {
              return (
                <Box key={item?.name}>
                  <Radio
                    name='universe'
                    onChange={handleChange}
                    id={`${item?.name}`}
                    checked={item?.name === value2}
                    value={`${item?.name}`}
                    label={
                      <Title
                        title={item?.displayName}
                        subTitle={item?.description}
                      />
                    }
                  />
                </Box>
              );
            })}
          {!isLoading &&
            data?.representative?.map((item) => {
              return (
                <Box key={item?.name}>
                  <Radio
                    name='universe'
                    onChange={handleChange}
                    id={`${item?.name}`}
                    checked={item?.name === value2}
                    value={`${item?.name}`}
                    label={
                      <Title
                        title={item?.displayName}
                        subTitle={item?.description}
                      />
                    }
                  />
                </Box>
              );
            })}
        </li>
        <li>
          {!isFetching && (
            <>
              <div>종목 수 :{totoalCount}</div>
              <div>인덱스 {factorValue}</div>
              <MasterFactor
                data={masterFactorData.histogram}
                startIndex={masterFactorData.startIndex}
                onChange={handleMasterFactorChange}
              />
            </>
          )}
        </li>
      </ul>
    </div>
  );
}
