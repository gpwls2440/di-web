// Dependency

// Components
import Button from '@components/atoms/Button';

// css
import './ico-tooltip.css';

// svg
import IcoInfo from '@svg/ico-info.svg?react';

interface IconToolTip {
  description: string;
}

export default function IconToolTip(props: IconToolTip) {
  const { description } = props;

  return (
    <Button
      onClick={(e) => e?.stopPropagation()}
      className='ico-tooltip'
      data-tooltip={description}
      data-tooltip-location='bottom'>
      <IcoInfo />
    </Button>
  );
}
