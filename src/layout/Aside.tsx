/**
 * Aside
 */

// Dependency
import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { findData } from '@utils/object';

// Components
import Tree from '@components/molecules/Tree';

// types
import { Any } from '@interface/common';

interface AsideItem {
  name: string;
  id: string;
  path: string;
  active: boolean;
  isOpen: boolean;
}

interface AsideListItem extends AsideItem {
  children?: AsideItem[];
}

const asideData = [
  {
    name: '전략 보관함',
    id: 'my-strategies',
    path: '/my-strategies/',
    active: false,
    isOpen: false,
  },
  {
    name: '섹터 선택 예',
    id: 'sector',
    path: '/strategies/diy/readymades/pro_level_pro/1/TWFzdGVyU3RyYXRlZ3lUeXBlOjIx/',
    active: false,
    isOpen: false,
  },
  {
    name: '투자 기준 예',
    id: 'factor',
    path: '/strategies/diy/readymades/preset_level_2/1/TWFzdGVyU3RyYXRlZ3lUeXBlOjIx/',
    active: false,
    isOpen: false,
  },
  {
    name: '마스터 유니버스 예',
    id: 'master_universe',
    path: '/strategies/master/readymades/level_1/1/TWFzdGVyU3RyYXRlZ3lUeXBlOjIx/',
    active: false,
    isOpen: false,
  },
  {
    name: '백테스트 예',
    id: 'backtest',
    path: '/strategies/theme/backtest/preset_level_1/6/PGNsYXNzICdkamFuZ29fc2VydmVyLm1vZGVscy5NeVN0cmF0ZWd5Jz46NDU5MA==/',
    active: false,
    isOpen: false,
  },
  {
    name: '전략 선택(한국)',
    id: 'strategies',
    path: '/strategies/',
    active: false,
    isOpen: false,
    children: [
      {
        name: '테마 전략',
        id: 'theme',
        path: '/strategies/theme/',
        active: false,
        isOpen: false,
      },
      {
        name: '업종 전략',
        id: 'sector',
        path: '/strategies/sector/',
        active: false,
        isOpen: false,
      },
      {
        name: '대가들의 전략',
        id: 'master',
        path: '/strategies/master/',
        active: false,
        isOpen: false,
      },
      {
        name: '나만의 전략',
        id: 'diy',
        path: '/strategies/diy/',
        active: false,
        isOpen: false,
      },
      {
        name: `PB'전략`,
        id: 'pb',
        path: '/strategies/pb/',
        active: false,
        isOpen: false,
      },
    ],
  },
];

const getValue = (data: Any, targetValue: string[]) => {
  const result = JSON.parse(JSON.stringify(data));

  const clone = JSON.parse(JSON.stringify(targetValue));
  const activeArr = clone.length === 1 ? clone : clone.splice(1, 1);

  targetValue.forEach(() => {
    findData(
      result,
      'id',
      (
        _key: string,
        _value: string | number | boolean,
        object: AsideListItem,
      ) => {
        // eslint-disable-next-line no-param-reassign
        object.isOpen = false;
        // eslint-disable-next-line no-param-reassign
        object.active = false;
      },
    );
  });
  targetValue.forEach((item: string) => {
    findData(
      result,
      'id',
      (
        _key: string,
        value: string | number | boolean,
        object: AsideListItem,
      ) => {
        if (value === item) {
          // eslint-disable-next-line no-param-reassign
          object.isOpen = true;
        }
      },
    );
  });
  activeArr.forEach((item: string) => {
    findData(
      result,
      'id',
      (
        _key: string,
        value: string | number | boolean,
        object: AsideListItem,
      ) => {
        if (value === item) {
          // eslint-disable-next-line no-param-reassign
          object.active = true;
        }
      },
    );
  });

  return result;
};

export default function Aside() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const initData = useMemo(() => {
    const { length } = pathname.split('/');
    const aaa = pathname.split('/').splice(1, length - 2);
    const newValue = getValue(asideData, aaa);

    return newValue;
  }, [pathname]);
  const [data, setData] = useState<AsideListItem[]>(initData);

  const handleClick = (e?: React.MouseEvent<HTMLDivElement>) => {
    const target = e?.currentTarget?.dataset;
    const path = target?.path ?? '';

    navigate(path);
  };

  useEffect(() => {
    const { length } = pathname.split('/');
    const aaa = pathname.split('/').splice(1, length - 2);
    const newValue = getValue(data, aaa);

    setData(newValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <aside>
      <div className='aside-menu-wrap'>
        <div className='aside-menu'>
          {data?.map((item) => {
            return (
              <Tree
                id={item.id}
                path={item.path}
                defaultOpen={item.isOpen}
                active={item.active}
                label={`${item.name}`}
                onClick={(e) => handleClick(e)}
                key={item.id}>
                {item.children?.map((child) => {
                  return (
                    <Tree
                      isChildren
                      id={child.id}
                      path={child.path}
                      label={`${child.name}`}
                      key={child.id}
                      active={child.active}
                      onClick={(e) => handleClick(e)}
                    />
                  );
                })}
              </Tree>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
