/**
 * Atoms > CircleIcon
 */

// css
import './circleicon.css';

interface CircleIcon {
  bgColor: string;
}

export default function CircleIcon(props: CircleIcon) {
  const { bgColor } = props;

  return (
    <div
      className='circle-icon'
      style={{
        backgroundColor: bgColor,
      }}
    />
  );
}
