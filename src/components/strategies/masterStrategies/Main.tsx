// Dependency
import { useInput } from '@kbam-frontend/hooks';
import { useFetchMasterStrategies } from '@hooks/readymades/useFetchMasterStrategies';

// Components
import Button from '@components/atoms/Button';
import Input from '@components/atoms/Input';
import MasterStrategiesList from '@components/strategies/masterStrategies/List';

export default function Main() {
  const [value] = useInput();
  const { data, isLoading, fetchNextPage, pageInfo } = useFetchMasterStrategies(
    {
      keyword: value.debouncedValue.toString(),
    },
  );

  const handleClcik = () => {
    fetchNextPage({
      pageParam: {
        after: pageInfo.endCursor,
      },
    });
  };

  return (
    <div className='pd20'>
      <h1>대가의 전략</h1>

      {!isLoading && (
        <>
          <div
            style={{
              marginTop: 10,
              marginBottom: 10,
            }}>
            <Input
              style={{
                width: 400,
                marginBottom: 20,
              }}
              value={value.value}
              onChange={value.onChange}
              placeholder='월가의 영웅을 검색해보세요!'
            />
            <MasterStrategiesList data={data} />
            {pageInfo.hasNextPage && (
              <Button onClick={handleClcik}>다음</Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
