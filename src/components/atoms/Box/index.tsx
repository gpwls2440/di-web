/**
 * Atoms > Box
 */

// Dependency
import { memo } from 'react';

// css
import './box.css';

interface Box {
  className?: string;
  padding?: string;
  children: React.ReactNode;
}
export default memo(function Box(props: Box) {
  const { className = '', children, padding = '16px 16px 16px 16px' } = props;

  return (
    <div
      className={`box ${className}`}
      style={{
        padding,
      }}>
      {children}
    </div>
  );
});
