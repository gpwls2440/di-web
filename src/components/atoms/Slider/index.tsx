import RcSlider from 'rc-slider';

// css
import './slider.css';

interface Slider {
  value: number | number[];
  range?: boolean;
  min?: number;
  max?: number;
  trackColor?: string;
  railColor?: string;
  onChange: (value: number | number[]) => void;
}

export default function Slider(props: Slider) {
  const {
    value,
    range = false,
    min = 1,
    max = 7,
    trackColor = '#ddd',
    railColor = '#ffdc00',
    onChange = () => {},
  } = props;

  return (
    <div className='slider'>
      <RcSlider
        range={range}
        railStyle={{ backgroundColor: railColor }}
        trackStyle={{ backgroundColor: trackColor }}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
