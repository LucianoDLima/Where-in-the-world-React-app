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

type CountriesTypeArray = CountriesType[];

type CountryContextType = {
  countries: CountriesTypeArray;
  setCountries: Dispatch<SetStateAction<CountriesTypeArray>>;
};

export const CountryContext = createContext<CountryContextType | undefined>(
  undefined,
);

type CountryProviderProps = {
  children: ReactNode;
};

export function CountryProvider({ children }: CountryProviderProps) {
  const [countries, setCountries] = useState<CountriesTypeArray>([]);

  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountryContext(): CountryContextType {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error("useCountryContext must be used within a CountryProvider");
  }

  return context;
}
