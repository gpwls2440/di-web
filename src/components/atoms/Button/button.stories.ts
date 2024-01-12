import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'atoms/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    children: '다시 편집',
    className: 'basic',
  },
};

export const Primary: Story = {
  args: {
    children: '전략 저장',
    className: 'basic primary',
  },
};

export const Tab: Story = {
  args: {
    children: '버튼',
    className: 'tab-style',
  },
};

export const TabActive: Story = {
  args: {
    children: '버튼',
    className: 'tab-style active',
  },
};
