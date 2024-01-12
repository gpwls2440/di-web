/**
 * 투자 기준
 */

// Dependency
import { v4 as uuidv4 } from 'uuid';
import { useState, useMemo, useEffect, ChangeEvent } from 'react';
import { useFetchStyleFactors } from '@hooks/useFetchStyleFactors';
import { useChecks } from '@hooks/useChecks';
import { ObjectFilterValues } from '@utils/object';
import { log } from '@utils/common';

// Components
import Title from '@components/atoms/Title';
import Box from '@components/atoms/Box';
import CheckBox from '@components/atoms/CheckBox';
import StyleFactor from '@components/factors/StyleFactor';

// types
import { StyleFactorItem } from '@services/base';

export default function InvestmentStyle() {
  const [selected, setSelected] = useState<StyleFactorItem[]>([]);
  const { data, isLoading, high, middle, low } = useFetchStyleFactors();

  const checkboxData =
    useMemo(() => {
      return data?.reduce((acc, item) => {
        return { ...acc, [`${item?.cmName}`]: false };
      }, {});
    }, [data]) ?? {};

  const { handleDirectChecked, checkboxes } = useChecks(checkboxData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    handleDirectChecked(value, !!checked);
  };

  const handleStyleFactorChange = (id: string, value: number) => {
    log('id', id, 'value', value);
  };

  useEffect(() => {
    if (Object.keys(checkboxes).length) {
      const checkedArr = [...Object.keys(ObjectFilterValues(checkboxes, true))];
      const dataArr = data?.filter((item) =>
        checkedArr.includes(item?.cmName ?? ''),
      ) as StyleFactorItem[];

      setSelected(dataArr);
    }
  }, [checkboxes, data]);

  return (
    <>
      <div className='investment-style'>
        <ul>
          <li>
            <Title title='전체 항목' titleWrapClass='mgt20' />
            {!isLoading && (
              <>
                {data?.map((item) => {
                  return (
                    <Box key={uuidv4()}>
                      <CheckBox
                        onChange={handleChange}
                        label={
                          <Title
                            title={item?.style?.name}
                            subTitle={item?.style?.description}
                          />
                        }
                        value={item?.cmName}
                        id={item?.cmName ?? ''}
                        defaultChecked={checkboxes[item?.cmName ?? '']}
                      />
                    </Box>
                  );
                })}
              </>
            )}
          </li>
          <li>
            <Title title='선택 항목' titleWrapClass='mgt20' />
            {selected.map((item) => {
              return (
                <StyleFactor
                  onChange={handleStyleFactorChange}
                  key={item.cmName}
                  id={item.cmName}
                  title={item.style?.name ?? ''}
                  description={item.style?.description ?? ''}
                  defalutValue={0}
                  high={high}
                  middle={middle}
                  low={low}
                />
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
}
