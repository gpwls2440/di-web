// Dependency
import { useFetchMasterStrategyDetail } from '@hooks/readymades/useFetchMasterStrategyDetail';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router';

export default function Detail() {
  const { strategyId } = useParams();
  const { data } = useFetchMasterStrategyDetail(strategyId as string);

  return (
    <>
      <div className='pd20'>
        <h2>{data.name}</h2>
        <h3
          style={{
            color: '#AAA',
          }}>
          {data.shortDescription}
        </h3>
        <div
          style={{
            marginTop: 20,
          }}>
          {data.description}
        </div>
      </div>
      <h3>상세 투자 전략</h3>
      <ul className='pd20'>
        {data?.masterFactors.map((item, index) => {
          return (
            <li key={uuidv4()}>
              {index + 1}. {item}
            </li>
          );
        })}
      </ul>
      <h3>{data.name} 출처</h3>
      <ul className='pd20'>
        {data?.masterSrc.map((item) => {
          return <li key={uuidv4()}>- {item}</li>;
        })}
      </ul>
    </>
  );
}
