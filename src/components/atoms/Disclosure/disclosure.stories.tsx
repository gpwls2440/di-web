// import { type Meta, StoryFn, type StoryObj } from '@storybook/react';
import { type Meta } from '@storybook/react';

import Disclosure from '.';

const meta: Meta<typeof Disclosure> = {
  title: 'atoms/Disclosure',
  component: Disclosure,
  tags: ['autodocs'],
};

export default meta;

export function Basic() {
  return (
    <Disclosure>
      <Disclosure.Head>헤더 영역</Disclosure.Head>
      <Disclosure.Content>컨텐츠 영역</Disclosure.Content>
    </Disclosure>
  );
}

export function Open() {
  return (
    <Disclosure defaultOpen>
      <Disclosure.Head>헤더 영역</Disclosure.Head>
      <Disclosure.Content>컨텐츠 영역</Disclosure.Content>
    </Disclosure>
  );
}
