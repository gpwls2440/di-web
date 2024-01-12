/**
 * Atoms > PercentText
 */

// Dependency
import dayjs from 'dayjs';

interface DateText {
  startDate?: number;
  endDate?: number;
  className?: string;
}

export default function DateText(props: DateText) {
  const { startDate, endDate, className = '' } = props;

  return (
    <span className={className}>
      {startDate && dayjs(startDate).format('YYYY/MM/DD')}
      {endDate && `~${dayjs(endDate).format('YYYY/MM/DD')}`}
    </span>
  );
}
