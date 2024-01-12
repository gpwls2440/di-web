// Dependency
import { memo, useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { countriesdAtom } from '@jotai/common';
import { SECTOR_STRATEGIES_TAB } from '@constants/strategies';

// Components
import Button from '@components/atoms/Button';
import UniversePresets from '@components/strategies/sectorStrategies/UniversePresets';

export default memo(function SectorStrategiesTab() {
  const [countries] = useAtom(countriesdAtom);
  const [type, setType] = useState<'representative' | 'listed' | 'usa'>(
    'representative',
  );

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    const target = e?.currentTarget?.dataset;

    switch (target?.role) {
      case 'representative':
        setType('representative');
        break;
      case 'listed':
        setType('listed');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (countries === 'USA') {
      setType('usa');
      return;
    }

    if (countries === 'DOMESTIC') {
      setType('representative');
    }
  }, [countries]);

  return (
    <div className='sector-strategies-tab'>
      {countries === 'DOMESTIC' && (
        <>
          {SECTOR_STRATEGIES_TAB.map((item) => {
            return (
              <Button
                key={item.id}
                className={`tab-style ${type === item.id ? 'active' : ''}`}
                data-role={item.id}
                onClick={handleClick}>
                {item.title}
              </Button>
            );
          })}
        </>
      )}
      <UniversePresets type={type} />
    </div>
  );
});
