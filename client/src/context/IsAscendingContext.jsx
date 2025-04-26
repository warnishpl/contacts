import { createContext, useState } from "react";

export const IsAscendingContext = createContext({
  isAscending: false,
  setIsAscending: () => {},
});

export const IsAscendingProvider = ({ children }) => {
  const [isAscending, setIsAscending] = useState(true);

  return (
    <IsAscendingContext.Provider value={{ isAscending, setIsAscending }}>
      {children}
    </IsAscendingContext.Provider>
  );
};
