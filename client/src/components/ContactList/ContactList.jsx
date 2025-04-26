import { useContext, useEffect } from "react";
import { ContactItem } from "../ContactItem/ContactItem.jsx";
import { ContactsWrapper } from "./ContactList.styles.jsx";
import { ContactsListContext } from "../../context/ContactsListContext.jsx";
import { IsAscendingContext } from "../../context/IsAscendingContext.jsx";
import { SearchValueContext } from "../../context/SearchValueContext.jsx";
import {
  getLocalStorageValue,
  setLocalStorgeValue,
} from "../../utils/functions/localStorageFunctions.jsx";
import { LOCALSTORAGE_KEYS } from "../../utils/constants/localStorageKeys.jsx";
import { TEMP_CONTACT_DATA } from "../../utils/constants/temp_contact_data.jsx";
import { blueDark } from "../../styles/theme.jsx";

export function ContactList() {
  const { searchValue } = useContext(SearchValueContext);
  const isAscendingContextValue = useContext(IsAscendingContext);
  const ContactsListContextValue = useContext(ContactsListContext);
  const lowerCaseSearchValue = searchValue.toLowerCase();
  const filteredContactsList = ContactsListContextValue.contactsList.filter(
    (contact) =>
      contact.name.toLowerCase().includes(lowerCaseSearchValue) ||
      contact.phone.includes(searchValue)
  );
  const sortedContactsList = filteredContactsList.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return isAscendingContextValue.isAscending ? -1 : 1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
      return isAscendingContextValue.isAscending ? 1 : -1;
    }
    return 0;
  });

  const { dispatch } = useContext(ContactsListContext);

  useEffect(() => {
    const storedContacts = getLocalStorageValue(LOCALSTORAGE_KEYS.CONTACTS);

    if (!storedContacts) {
      setLocalStorgeValue(LOCALSTORAGE_KEYS.CONTACTS, TEMP_CONTACT_DATA);
      dispatch({ type: "SET_ALL", payload: TEMP_CONTACT_DATA });
    } else {
      dispatch({ type: "SET_ALL", payload: storedContacts });
    }

    if (!getLocalStorageValue(LOCALSTORAGE_KEYS.THEME)) {
      setLocalStorgeValue(LOCALSTORAGE_KEYS.THEME, blueDark);
      setLocalStorgeValue(LOCALSTORAGE_KEYS.THEME_NAME, "blueDark");
    }
  }, [dispatch]);

  return (
    <ContactsWrapper>
      {sortedContactsList.map((element) => (
        <ContactItem personalData={element} key={element.id} />
      ))}
    </ContactsWrapper>
  );
}
