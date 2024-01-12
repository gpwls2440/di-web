export function approximate(
  arr: number[],
  target: number,
): {
  value: number;
  index: number;
} {
  if (!target) {
    return {
      value: 0,
      index: 0,
    };
  }

  const value = arr.reduce((prev, curr) => {
    return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
  });
  return {
    value,
    index: arr.indexOf(value),
  };
}
