// Components
import { useState, useMemo, useCallback } from 'react';
import { HistogramChartItem } from '@interface/chart';
import Slider from '@components/atoms/Slider';
import HistogravmChart from '@components/chart/HistogramChart';

// types

interface MasterFactor {
  data: HistogramChartItem[];
  startIndex?: number;
  onChange?: (value: number, data: HistogramChartItem) => void;
}

export default function MasterFactor(props: MasterFactor) {
  const { data = [], startIndex = 0, onChange } = props;
  const max = data.length;
  const [value, setValue] = useState<number>(startIndex);

  const handleChange = useCallback(
    (value: number | number[]) => {
      const newValue = (value !== max ? value : max - 1) as number;

      if (max !== value) {
        setValue(newValue);
        onChange?.(newValue + 1, data[newValue]);
      }
    },
    [data, max, onChange],
  );

  const handleClick = useCallback(
    (index: number) => {
      if (max !== index) {
        setValue(index);
        onChange?.(index + 1, data[index]);
      }
    },
    [data, max, onChange],
  );

  const histogramData = useMemo(
    () =>
      data.map((item, index) => {
        return { ...item, inActive: !(index > value - 1) };
      }),
    [data, value],
  );

  return (
    <>
      <div>startIndex: {startIndex}</div>
      <div>값 value: {value}</div>
      <HistogravmChart data={histogramData} onClick={handleClick} />
      <Slider min={0} max={max} value={value} onChange={handleChange} />
    </>
  );
}
