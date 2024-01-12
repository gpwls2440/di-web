import Button from '@components/atoms/Button';
import { Dispatch, SetStateAction } from 'react';

interface StackBarChartPageNation {
  index: number;
  totalIndex: number;
  setPageNationIndex: Dispatch<SetStateAction<number>>;
}

export default function StackBarChartPageNation(
  props: StackBarChartPageNation,
) {
  const { index, totalIndex, setPageNationIndex } = props;

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const data = e?.currentTarget?.dataset;
    const buttonType = data?.role;

    if (buttonType === 'next') {
      setPageNationIndex(index < totalIndex - 1 ? index + 1 : totalIndex - 1);
    }

    if (buttonType === 'prev') {
      setPageNationIndex(index > 0 ? index - 1 : 0);
    }
  };

  return (
    <div className='stack-bar-chart-pagenation'>
      <div className='stack-bar-chart-pagenation-num'>
        <span>{index + 1}</span>
        <span>/</span>
        <span>{totalIndex}</span>
      </div>
      <div>
        <Button onClick={handleClick} data-role='prev'>
          <img src='/svg/page-prev.svg' alt='이전' />
        </Button>
        <Button onClick={handleClick} data-role='next'>
          <img src='/svg/page-next.svg' alt='다음' />
        </Button>
      </div>
    </div>
  );
}
