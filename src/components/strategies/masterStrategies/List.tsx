// Dependency
import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '@components/atoms/Button';

// Types
import { MasterStrategies } from '@hooks/readymades/useFetchMasterStrategies';

interface MasterStrategiesList {
  data: MasterStrategies[][];
}

export default memo(function List(props: MasterStrategiesList) {
  const { data } = props;
  const navigate = useNavigate();

  const handleClick = (id: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    const data = e?.currentTarget?.dataset;
    const buttonType = data?.role;

    if (buttonType === 'detail') {
      navigate(`/strategies/master/detail/${id}`);
    }

    if (buttonType === 'edit') {
      navigate(`/strategies/master/edit/${id}/1`);
    }
  };

  return (
    <ul>
      {data?.map((item) => {
        return item.map((list) => {
          return (
            <li
              key={uuidv4()}
              style={{
                padding: '20px',
                border: '1px solid #333',
                marginBottom: 20,
                borderRadius: 5,
              }}>
              <h2>{list.name}</h2>
              <div
                style={{
                  marginTop: 20,
                }}>
                {list.shortDescription}
              </div>
              <Button
                data-role='detail'
                onClick={(e) => handleClick(list.id, e)}>
                전략 상세
              </Button>
              <Button data-role='edit' onClick={(e) => handleClick(list.id, e)}>
                전략 선택
              </Button>
            </li>
          );
        });
      })}
    </ul>
  );
});
