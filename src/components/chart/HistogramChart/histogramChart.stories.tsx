import type { Meta, StoryObj } from '@storybook/react';

import HistogramChart from '.';

import data from './histogram.stories.json';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'chart/HistogramChart',
  component: HistogramChart,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          gap: '20px',
          padding: '20px',
        }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof HistogramChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    data,
  },
};
