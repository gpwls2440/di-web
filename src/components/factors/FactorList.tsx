import { Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Title from '@components/atoms/Title';
import Badge from '@components/atoms/Badge';
import Disclosure from '@components/atoms/Disclosure';

import './factor.css';
import { convertFactor, createCmNameObj } from '@hooks/useFetchFactor';
import { GetFactorsQuery } from '@services/base';
import { useChecks } from '@hooks/useChecks';
import FactorItem from './FactorItem';

interface FactorList {
  data: GetFactorsQuery | undefined;
}

export default function FactorsList(props: FactorList) {
  const { data } = props;
  const factorsAndStyle = data?.factors?.factors;
  const { factorList } = convertFactor(factorsAndStyle);

  const initialCmNameObj = createCmNameObj(factorsAndStyle);
  const { checkboxes } = useChecks(initialCmNameObj);

  return (
    <li>
      <Title title='전체 항목' />
      {factorList.map((item) => {
        return (
          <Fragment key={uuidv4()}>
            <Disclosure key={uuidv4()}>
              <Disclosure.Head>
                <Title
                  titleWrapClass='sectors-head'
                  titleClass='sectors-title'
                  title={
                    <>
                      {item.text}
                      <Badge label={item.subs.length} />

                      <Badge
                        label='개 선택'
                        backgroundColor='#5B86D4'
                        frontColor='#fff'
                      />
                    </>
                  }
                  subTitle={item.desc}
                />
              </Disclosure.Head>
              <Disclosure.Content bgColor='white'>
                {item.subs.map((factor, index) => (
                  <Fragment key={uuidv4()}>
                    <FactorItem
                      displayName={factor.name}
                      cmName={factor.cmName}
                      description={factor.desc}
                      index={index}
                      checkBoxesData={checkboxes}
                    />
                  </Fragment>
                ))}
              </Disclosure.Content>
            </Disclosure>
          </Fragment>
        );
      })}
    </li>
  );
}
