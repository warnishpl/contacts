import { createContext, useReducer } from "react";
import { contactsListReducer } from "../reducer/contactsListReducer";
import { getLocalStorageValue } from "../utils/functions/localStorageFunctions";
import { LOCALSTORAGE_KEYS } from "../utils/constants/localStorageKeys";
import { TEMP_CONTACT_DATA } from "../utils/constants/temp_contact_data";

export const ContactsListContext = createContext(null);

export const ContactsListProvider = ({ children }) => {
  const [contactsList, dispatch] = useReducer(
    contactsListReducer,
    getLocalStorageValue(LOCALSTORAGE_KEYS.CONTACTS) || TEMP_CONTACT_DATA
  );

  return (
    <ContactsListContext.Provider value={{ contactsList, dispatch }}>
      {children}
    </ContactsListContext.Provider>
  );
};
