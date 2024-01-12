import { describe, test, expect } from 'vitest';
import { approximate } from './chart';

describe('approximate - 타겟 숫자를 배열의 숫자들과 비교하여 제일 근사치와 인덱스를 반환한다.', () => {
  test('[1.1, 2, 2.1, 2.2, 2.234]', () => {
    const arr = [1.1, 2, 2.1, 2.2, 2.234];
    const target = 2.05;
    expect(approximate(arr, target)).toEqual({
      index: 1,
      value: 2,
    });
  });
  test('[-1, -0.8, -0.75, -0.72, 1, 1.1, 1.123, 1.456]', () => {
    const arr = [-1, -0.8, -0.75, -0.72, 1, 1.1, 1.123, 1.456];
    const target = -0.74;
    expect(approximate(arr, target)).toEqual({
      index: 2,
      value: -0.75,
    });
  });
});
