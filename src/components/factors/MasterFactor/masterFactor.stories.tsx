/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import MasterFactor from '@components/factors/MasterFactor';
import { MasterFactorHistogramChartItem } from '@interface/chart';
import data from './masterFactor.stories.json';

const meta = {
  title: 'factors/MasterFactor',
  component: MasterFactor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof MasterFactor>;

export default meta;
type Story = StoryObj<typeof MasterFactor>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState<number>(data.value);
    const [totoalCount, setTotalCount] = useState<number>(data.startTotalCount);

    const handleChange = (
      value: number,
      data: MasterFactorHistogramChartItem,
    ) => {
      setValue(value);
      setTotalCount(data?.totalCount as number);
    };

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          gap: '20px',
          padding: '20px',
        }}>
        <div>인덱스: {value}</div>
        <div>총 갯수: {totoalCount}</div>
        <MasterFactor {...args} onChange={handleChange} />
      </div>
    );
  },
  args: {
    data: data.histogram,
    startIndex: data.startIndex,
  },
};
