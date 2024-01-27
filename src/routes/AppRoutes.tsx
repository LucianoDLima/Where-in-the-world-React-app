import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "../context/useTheme";
import { CountryProvider } from "../context/useCountries";
import { StatusProvider } from "../context/useStatus";
import { FilterProvider } from "../context/useFilters";

function AppRoutes() {
  return (
    <>
      <ThemeProvider>
        <CountryProvider>
          <StatusProvider>
            <FilterProvider>
              <RouterProvider router={router} />
            </FilterProvider>
          </StatusProvider>
        </CountryProvider>
      </ThemeProvider>
    </>
  );
}

export default AppRoutes;
