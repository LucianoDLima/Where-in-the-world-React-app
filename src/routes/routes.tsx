import { createBrowserRouter } from "react-router-dom";
import Header from "../views/Header";
import Error from "../views/Error";
import Base from "../views/HomeBody";
import CountryLink from "../components/CountryLink/CountryLink";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Base />,
      },
      {
        path: "/:id",
        element: <CountryLink />,
      },
    ],
  },
]);
