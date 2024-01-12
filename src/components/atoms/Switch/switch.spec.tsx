import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Switch from '.';

describe('Atoms/Switch', () => {
  it('Switch 테스트', async () => {
    const handleChange = vi.fn();
    const { container } = render(
      <Switch onChange={handleChange}>테스트</Switch>,
    );
    const checkbox = container.firstChild?.firstChild;
    checkbox && (await fireEvent.click(checkbox));

    // 최초 false에서 true로 변경
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect((checkbox?.firstChild as HTMLInputElement).checked).toBeTruthy();

    checkbox && (await fireEvent.click(checkbox));

    // true에서 false로 변경
    expect(handleChange).toHaveBeenCalledTimes(2);
    expect((checkbox?.firstChild as HTMLInputElement).checked).toBeFalsy();
  });
});
