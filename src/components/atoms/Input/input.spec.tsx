import React, { useState } from 'react';
import { expect, describe, test } from 'vitest';
import { screen, render, fireEvent } from '@testing-library/react';
import Input from '.';

function TestInput() {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <Input value={value} aria-label='input' onChange={handleChange} />;
}

const setup = () => {
  const utils = render(<TestInput />);
  const input = screen.getByLabelText('input');
  return {
    input,
    ...utils,
  };
};

describe('Atoms/Input', () => {
  test('Input 새성 후 값 변경 테스트', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '23' } });
    expect((input as HTMLInputElement).value).toBe('23');
  });

  test('Input 빈값으로 변경 테스트', () => {
    const { input } = setup();
    fireEvent.change(input, { target: { value: '24' } });
    fireEvent.change(input, { target: { value: '' } });
    expect((input as HTMLInputElement).value).toBe('');
  });
});
