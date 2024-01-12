// Dependency
import { Fragment, memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useModal } from '@hooks/useModal';

// Components
import InvestmentMethod from '@components/strategies/investmentMethod/InvestmentMethod';
import Card from '@components/molecules/Card';

// Types
import { ThemeStrategies } from '@hooks/readymades/useFetchThemeStrategies';

interface ThemeStrategiesList {
  data: ThemeStrategies[][];
}

export default memo(function List(props: ThemeStrategiesList) {
  const { data } = props;
  const { openModal } = useModal();

  const handleClick = (role: string, strategyId: string) => {
    if (role === 'select') {
      openModal({
        name: '전략 선택',
        children: (
          <InvestmentMethod strategyId={strategyId} strategyType='theme' />
        ),
      });
    }
  };

  return (
    <>
      <div className='theme-card-list'>
        {data?.map((item) => {
          return item.map((list) => {
            return (
              <div key={uuidv4()}>
                <Card
                  id={list.id}
                  title={list.name}
                  description={list.description}
                  month3={list.month3}
                  onClick={handleClick}
                />
              </div>
            );
          });
        })}
      </div>

      {data?.map((item) => {
        return (
          <Fragment key={uuidv4()}>
            {!item.length && (
              <div className='no-data'>
                <img src='/svg/ico-no-data.svg' alt='검색결과가 없습니다.' />
                <p>검색결과가 없습니다.</p>
              </div>
            )}
          </Fragment>
        );
      })}
    </>
  );
});
