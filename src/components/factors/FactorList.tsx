import { Fragment, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Title from '@components/atoms/Title';
import Badge from '@components/atoms/Badge';
import Disclosure from '@components/atoms/Disclosure';

import './factor.css';
import { createCmName } from '@hooks/useCreateCmName';
import { useAtom } from 'jotai';
import { factorCheckedAtom } from '@jotai/factor';
import { GetFactorsQuery } from '@services/base';
import FactorItem from './FactorItem';

interface FactorList {
  data: GetFactorsQuery | undefined;
}

export default function FactorsList(props: FactorList) {
  const { data } = props;
  const factorsAndStyle = data?.factors?.factors;

  const transformedArray = factorsAndStyle?.map((item) => ({
    factorStyle: {
      description: item?.style?.description,
      name: item?.style?.name,
      style: item?.style?.style,
      factors: item?.factors,
    },
  }));

  const [cmNameObj, setCmNameObj] = useAtom(factorCheckedAtom);

  useEffect(() => {
    const initialCmNameObj = createCmName(data);
    setCmNameObj(initialCmNameObj);
  }, [data, setCmNameObj]);

  return (
    <li>
      <Title title='전체 항목' />
      {transformedArray &&
        transformedArray.map((item) => {
          const seletedLength = item?.factorStyle?.factors?.filter((item) => {
            console.log(item?.cmName);
          });
          return (
            <Disclosure key={uuidv4()}>
              <Disclosure.Head>
                <Title
                  titleWrapClass='sectors-head'
                  titleClass='sectors-title'
                  title={
                    <>
                      {item.factorStyle.name}
                      <Badge label={item.factorStyle.factors?.length} />

                      <Badge
                        label={`${seletedLength}개 선택`}
                        backgroundColor='#5B86D4'
                        frontColor='#fff'
                      />
                    </>
                  }
                  subTitle={item?.factorStyle?.description}
                />
              </Disclosure.Head>
              <Disclosure.Content bgColor='white'>
                {item?.factorStyle.factors &&
                  item?.factorStyle.factors.map((factor, index) => (
                    <Fragment key={factor?.cmName}>
                      <FactorItem
                        displayName={factor?.displayName}
                        cmName={factor?.cmName}
                        description={factor?.description}
                        index={index}
                      />
                    </Fragment>
                  ))}
              </Disclosure.Content>
            </Disclosure>
          );
        })}
    </li>
  );
}
