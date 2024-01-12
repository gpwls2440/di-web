/**
 * App
 */

// Dependency
import { useRoutes } from 'react-router-dom';
import ModalManager from '@layout/ModalManager';
import routes from './routes/index';

export default function App() {
  const element = useRoutes(routes);
  return (
    <>
      {element}
      <ModalManager />
    </>
  );
}
