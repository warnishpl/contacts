import { createContext, useState } from "react";
import { LOCALSTORAGE_KEYS } from "../utils/constants/localStorageKeys";
import { blueDark } from "../styles/theme";
import { getLocalStorageValue } from "../utils/functions/localStorageFunctions";
import { SetGlobalStyle } from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext(null);

export const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    getLocalStorageValue(LOCALSTORAGE_KEYS.THEME) || blueDark
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <SetGlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
