import { describe, test, expect } from 'vitest';
import { ObjectFilterValues } from './object';

describe('ObjectFilterValues - 타겟 Object를 대상 Value로 필터한다.', () => {
  test('{ a: true, b: false, c: true, d: false }', () => {
    const obj = { a: true, b: false, c: true, d: false };
    const target = false;
    expect(ObjectFilterValues(obj, target)).toEqual({
      b: false,
      d: false,
    });
  });
  test(`{ a: 1, b: '1', c: 2, d: '2', f: '1', g: 1 }`, () => {
    const obj = { a: 1, b: '1', c: 2, d: '2', f: '1', g: 1 };
    const target = 1;
    expect(ObjectFilterValues(obj, target)).toEqual({
      a: 1,
      g: 1,
    });
  });
  test('{ a: 1, b: false, c: 3, d: [1, 2, 3] }', () => {
    const obj = { a: 1, b: false, c: 3, d: [1, 2, 3] };
    const target = [1, 2, 3];
    expect(ObjectFilterValues(obj, target)).toEqual({
      d: [1, 2, 3],
    });
  });
  test('{ a: 1, b: false, c: 3, f: { g: true, a: false }, g: { g: true, a: false } }', () => {
    const obj = {
      a: 1,
      b: false,
      c: 3,
      f: { g: true, a: false },
      g: { g: true, a: false },
    };
    const target = { g: true, a: false };
    expect(ObjectFilterValues(obj, target)).toEqual({
      f: { g: true, a: false },
      g: { g: true, a: false },
    });
  });
});
