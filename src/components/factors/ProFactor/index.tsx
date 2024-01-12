// Components
import { useState, memo, useCallback, useMemo, useEffect } from 'react';
import { ProFactors, HistogramChartItem } from '@interface/chart';
import Slider from '@components/atoms/Slider';
import { Any } from '@interface/common';
import HistogravmChart from '@components/chart/HistogramChart';

// types

interface ProFactor {
  data: ProFactors;
  onChange?: (value: number[], isStartRange: boolean) => void;
}

export default memo(function ProFactor(props: ProFactor) {
  const { data, onChange } = props;
  const step = 2;
  const [value, setValue] = useState<number[]>([]);
  const handleChange = useCallback(
    (newValues: Any) => {
      if (newValues) {
        const isStartRange =
          JSON.stringify(value[0]) === JSON.stringify(newValues[0]);

        setValue(newValues as number[]);
        onChange?.(newValues, !isStartRange);
      }
    },
    [onChange, value],
  );

  const handleClick = (index: number) => {
    setValue([value[0], index]);
  };

  const histogramData = useMemo(
    () =>
      data?.histogramChartData.map((item, index) => {
        return {
          ...item,
          inActive: index * step >= value[0] && index * step <= value[1],
        };
      }) as HistogramChartItem[],
    [data, value],
  );

  useEffect(() => {
    setValue(data?.initRange);
  }, [data]);

  return (
    <>
      <HistogravmChart
        activeColor='#ddd'
        inActiveColor='#ffdc00'
        data={histogramData}
        onClick={handleClick}
      />
      <Slider
        range
        value={value}
        min={0}
        max={100}
        onChange={handleChange}
        railColor='#ddd'
        trackColor='#ffdc00'
      />
    </>
  );
});
