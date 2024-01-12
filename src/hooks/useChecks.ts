// dependency
import { ChangeEvent, useEffect, useMemo, useState } from 'react';

// interface
import type { CheckType } from '@interface/common';

type UseChecksReturns = {
  checkboxes: CheckType;
  isAllChecked: boolean;
  values: string[];
  handleChecked: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAllChecked: (e: ChangeEvent<HTMLInputElement>) => void;
  setCheckboxesStatus: (data: CheckType) => void;
  handleDirectChecked: (value: string, checked: boolean) => void;
  handleDirectAllChecked: (checked: boolean) => void;
};

/**
 * @description 전체 선택 여부 확인
 * @param {CheckType} items checkbox 객체
 * @returns {boolean}
 */
function getIsAllChecked(items: CheckType) {
  if (Object.keys(items).length === 0) return false;

  return Object.values(items).every((checked) => checked);
}

/**
 * @description 체크박스 그룹의 상태를 관리한다.
 * @param {CheckType} data 오브젝트 형식의 개별 체크박스 value 체크여부
 * @returns {UseChecksReturns}
 */

export function useChecks(data: CheckType): UseChecksReturns {
  const [checkboxes, setCheckboxes] = useState<CheckType>(data);

  const isAllChecked = useMemo(() => {
    return getIsAllChecked(checkboxes);
  }, [checkboxes]);

  const handleChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    toggle(value, checked);
  };

  const handleAllChecked = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;

    allToggle(checked);
  };

  const setCheckboxesStatus = (data: CheckType) => {
    setCheckboxes(data);
  };

  const handleDirectChecked = (value: string, checked: boolean) => {
    toggle(value, checked);
  };

  const handleDirectAllChecked = (checked: boolean) => {
    allToggle(checked);
  };

  const values = useMemo(
    () => Object.keys(checkboxes).filter((checkbox) => checkboxes[checkbox]),
    [checkboxes],
  );

  function toggle(value: string, checked: boolean) {
    setCheckboxes((prev) => {
      const newData = { ...prev, [value]: checked };

      return newData;
    });
  }

  function allToggle(checked: boolean) {
    setCheckboxes((prev) => {
      const newData = Object.keys(prev).reduce(
        (previousValue, key) => ({ ...previousValue, [key]: checked }),
        {
          ...prev,
        },
      );

      return newData;
    });
  }

  useEffect(() => {
    setCheckboxes(data);
  }, [data]);

  return {
    checkboxes,
    isAllChecked,
    values,
    handleChecked,
    handleAllChecked,
    setCheckboxesStatus,
    handleDirectChecked,
    handleDirectAllChecked,
  };
}
