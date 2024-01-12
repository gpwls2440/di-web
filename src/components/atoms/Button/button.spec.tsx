import { describe, expect, it, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Button from '.';

describe('Atoms/Button', () => {
  it('버튼 생성 후  클릭 테스트', () => {
    const handleClick = vi.fn();
    const { getByText } = render(<Button onClick={handleClick}>버튼</Button>);
    const buttonElement = getByText('버튼');
    fireEvent.click(buttonElement);
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(2);
  });
});
