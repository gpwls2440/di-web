/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import StyleFactor from '@components/factors/StyleFactor';

const meta = {
  title: 'factors/StyleFactor',
  component: StyleFactor,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof StyleFactor>;

export default meta;
type Story = StoryObj<typeof StyleFactor>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState<number>(0.1);

    const handleChange = (_id: string, value: number) => {
      setValue(value);
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
        <div>선택값: {value}</div>
        <StyleFactor {...args} onChange={handleChange} defalutValue={value} />
      </div>
    );
  },
  args: {
    id: '테스트',
    title: '테스트 타이틀',
    description: '테스트 디스크립션 ',
    defalutValue: 0.1,
    high: 0.7,
    middle: 0.5,
    low: 0.1,
  },
};
