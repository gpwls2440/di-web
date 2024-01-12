import { GetFactorsQuery } from '@services/base';

export const createCmName = (data: GetFactorsQuery | undefined) => {
  let cmNameObj = {};
  const factorsAndStyle = data?.factors?.factors;
  factorsAndStyle?.forEach((factorItem) => {
    if (factorItem?.factors?.length) {
      factorItem?.factors.forEach((subFactor) => {
        if (subFactor) {
          const cmName: string = subFactor?.cmName;
          cmNameObj = { ...cmNameObj, [cmName]: false };
        }
      });
    }
  });
  return cmNameObj;
};
