// Dependency
import { ChangeEvent, useState } from 'react';
import { useInput } from '@kbam-frontend/hooks';
import { useFetchDiyStrategies } from '@hooks/readymades/useFetchDiyStrategies';

// Components
import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import DiyStrategiesList from '@components/strategies/diyStrategies/List';

// types
import {
  StrategiesOrderMethod,
  StrategiesOrderPeriodReturn,
} from '@interface/strategies';

export default function Main() {
  const [orderMethod, setOrderMethod] =
    useState<StrategiesOrderMethod>('CUMULATIVE');
  const [orderPeriodReturn, setOrderPeriodReturn] =
    useState<StrategiesOrderPeriodReturn>('MONTH_3');
  const [value] = useInput();
  const { data, isLoading, fetchNextPage, pageInfo } = useFetchDiyStrategies({
    keyword: value.debouncedValue.toString(),
    orderMethod,
    orderPeriodReturn,
  });

  const handleClcik = () => {
    fetchNextPage({
      pageParam: {
        after: pageInfo.endCursor,
      },
    });
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setOrderMethod(e.target.value as StrategiesOrderMethod);
    }
  };

  const handleChangeOrderPeriodReturn = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setOrderPeriodReturn(e.target.value as StrategiesOrderPeriodReturn);
    }
  };

  return (
    <div className='pd20'>
      <h1>나만의 전략</h1>

      {!isLoading && (
        <>
          <div
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}>
            <select
              value={orderMethod}
              onChange={handleChange}
              style={{
                marginRight: 10,
              }}>
              <option value='CUMULATIVE'>수익률 높은 순</option>
              <option value='CUMULATIVE_ASC'>수익률 낮은 순</option>
              <option value='NAME'>가나다 순</option>
            </select>
            <select
              value={orderPeriodReturn}
              onChange={handleChangeOrderPeriodReturn}
              style={{
                marginRight: 10,
              }}>
              <option value='MONTH_1'>최근 1개월</option>
              <option value='MONTH_3'>최근 3개월</option>
              <option value='MONTH_6'>최근 6개월</option>
            </select>
            <Input
              style={{
                width: 400,
                marginBottom: 20,
              }}
              value={value.value}
              onChange={value.onChange}
              placeholder='코스닥을 검색해보세요!'
            />
            <DiyStrategiesList data={data} />
            {pageInfo.hasNextPage && (
              <Button onClick={handleClcik}>다음</Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
