import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

function AppRoutes() {
  return <RouterProvider router={router} />;
}

export default AppRoutes;
