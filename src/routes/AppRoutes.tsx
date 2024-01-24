import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "../Context/useTheme";

function AppRoutes() {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default AppRoutes;
