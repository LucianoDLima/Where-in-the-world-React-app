import { createBrowserRouter } from "react-router-dom";
import Header from "../views/Header";
import Error from "../views/Error";
import Base from "../views/HomeBody";
import Details from "../views/Details";

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
        element: <Details />,
      },
    ],
  },
]);
