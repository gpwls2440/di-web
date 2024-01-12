// Dependency
import {
  Fragment,
  useEffect,
  useState,
  memo,
  useMemo,
  useCallback,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useChecks } from '@hooks/useChecks';

// Components
import Title from '@components/atoms/Title';
import Disclosure from '@components/atoms/Disclosure';
import Checkbox from '@components/atoms/CheckBox';
import Box from '@components/atoms/Box';
import Badge from '@components/atoms/Badge';
import Sectors from '@components/sectors/Sectors';

// types
import { CheckType } from '@interface/common';
import { SectorsChecks, Sector } from '@interface/sectors';

import './sectors.css';
import Button from '@components/atoms/Button';

interface chaneValues {
  parentId: string;
  checkboxes: CheckType;
}

interface SectorsListChanges {
  data: SectorsChecks[];
  count: number;
}

interface SectorsList {
  data: SectorsChecks[];
  onChange?: (onChangeValue: SectorsListChanges) => void;
}

export default memo(function SectorsList(props: SectorsList) {
  const { data = [], onChange } = props;
  const [sectorsChecksListData, setSectorsChecksListData] =
    useState<SectorsChecks[]>(data);
  const [count, setCount] = useState<number>(0);

  const getSelectedLength = (item: CheckType) => {
    return Object.values(item).filter((item) => item === true).length;
  };

  const sectorsData = useMemo(() => {
    return data.reduce((acc, item) => {
      const { id, sectors } = item;
      return { ...acc, [`P-${id}`]: sectors[id] };
    }, {});
  }, [data]);

  const {
    checkboxes,
    setCheckboxesStatus,
    handleDirectAllChecked,
    isAllChecked,
  } = useChecks(sectorsData);

  const handleAllChange = () => {
    const newArr = JSON.parse(JSON.stringify(sectorsChecksListData));
    const checkboxValues = newArr.map((item: SectorsChecks) => {
      const newChildrenChecks = Object.keys(item?.childrenChecks).reduce(
        (acc, value) => ({ ...acc, [value]: !isAllChecked }),
        {},
      );

      return {
        ...item,
        childrenChecks: newChildrenChecks,
        children: item.children.map((child) => {
          return {
            ...child,
            isChecked: !isAllChecked,
          };
        }),
      };
    });

    setSectorsChecksListData(checkboxValues);
    handleDirectAllChecked(!isAllChecked);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const self = value.split('P-')[1];
    const newArr = JSON.parse(JSON.stringify(sectorsChecksListData));
    const index = newArr.findIndex((item: SectorsChecks) => {
      return `${item.id}` === `${self}`;
    });
    const childrenChecksArr = Object.keys(newArr[index].childrenChecks);
    const newChildrenChecks = childrenChecksArr.reduce(
      (acc, value) => ({ ...acc, [value]: !!checked }),
      {},
    );

    const childrenData = newArr[index].children.map((item: SectorsChecks) => {
      return {
        ...item,
        isChecked: !!checked,
      };
    });

    newArr[index].sectors = {
      [self]: !!checked,
    };
    newArr[index].selected = checked ? childrenChecksArr.length : 0;
    newArr[index].childrenChecks = newChildrenChecks;
    newArr[index].children = childrenData;

    setSectorsChecksListData(newArr);
  };

  const handleSectorsChange = (values: chaneValues) => {
    const { parentId } = values;

    const checkboxValues = Object.values(values.checkboxes);
    const { length } = checkboxValues.filter((item) => item === true);
    const isCheckAll = length === checkboxValues.length;
    const parent = parentId.split('P-')[1];
    const newArr = JSON.parse(JSON.stringify(sectorsChecksListData));

    const parentIndex = newArr.findIndex((item: SectorsChecks) => {
      return `${item.id}` === `${parent}`;
    });

    const childrenData = newArr[parentIndex].children.map((item: Sector) => {
      return {
        ...item,
        isChecked: values.checkboxes[item.id],
      };
    });

    newArr[parentIndex].childrenChecks = values.checkboxes;
    newArr[parentIndex].children = childrenData;
    newArr[parentIndex].sectors = {
      [parent]: length === checkboxValues.length,
    };

    setCheckboxesStatus({
      ...checkboxes,
      [parentId]: isCheckAll,
    });

    setSectorsChecksListData(newArr);
  };

  useEffect(() => {
    const test = sectorsChecksListData.map((item) => {
      return {
        [`P-${item.id}`]:
          item.children.filter((child) => {
            return child.isChecked === true;
          }).length === item.childrenLength,
      };
    });

    const mergedObject = test.reduce((acc, obj) => {
      return { ...acc, ...obj };
    }, {});

    setCheckboxesStatus(mergedObject);

    const checkedCount = sectorsChecksListData
      .map((item) => {
        return Object.values(item.childrenChecks).filter(
          (item) => item === true,
        ).length;
      })
      .reduce((a, b) => a + b);
    setCount(checkedCount);
    onChange?.({
      data: sectorsChecksListData,
      count: checkedCount,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectorsChecksListData]);

  const selectedData = useMemo(() => {
    return sectorsChecksListData
      .map((item) => {
        return {
          name: item.name,
          id: item.id,
          childrenLength: item.children.length,
          children: item.children.filter((child) => {
            return child?.isChecked === true;
          }),
        };
      })
      .filter((item) => {
        return item.children.length !== 0;
      });
  }, [sectorsChecksListData]);

  const handleClick = useCallback(
    (e?: React.MouseEvent<HTMLButtonElement>) => {
      e?.preventDefault();
      if (e?.currentTarget) {
        const { id, parentId } = e.currentTarget.dataset;
        const parentIndex = sectorsChecksListData.findIndex(
          (item) => item.id === parentId,
        );
        const newArr = JSON.parse(JSON.stringify(sectorsChecksListData));
        const childIndex = newArr[parentIndex].children.findIndex(
          (item: SectorsChecks) => item.id === id,
        );
        newArr[parentIndex].childrenChecks[id ?? ''] = false;
        newArr[parentIndex].children[childIndex].isChecked = false;

        setSectorsChecksListData(newArr);
        // setCheckboxesStatus(newCheckesData);
      }
    },
    [sectorsChecksListData],
  );

  const handleReset = () => {
    const newArr = JSON.parse(JSON.stringify(sectorsChecksListData));
    const resetValues = newArr.map((item: SectorsChecks) => {
      const newChildrenChecks = Object.keys(item?.childrenChecks).reduce(
        (acc, value) => ({ ...acc, [value]: false }),
        {},
      );

      return {
        ...item,
        childrenChecks: newChildrenChecks,
        children: item.children.map((child) => {
          return {
            ...child,
            isChecked: false,
          };
        }),
      };
    });
    setSectorsChecksListData(resetValues);
  };

  return (
    <div className='sectors'>
      <ul>
        <li>
          <Title title='전체 항목' />
          <div className='sectors-item-wrap'>
            <Box className='sectors-item'>
              <Checkbox
                onChange={handleAllChange}
                value='P-ALL'
                checked={
                  Object.values(checkboxes).filter((item) => item === false)
                    .length === 0
                }
                label={
                  <Title
                    titleWrapClass='sectors-head'
                    titleClass='sectors-title'
                    title={
                      <>
                        섹터 전체선택
                        <Badge label={count} />
                      </>
                    }
                    subTitle='모든 섹터와 산업을 선택합니다.'
                  />
                }
                id='P-All'
              />
            </Box>
          </div>
          {sectorsChecksListData?.map((item) => {
            return (
              <Fragment key={`P-${item.id}`}>
                {item.children.length > 1 && (
                  <Disclosure>
                    <Disclosure.Head>
                      <Checkbox
                        onChange={handleChange}
                        value={`P-${item.id}`}
                        checked={checkboxes[`P-${item.id}`]}
                        label={
                          <Title
                            titleWrapClass='sectors-head'
                            titleClass='sectors-title'
                            title={
                              <>
                                {item.name}
                                <Badge label={item.childrenLength} />
                                {getSelectedLength(item.childrenChecks) > 0 && (
                                  <Badge
                                    label={`${getSelectedLength(
                                      item.childrenChecks,
                                    )}개 선택`}
                                    backgroundColor='#5B86D4'
                                    frontColor='#fff'
                                  />
                                )}
                              </>
                            }
                            subTitle={item.description}
                          />
                        }
                        id={`P-${item.id}`}
                      />
                    </Disclosure.Head>
                    <Disclosure.Content bgColor='gray'>
                      <Sectors
                        checkboxData={item.childrenChecks}
                        data={item.children}
                        parentId={`P-${item.id}`}
                        onChange={handleSectorsChange}
                      />
                    </Disclosure.Content>
                  </Disclosure>
                )}
                {item.children.length === 1 && (
                  <div className='sectors-item-wrap'>
                    <Box className='sectors-item'>
                      <Checkbox
                        onChange={handleChange}
                        value={`P-${item.id}`}
                        checked={checkboxes[`P-${item.id}`]}
                        label={
                          <Title
                            titleWrapClass='sectors-head'
                            titleClass='sectors-title'
                            title={item.name}
                            subTitle={item.description}
                          />
                        }
                        id={`P-${item.id}`}
                      />
                    </Box>
                  </div>
                )}
              </Fragment>
            );
          })}
        </li>
        <li>
          <div className='selected-wrap'>
            <Title title='선택 항목' />
            <div className='selected'>
              <strong>{count}</strong>
              <span className='selected-length'>개 선택됨</span>
              <Button onClick={handleReset}>
                <img src='/svg/reset.svg' alt='초기화' />
                초기화
              </Button>
            </div>
          </div>
          {selectedData.length === 0 && (
            <div className='empty-wrap'>
              <div className='empty'>
                <img src='/svg/warning.svg' alt='주의' />
                <div className='main'>선택된 팩터가 없습니다.</div>
                <div className='sub'>최소 한개 이상의 지표를 선택해주세요.</div>
              </div>
            </div>
          )}

          {selectedData?.map((item) => {
            return (
              <Fragment key={uuidv4()}>
                {item.children.map((child) => {
                  return (
                    <Box className='selected' key={child.id}>
                      <span>
                        <img src='/svg/selected.svg' alt='선택됨' />
                        {item.childrenLength > 1
                          ? `${item.name} > ${child.name}`
                          : item.name}
                      </span>
                      <Button
                        data-parent-id={item.id}
                        data-id={child.id}
                        onClick={handleClick}>
                        <img src='/svg/button-x.svg' alt='삭제' />
                      </Button>
                    </Box>
                  );
                })}
              </Fragment>
            );
          })}
        </li>
      </ul>
    </div>
  );
});
