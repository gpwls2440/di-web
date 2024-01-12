// import React, { useEffect, useState } from 'react';

// Components
import Button from '@components/atoms/Button';

// css
import './tabs.css';

interface TabsData {
  name: string;
  id: string;
  path?: string;
}

interface Tabs {
  data: TabsData[];
  activeId: string;
  onClick?: (id: string) => void;
  contents?: React.ReactNode;
}

export default function Tabs(props: Tabs) {
  const { data, activeId, onClick, contents } = props;

  return (
    <div className='tabs'>
      {data?.map((item) => {
        return (
          <Button
            key={item.id}
            onClick={() => onClick?.(item.id)}
            className={
              activeId === item.id ? 'active tab-button' : 'tab-button'
            }>
            {item?.name}
          </Button>
        );
      })}
      {contents && <>{contents}</>}
    </div>
  );
}
