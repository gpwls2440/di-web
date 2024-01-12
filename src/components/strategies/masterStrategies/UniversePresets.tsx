// Dependency
import { useGetUniversePresetsQuery } from '@services/base';

export default function UniversePresets() {
  const { data } = useGetUniversePresetsQuery();

  return (
    <>
      <ul className='pd20'>
        {data?.universePresets?.universePresets?.map((item) => {
          return (
            <li key={item?.name}>
              <div className='radio-item'>
                <input name='radio' id={item?.name} type='radio' />
                <label htmlFor={item?.name}>
                  <p>{item?.displayName}</p>
                  <p>{item?.description}</p>
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
