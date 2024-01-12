// Dependency
import { useCallback, useState } from 'react';
import { useModal } from '@hooks/useModal';
import { useBoolean } from '@kbam-frontend/hooks';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';
import {
  simulationOptionScreeningAtom,
  strategyIdAtom,
} from '@jotai/strategies';
import {
  useCreateMyStrategyByReadyMadeMutation,
  CreateMyStrategyByReadyMadeMutationVariables,
} from '@services/auth';

import { INVESTMENT_METHOD } from '@constants/strategies';

// Components
import Title from '@components/atoms/Title';
import Button from '@components/atoms/Button';
import InvestmentMethodList from '@components/strategies/investmentMethod/InvestmentMethodList';
import InvestmentMethodMoneyList from '@components/strategies/investmentMethod/InvestmentMethodMoneyList';

// types
import { InvestmentMethodType } from '@interface/strategies';

interface InvestmentMethod {
  strategyId: string;
  strategyType: string;
}

export default function InvestmentMethod(props: InvestmentMethod) {
  const { strategyId, strategyType } = props;
  const [level, setLevel] = useState<string>('PRO_LEVEL_PRO');
  const [type, setType] = useState<InvestmentMethodType>('PRO');
  const { value, setFalse } = useBoolean(true);
  const [booksize, setBooksize] = useState<number>(10000000);
  const navigate = useNavigate();
  const { closeModal } = useModal();
  const [simulationOptionScreening] = useAtom(simulationOptionScreeningAtom);
  const [, setStrategyId] = useAtom(strategyIdAtom);
  const mutation = useCreateMyStrategyByReadyMadeMutation({
    onSuccess: (data) => {
      if (data.createMyStrategyByReadyMade?.myStrategyId) {
        navigate(
          `/strategies/${strategyType}/backtest/${level.toLocaleLowerCase()}/6/${data
            .createMyStrategyByReadyMade?.myStrategyId}`,
          {
            replace: true,
          },
        );
        closeModal('전략 선택');
      }
    },
  });

  const handleClick = (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    if (level === 'PRESET_LEVEL_1') {
      setFalse();
    }

    if (level !== 'PRESET_LEVEL_1') {
      setStrategyId(strategyId);
      navigate(
        `/strategies/${strategyType}/readymades/${level.toLocaleLowerCase()}/1/${strategyId}`,
        {
          replace: true,
        },
      );
      closeModal('전략 선택');
    }
  };

  const handleTabClick = (id: string, level: string) => {
    setType(id as InvestmentMethodType);
    setLevel(level);
  };

  const handleBackTestClick = useCallback(() => {
    const mutationValue = {
      simulationOptionScreening: {
        ...simulationOptionScreening,
        booksize,
      },
      strategyId,
      isSimple: true,
    } as CreateMyStrategyByReadyMadeMutationVariables;

    mutation.mutate(mutationValue);
  }, [mutation, simulationOptionScreening, strategyId, booksize]);

  const handleChange = (value: string) => {
    setLevel(value);
  };

  const handleMoneyChange = (booksize: number) => {
    setBooksize(booksize);
  };

  return (
    <div className='modal investment-method'>
      {value && (
        <>
          <Title title='투자 방법 찾기' />
          <Button
            className='button-close'
            onClick={() => closeModal('전략 선택')}>
            <img src='/svg/button-close.svg' alt='닫기' />
          </Button>
          <ul className='tab'>
            {INVESTMENT_METHOD.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`${item.id === type ? 'active' : ''} `}>
                  <Button
                    onClick={() =>
                      handleTabClick(item?.id ?? '', item.method[0].id)
                    }>
                    <div className='button-title'>{item.name}</div>
                    <div className='button-sub-title'>{item.subName}</div>
                  </Button>
                </li>
              );
            })}
          </ul>
          <div className='content'>
            <InvestmentMethodList
              onChange={handleChange}
              defaultValue={level}
              data={
                INVESTMENT_METHOD.filter((item) => item.id === type)[0].method
              }
            />
            <p className='describe'>* Level은 투자 난이도를 의미합니다.</p>
            <Button onClick={handleClick} className='button-start'>
              전략 편집 시작
            </Button>
          </div>
        </>
      )}
      {!value && (
        <>
          <Title title='금액만 설정하기' />
          <Button
            className='button-close'
            onClick={() => closeModal('전략 선택')}>
            <img src='/svg/button-close.svg' alt='닫기' />
          </Button>
          <div className='content'>
            <InvestmentMethodMoneyList
              defaultValue={booksize}
              onChange={handleMoneyChange}
            />
            <p className='describe'>* Level은 투자 난이도를 의미합니다.</p>
            <Button onClick={handleBackTestClick} className='button-start'>
              백테스트 시작
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
