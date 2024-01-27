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
interface StatusInterface {
  isLoading: boolean;
  isRetrieved: boolean;
}

type StatusContextType = {
  status: StatusInterface;
  setStatus: Dispatch<SetStateAction<StatusInterface>>;
};

export const StatusContext = createContext<StatusContextType | undefined>(
  undefined,
);

type StatusProviderProps = {
  children: ReactNode;
};

export function StatusProvider({ children }: StatusProviderProps) {
  const [status, setStatus] = useState<StatusInterface>({
    isLoading: false,
    isRetrieved: false,
  });

  return (
    <StatusContext.Provider value={{ status, setStatus }}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatusContext(): StatusContextType {
  const context = useContext(StatusContext);

  if (!context) {
    throw new Error("useStatusContext must be used within a StatusProvider");
  }
  return context;
}
