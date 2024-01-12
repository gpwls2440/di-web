// Dependency
import { useParams } from 'react-router';
import { READYMADE_STEP } from '@constants/readymades';

// Components
import Title from '@components/atoms/Title';
import InvestmentStandard from '@components/readymades/InvestmentStandard';
import InvestmentStyle from '@components/readymades/InvestmentStyle';
import ReadymadesSector from '@components/readymades/diy/ReadymadesSector';
import ReadymadeUniverse from '@components/readymades/master/ReadymadeUniverse';
import ReadymadesFactor from '@components/readymades/diy/ReadymadesFactor';

export default function ReadymadesContent() {
  const { strategyCategory = 'diy', level, step } = useParams();
  const contentData =
    READYMADE_STEP[strategyCategory][level ?? ''].data[Number(step) - 1];
  const contentType = contentData?.id;

  return (
    <>
      <Title
        titleWrapClass='mgt8'
        subTitle={`${contentData?.description ?? ''}`}
      />
      {contentType && (
        <>
          {
            {
              INVESTMENT_STYLE: <InvestmentStyle />,
              SECTOR: <ReadymadesSector />,
              INVESTMENT: <InvestmentStandard />,
              UNIVERSE: <ReadymadeUniverse />,
              FACTOR_ADJUST: <ReadymadesFactor />,
            }[contentType as string]
          }
        </>
      )}
    </>
  );
}
