import { FactorInfoItem, StrategyFactorType } from '@interface/factor';
import { FactorsTypeInfoFragment } from '@services/signOn';

export const createCmNameObj = (
  factorsAndStyle: Array<FactorsTypeInfoFragment | null> | undefined | null,
) => {
  let cmNameObj = {};

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

export const convertFactor = (
  factors: Array<FactorsTypeInfoFragment | null> | undefined | null,
) => {
  // ViewModel Factors 데이터
  const factorList: FactorInfoItem[] = [];

  if (factors) {
    factors.forEach((factor) => {
      if (factor?.style && factor.style.style) {
        const factorStyle = factor.style;
        const newFactorItem: FactorInfoItem = {
          desc: factorStyle.description || '',
          name: factorStyle.style as StrategyFactorType,
          text: factorStyle.name || '-',
          subs: [],
        };
        if (factor.factors && factor.factors.length > 0) {
          factor.factors.forEach((subFactor) => {
            if (subFactor) {
              const commentList: string[] = [];
              const {
                cmName,
                displayName,
                description,
                min,
                max,
                img,
                comments,
              } = subFactor;
              if (comments) {
                comments.forEach((comment) => {
                  if (comment) {
                    commentList.push(comment);
                  }
                });
              }
              newFactorItem.subs.push({
                desc: description || '',
                min,
                max,
                name: displayName,
                cmName,
                img,
                comments: commentList,
              });
            }
          });
        }
        factorList.push(newFactorItem);
      }
    });
  }
  return { factorList };
};
