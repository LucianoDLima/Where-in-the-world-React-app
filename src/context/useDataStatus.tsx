/**
 * Responsible for keeping track of loading state across the app
 * and also check if data has already been retrieved to avoid multiple requests
 */

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

/**
 * Interface representing the status of an API request
 *
 * @property {boolean} isLoading - Check if the api request is pending
 * @property {boolean} isRetrieved - Check if data has already been retrieved
 */
interface DataStatusInterface {
  isLoading: boolean;
  isRetrieved: boolean;
}

type DataStatusContextType = {
  status: DataStatusInterface;
  setStatus: Dispatch<SetStateAction<DataStatusInterface>>;
};

export const DataStatusContext = createContext<DataStatusContextType | undefined>(undefined);

type DataStatusProps = {
  children: ReactNode;
};

export function DataStatusProvider({ children }: DataStatusProps) {
  const [status, setStatus] = useState<DataStatusInterface>({
    isLoading: false,
    isRetrieved: false,
  });

  return (
    <DataStatusContext.Provider value={{ status, setStatus }}>
      {children}
    </DataStatusContext.Provider>
  );
}

export function useDataStatusContext(): DataStatusContextType {
  const context = useContext(DataStatusContext);

  if (!context) {
    throw new Error("useDataStatusContext must be used within a DataStatus");
  }
  return context;
}
