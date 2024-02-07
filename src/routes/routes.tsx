import { createBrowserRouter } from 'react-router-dom';
import Error from '../view/Error';
import Base from '../view/Home';
import Details from '../view/Details';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
    errorElement: <Error />,
  },
  {
    path: '/:id',
    element: <Details />,
  },
]);
