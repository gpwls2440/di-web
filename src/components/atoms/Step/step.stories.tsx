import type { Meta, StoryObj } from '@storybook/react';

import Step from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'atoms/Step',
  component: Step,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Step>;

export default meta;
type Story = StoryObj<typeof meta>;

const data = [
  {
    name: '섹터/업종',
  },
  {
    name: '팩터조정',
  },
  {
    name: '투자기준',
  },
  {
    name: '종목선택',
  },
  {
    name: '백테스트',
  },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    data,
    activeIndex: 0,
  },
};
