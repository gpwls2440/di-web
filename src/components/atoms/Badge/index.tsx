/**
 * Atoms > Badge
 */

// css
import './badge.css';

interface Badge {
  label: string | React.ReactNode;
  className?: string;
  backgroundColor?: string;
  frontColor?: string;
}

export default function Badge(props: Badge) {
  const {
    label,
    className,
    backgroundColor = '#5177bc1a',
    frontColor = '#5177BC',
  } = props;

  return (
    <div
      className={`badge ${className}`}
      style={{
        backgroundColor,
      }}>
      <span
        style={{
          color: frontColor,
        }}>
        {label}
      </span>
    </div>
  );
}
