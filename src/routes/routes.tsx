import { createBrowserRouter } from 'react-router-dom';
import Header from '../pages/Header/Header';
import Error from '../pages/Error/Error';
// import Base from '../pages/Base/Base';
// import CountryLink from '../components/CountryLink/CountryLink';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <Error />,
    // children: [
    //   {
    //     path: '/',
    //     element: <Base />,
    //   },
    //   {
    //     path: '/:id',
    //     element: <CountryLink />,
    //   },
    // ],
  },
]);
