import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ThemeProvider } from "../context/useTheme";
import { CountryDataProvider } from "../context/useCountryData";
import { DataStatusProvider } from "../context/useDataStatus";
import { DataFilterProvider } from "../context/useDataFilter";

function AppRoutes() {
  return (
    <>
      <ThemeProvider>
        <CountryDataProvider>
          <DataStatusProvider>
            <DataFilterProvider>
              <RouterProvider router={router} />
            </DataFilterProvider>
          </DataStatusProvider>
        </CountryDataProvider>
      </ThemeProvider>
    </>
  );
}

export default AppRoutes;
