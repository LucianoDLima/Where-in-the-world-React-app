import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

/**
 * Interface with the possible filter states
 *
 * @property {string | undefined} select - Store the option the user selected
 * @property {string | undefined} search - Store the user input in the search box
 */
interface DataFilterInterface {
  select: string | undefined;
  search: string | undefined;
}

type DataFilter = {
  filter: DataFilterInterface;
  setFilter: Dispatch<SetStateAction<DataFilterInterface>>;
};

const DataFilterContext = createContext<DataFilter | undefined>(undefined);

type DataFilterProviderProps = {
  children: ReactNode;
};

export function DataFilterProvider({ children }: DataFilterProviderProps) {
  const [filter, setFilter] = useState<DataFilterInterface>({
    select: undefined,
    search: undefined,
  });

  return (
    <DataFilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </DataFilterContext.Provider>
  );
}

export function useDataFilterContext() {
  const context = useContext(DataFilterContext);

  if (!context) {
    throw new Error(
      "useDataFilterContext must be used withing a DataFilterProvider",
    );
  }

  return context;
}
