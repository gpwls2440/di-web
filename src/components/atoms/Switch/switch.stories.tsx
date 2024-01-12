import type { Meta, StoryObj } from '@storybook/react';
import { log } from '@utils/common';

import Switch from '@components/atoms/Switch';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'atoms/Switch',
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    labelPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleChange = (checked: boolean) => {
  log(checked);
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    children: '테스트',
    onChange: handleChange,
    onColor: '#ffdc00',
    offColor: '#ddd',
  },
};

export const Disable: Story = {
  args: {
    children: 'Disable',
    onChange: handleChange,
    disabled: true,
    onColor: '#ffdc00',
    offColor: 'red',
  },
};
