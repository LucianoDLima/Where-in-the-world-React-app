import { createBrowserRouter } from "react-router-dom";
import Error from "../views/Error";
import Base from "../views/HomeBody";
import Details from "../views/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <Error />
  },
  {
    path: "/:id",
    element: <Details />,
  },
]);
