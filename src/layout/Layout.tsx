/**
 * Layout
 */

// Dependency
// import { Suspense } from 'react';
// import { useAtom } from 'jotai';
import { Outlet } from 'react-router-dom';
// import { countriesdAtom } from '@jotai/common';

// Components
import Header from '@layout/Header';
import Aside from '@layout/Aside';
// import Button from '@components/atoms/Button';

interface Layout {
  isHeader?: boolean;
  className?: string;
}

export default function Layout(props: Layout) {
  // const [countries, setCountries] = useAtom(countriesdAtom);
  const { className = '', isHeader = true } = props;
  return (
    // <div className='pd20'>
    //   <div>
    //     <Button onClick={() => setCountries('DOMESTIC')}>한국</Button>
    //     <Button onClick={() => setCountries('USA')}>미국</Button>
    //   </div>
    //   <div>{countries}</div>
    //   <Suspense
    //     fallback={

    //     }>
    //     <Outlet />
    //   </Suspense>
    // </div>
    <div className='main'>
      <Aside />
      <div className={`container-wrap ${className || ''}`}>
        {isHeader && <Header />}
        <Outlet />
      </div>
    </div>
  );
}
