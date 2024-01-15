import CheckBox from '@components/atoms/CheckBox';
import IconToolTip from '@components/atoms/IconTooltip';
import Title from '@components/atoms/Title';
import { useChecks } from '@hooks/useChecks';
import { CheckType } from '@interface/common';
import React, { ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface FactorItem {
  cmName: string | undefined;
  displayName: string | undefined;
  description: string | null | undefined;
  index: number;
  checkBoxesData: CheckType;
}

export default React.memo(function FactorItem(props: FactorItem) {
  const { cmName, displayName, description, index, checkBoxesData } = props;

  const { checkboxes, handleDirectChecked } = useChecks(checkBoxesData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const { value: cnName, checked } = e.target;

    handleDirectChecked(cnName, !!checked);
  };

  return (
    <CheckBox
      onChange={handleChange}
      checkBoxWrapClassName='mgt16 bottom-line'
      key={uuidv4()}
      value={cmName}
      id={`${cmName}` ?? ''}
      defaultChecked={checkboxes[cmName ?? '']}
      label={
        <Title
          titleClass='sectors-title'
          subTitleWrapClass='subtitle-wrap'
          subTitleClass='w400'
          title={
            <>
              ({index + 1}) {displayName}
              <IconToolTip description='설명' />
            </>
          }
          imgSrc='/image/factor/211.svg'
          subTitle={description}
        />
      }
    />
  );
});
