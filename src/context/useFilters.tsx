import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface FilterInterface {
  select: string | undefined;
  search: string | undefined;
}

type FiltersContextType = {
  filter: FilterInterface;
  setFilter: Dispatch<SetStateAction<FilterInterface>>;
};

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

type FilterProviderProps = {
  children: ReactNode;
};

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<FilterInterface>({
    select: undefined,
    search: undefined,
  });

  return (
    <FiltersContext.Provider value={{ filter, setFilter }}>
      {children}
    </FiltersContext.Provider>
  );
}

export function useFilterContext() {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilterContext must be used withing a FilterProvider");
  }

  return context;
}
