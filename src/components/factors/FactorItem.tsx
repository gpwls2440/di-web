import CheckBox from '@components/atoms/CheckBox';
import IconToolTip from '@components/atoms/IconTooltip';
import Title from '@components/atoms/Title';
import { factorCheckedAtom } from '@jotai/factor';
import { useAtom } from 'jotai';
import { ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface FactorItem {
  cmName: string | undefined;
  displayName: string | undefined;
  description: string | null | undefined;
  index: number;
}

export default function FactorItem(props: FactorItem) {
  const { cmName, displayName, description, index } = props;
  const [factorChecked, setFactorChecked] = useAtom(factorCheckedAtom);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    const { value: cnName, checked } = e.target;
    setFactorChecked({ ...factorChecked, [cnName]: !!checked });
  };
  return (
    <CheckBox
      onChange={handleChange}
      checkBoxWrapClassName='mgt16 bottom-line'
      key={uuidv4()}
      value={`cm-${cmName}`}
      id={`cm-${cmName}` ?? ''}
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
}
