/**
 * Responsible for storing data retrieved from the API to be distributed across components
 */

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { CountriesType } from "../types";

type CountryDataContextType = {
  countries: CountriesType[];
  setCountries: Dispatch<SetStateAction<CountriesType[]>>;
};

export const CountryDataContext = createContext<CountryDataContextType | undefined>(
  undefined,
);

type CountryDataProviderProps = {
  children: ReactNode;
};

export function CountryDataProvider({ children }: CountryDataProviderProps) {
  const [countries, setCountries] = useState<CountriesType[]>([]);

  return (
    <CountryDataContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryDataContext.Provider>
  );
}

export function useCountryDataContext(): CountryDataContextType {
  const context = useContext(CountryDataContext);

  if (!context) {
    throw new Error("useCountryDataContext must be used within a CountryDataProvider");
  }

  return context;
}
