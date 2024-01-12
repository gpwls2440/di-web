// Dependency
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, memo } from 'react';

import { CheckType } from '@interface/common';
import { useChecks } from '@hooks/useChecks';

import Checkbox from '@components/atoms/CheckBox';

interface SectorsData {
  name: string;
  id: string;
}

interface chaneValues {
  parentId: string;
  checkboxes: CheckType;
}

interface Sectors {
  data?: SectorsData[];
  checkboxData: CheckType;
  parentId: string;
  onChange?: (values: chaneValues) => void;
}

export default memo(function Sectors(props: Sectors) {
  const { data = [], checkboxData, parentId, onChange } = props;

  const { handleDirectChecked, checkboxes: sectorsCheckboxes } =
    useChecks(checkboxData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    handleDirectChecked(value, !!checked);
    onChange?.({
      parentId,
      checkboxes: {
        ...sectorsCheckboxes,
        [value]: !!checked,
      } as CheckType,
    });
  };

  return (
    <ul>
      {data?.map((industry) => {
        return (
          <li key={uuidv4()}>
            <Checkbox
              onChange={handleChange}
              id={industry.id}
              label={industry.name}
              value={industry.id}
              defaultChecked={sectorsCheckboxes[industry.id]}
            />
          </li>
        );
      })}
    </ul>
  );
});
