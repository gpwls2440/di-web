// Dependency
import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
import PercentText from '@components/atoms/PercentText';

// Types
import { DiyStrategies } from '@hooks/readymades/useFetchDiyStrategies';

interface DiyStrategiesList {
  data: DiyStrategies[][];
}

export default memo(function List(props: DiyStrategiesList) {
  const { data } = props;

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
                {list.description}
              </div>
              <dl
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: 20,
                }}>
                <dt>3개월 수익률</dt>
                <dd>
                  {list.id}
                  <PercentText value={list.month3} />
                </dd>
              </dl>
            </li>
          );
        });
      })}
    </ul>
  );
});
