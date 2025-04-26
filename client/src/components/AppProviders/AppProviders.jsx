import { AppThemeProvider } from "../../context/AppThemeContext.jsx";
import { ContactFormProvider } from "../../context/ContactFormContext.jsx";
import { ContactsListProvider } from "../../context/ContactsListContext.jsx";
import { IsAscendingProvider } from "../../context/IsAscendingContext.jsx";
import { ModalModeProvider } from "../../context/ModalModeContext.jsx";

export const AppProviders = ({ children }) => {
  return (
    <ContactsListProvider>
      <ModalModeProvider>
        <ContactFormProvider>
          <IsAscendingProvider>
            <AppThemeProvider>{children}</AppThemeProvider>
          </IsAscendingProvider>
        </ContactFormProvider>
      </ModalModeProvider>
    </ContactsListProvider>
  );
};
