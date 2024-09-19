import { createContext, FC, PropsWithChildren, useState } from 'react';

type LoadingContextType = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export const LoadingProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
