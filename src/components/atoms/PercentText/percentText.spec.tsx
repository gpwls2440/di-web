import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import PercentText from '.';

describe('Atoms/PercentText', () => {
  it('PercentText 노출 테스트 소숫점 2자리', () => {
    const { getByText } = render(<PercentText value={0.11} />);
    expect(getByText(/11.00%/i)).toBeVisible();
  });
  it('PercentText 노출 테스트 소숫점 4자리', () => {
    const { getByText } = render(<PercentText value={0.1534} />);
    expect(getByText(/15.34%/i)).toBeVisible();
  });
  it('PercentText 노출 테스트 소숫점 5자리', () => {
    const { getByText } = render(<PercentText value={0.15345} />);
    expect(getByText(/15.35%/i)).toBeVisible();
  });
});
