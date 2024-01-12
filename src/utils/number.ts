const thousandUnits = ['', '만', '억', '조', '경', '해'];

function chunkAtEnd(value: string = '', n: number = 1) {
  const result = [];

  for (let end = value.length; end > 0; end -= n) {
    result.push(value.substring(Math.max(0, end - n), end));
  }

  return result;
}

/**
 * formatNumber
 * @param {number | string } number number
 * @returns {string} 변환된 한글 숫자
 */
export function formatNumber(number: number | string): string {
  return chunkAtEnd(String(number), 4)
    .reduce((acc, item, index) => {
      const unit = thousandUnits[index] ?? '';

      if (!Number(item)) {
        return acc;
      }

      return `${Number(item)}${unit} ${acc}`;
    }, '')
    .trim();
}
