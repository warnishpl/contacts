import { createContext, useContext } from "react";
import { useAddContactForm } from "../components/ContactFormModal/useContactForm.jsx";

export const AddContactFormContext = createContext(null);

export const ContactFormProvider = ({ children }) => {
  const form = useAddContactForm();

  return (
    <AddContactFormContext.Provider value={form}>
      {children}
    </AddContactFormContext.Provider>
  );
};

export const useAddContactFormContext = () => {
  const context = useContext(AddContactFormContext);
  if (!context) {
    throw new Error(
      "useAddContactFormContext must be used within AddContactFormProvider"
    );
  }
  return context;
};
