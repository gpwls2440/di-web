// Dependency
import { memo, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFetchUniversePresets } from '@hooks/useFetchUniversePresets';
import { useAtom } from 'jotai';
import { sectorVariablesAtom } from '@jotai/strategies';

// Components
import Button from '@components/atoms/Button';

// types
import { UniversePresets as UniversePresetsType } from '@interface/strategies';

interface UniversePresets {
  type: 'representative' | 'listed' | 'usa';
}

export default memo(function UniversePresets(props: UniversePresets) {
  const { type } = props;
  const [sectorVariables, setSectorVariables] = useAtom(sectorVariablesAtom);
  const { data, countries } = useFetchUniversePresets();
  const list = data[countries === 'USA' ? 'usa' : type];

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const target = e?.currentTarget?.dataset;

    if (target?.name) {
      setSectorVariables({
        ...sectorVariables,
        universePreset: target?.name as UniversePresetsType,
      });
    }
  };

  useEffect(() => {
    if (list?.[0]?.name) {
      setSectorVariables({
        ...sectorVariables,
        universePreset: list?.[0]?.name as UniversePresetsType,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  return (
    <ul className='universe-presets'>
      {data?.[type]?.map((item) => {
        return (
          <li key={uuidv4()}>
            <Button
              className={`${
                sectorVariables.universePreset === item?.name ? 'active' : ''
              }`}
              data-role='universe'
              data-name={item.name}
              onClick={handleClick}>
              {item.displayName}
            </Button>
          </li>
        );
      })}
    </ul>
  );
});
