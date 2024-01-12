// Dependency
import type { RouteObject } from 'react-router-dom';

// Components
import Layout from '@layout/Layout';

import Generate from '@pages/Generate';
import Error from '@pages/Error';
import MyStrategies from '@pages/MyStrategies';
import SectorStrategies from '@pages/SectorStrategies';
import ThemeStrategies from '@pages/ThemeStrategies';
import DiyStrategies from '@pages/DiyStrategies';
import MasterStrategies from '@pages/MasterStrategies';
import Strategy from '@pages/Strategy';
import Readymades from '@pages/Readymades';
import Backtest from '@pages/Backtest';
import Example from '@pages/Example3';

const routes: RouteObject[] = [
  {
    path: '/',
    children: [
      { index: true, element: <Generate /> },
      { path: '*', element: <Error /> },
    ],
  },
  {
    path: '/my-strategies',
    element: <Layout isHeader={false} />,
    children: [{ index: true, element: <MyStrategies /> }],
  },
  {
    path: '/strategies',
    element: <Layout className='strategies' />,
    children: [
      { index: true, element: <ThemeStrategies /> },
      {
        path: 'theme',
        children: [{ index: true, element: <ThemeStrategies /> }],
      },
      {
        path: 'sector',
        children: [{ index: true, element: <SectorStrategies /> }],
      },
      {
        path: 'diy',
        children: [{ index: true, element: <DiyStrategies /> }],
      },
      {
        path: 'master',
        children: [{ index: true, element: <MasterStrategies /> }],
      },
    ],
  },
  {
    path: '/strategies/:strategyCategory',
    element: <Layout />,
    children: [
      {
        path: 'readymades/:level/:step/:strategyId',
        element: <Readymades />,
      },
      {
        path: 'backtest/:level/:step/:myStrategyId',
        element: <Backtest />,
      },
    ],
  },
  {
    path: '/strategy',
    element: <Layout />,
    children: [
      {
        path: 'edit/:myStrategyId',
        children: [{ index: true, element: <Strategy /> }],
      },
    ],
  },
  {
    path: '/example',
    element: <Layout />,
    children: [{ index: true, element: <Example /> }],
  },
];

export default routes;
