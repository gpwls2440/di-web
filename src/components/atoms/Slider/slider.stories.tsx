import type { Meta, StoryObj } from '@storybook/react';
import Slider from '@components/atoms/Slider';

const meta = {
  title: 'atoms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof Slider>;

// // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  render: (args) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          gap: '20px',
          padding: '20px',
        }}>
        <Slider {...args} />
      </div>
    );
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 1, max: 7, step: 1 },
    },
  },
  args: {
    range: false,
    value: 3,
    railColor: '#ddd',
    trackColor: '#ffdc00',
    onChange: () => {},
  },
};

export const Range: Story = {
  render: (args) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '500px',
          gap: '20px',
          padding: '20px',
        }}>
        <Slider {...args} />
      </div>
    );
  },
  args: {
    range: true,
    value: [0, 4],
    railColor: '#ddd',
    trackColor: '#ffdc00',
    onChange: () => {},
  },
};
