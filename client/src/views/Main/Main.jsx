import { useContext } from "react";
import { MainBox } from "./Main.style.jsx";
import { AddContactButton } from "../../components/AddContactButton/AddContactButton.jsx";
import { ContactsHeader } from "../../components/ContactsHeader/ContactsHeader.jsx";
import { SearchInput } from "../../components/SearchInput/SearchInput.jsx";
import { ContactList } from "../../components/ContactList/ContactList.jsx";
import { ContactFormModal } from "../../components/ContactFormModal/ContactFormModal.jsx";
import { ModalModeContext } from "../../context/ModalModeContext.jsx";
import { SearchValueProvider } from "../../context/SearchValueContext.jsx";

export function Main() {
  const { modalMode } = useContext(ModalModeContext);
  return (
    <MainBox>
      <SearchValueProvider>
        <SearchInput />
        <AddContactButton />
        <ContactsHeader />
        <ContactList />
        {modalMode && <ContactFormModal />}
      </SearchValueProvider>
    </MainBox>
  );
}
