/**
 * Atoms > PercentText
 */

// Dependency
import { numberToPercent } from '@kbam-frontend/madebyus';

interface PercentText {
  value: number;
  minusColor?: string;
  plusColor?: string;
  isSymbols?: boolean;
}

export default function PercentText(props: PercentText) {
  const {
    value,
    minusColor = '#2859d1',
    plusColor = '#de092f',
    isSymbols = false,
  } = props;
  const isMinus = value < 0;

  if (!value) {
    return <span>-</span>;
  }

  return (
    <span
      className='percent-text'
      style={{ color: isMinus ? minusColor : plusColor }}>
      {isSymbols && value > 0 && '+'}
      {numberToPercent(value, true, 2)}
    </span>
  );
}
