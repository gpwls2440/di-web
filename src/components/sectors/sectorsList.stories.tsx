import type { Meta, StoryObj } from '@storybook/react';

import { SectorsChecks } from '@interface/sectors';
import SectorsList from './SectorsList';
import sectorsListData from './sectorsList.stories.json';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'sectors/SectorsList',
  component: SectorsList,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SectorsList>;

export default meta;
type Story = StoryObj<typeof meta>;

const data =
  (sectorsListData?.data?.sectors?.sectors?.map((item) => {
    const industriesData = item?.industries;

    const industriesIsChecked = industriesData?.map((item) => {
      return item?.isChecked;
    });
    const industriesCheckedLength = industriesIsChecked?.filter(
      (checked) => checked === true,
    ).length;

    return {
      name: item?.name,
      id: item?.sector,
      sectors: {
        [`${item?.sector}`]:
          industriesCheckedLength === item?.industries?.length,
      },
      selected: industriesCheckedLength,
      childrenLength: industriesData?.length,
      children: industriesData?.map((item) => {
        return {
          id: item?.industry,
          name: item?.name,
        };
      }),
      childrenChecks: industriesData?.reduce((acc, item) => {
        return {
          ...acc,
          [`${item?.industry}`]:
            item?.isChecked !== null ? item?.isChecked : false,
        };
      }, {}),
    };
  }) as SectorsChecks[]) ?? [];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    data,
  },
};
