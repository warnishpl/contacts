import { useCallback, useContext, useRef, useState } from "react";
import { LOCALSTORAGE_KEYS } from "../../utils/constants/localStorageKeys.jsx";
import { setLocalStorgeValue } from "../../utils/functions/localStorageFunctions.jsx";
import defaultAvatar from "../../assets/default_avatar_black.jpg";
import { sizes } from "../../styles/media.jsx";
import { ContactsListContext } from "../../context/ContactsListContext.jsx";
import { ModalModeContext } from "../../context/ModalModeContext.jsx";

export function useAddContactForm() {
  const inputRef = useRef(null);
  const { contactsList, dispatch } = useContext(ContactsListContext);
  const { modalMode, handleAddMode, editedContactId, handleCloseModal } =
    useContext(ModalModeContext);
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [prefixValue, setPrefixValue] = useState("+48");
  const [phoneLengthValue, setPhoneLengthValue] = useState(9);
  const [imageSrc, setImageSrc] = useState(null);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const handlerNameValue = useCallback(
    (event) => setNameValue(event.target.value),
    [setNameValue]
  );
  const handlerPhoneValue = useCallback(
    (event) => setPhoneValue(event.target.value),
    [setPhoneValue]
  );
  const handlerDropdown = useCallback(
    () => setIsDropdownShown((prev) => !prev),
    [setIsDropdownShown]
  );

  const handleFileChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          setImageSrc(e.target.result);
        };

        reader.readAsDataURL(file);
      }
    },
    [setImageSrc]
  );

  const handleAddAvatarIconClick = useCallback(() => {
    inputRef.current.click();
  }, []);
  const resetValues = useCallback(() => {
    setNameValue("");
    setPhoneValue("");
    setPrefixValue("+48");
    setPhoneLengthValue(9);
    setImageSrc(null);
    setNameError(false);
    setPhoneError(false);
    if (window.innerWidth <= sizes.lg) handleAddMode(null);
    handleCloseModal();
  }, [
    setNameValue,
    setPhoneValue,
    setPrefixValue,
    setPhoneLengthValue,
    setImageSrc,
    setNameError,
    setPhoneError,
    handleAddMode,
  ]);

  const addNewContact = useCallback(() => {
    const newContact = {
      id: crypto.randomUUID(),
      name: nameValue,
      prefix: prefixValue,
      phone: phoneValue,
      picture: imageSrc || defaultAvatar,
    };

    const updatedList = [...contactsList, newContact];
    setLocalStorgeValue(LOCALSTORAGE_KEYS.CONTACTS, updatedList);
    dispatch({ type: "ADD", payload: newContact });
    resetValues();
    return updatedList;
  }, [
    contactsList,
    imageSrc,
    nameValue,
    phoneValue,
    prefixValue,
    resetValues,
    dispatch,
  ]);

  const editContact = useCallback(
    (editedContactId) => {
      const updatedContactsList = contactsList.map((contact) => {
        if (contact.id === editedContactId) {
          return {
            ...contact,
            name: nameValue,
            prefix: prefixValue,
            phone: phoneValue,
            picture: imageSrc || defaultAvatar,
          };
        }
        return contact;
      });

      dispatch({
        type: "EDIT",
        payload: {
          id: editedContactId,
          name: nameValue,
          prefix: prefixValue,
          phone: phoneValue,
          picture: imageSrc || defaultAvatar,
        },
      });

      setLocalStorgeValue(LOCALSTORAGE_KEYS.CONTACTS, updatedContactsList);
      resetValues();
      return updatedContactsList;
    },
    [
      contactsList,
      nameValue,
      prefixValue,
      phoneValue,
      imageSrc,
      dispatch,
      resetValues,
    ]
  );

  const deleteContact = useCallback(
    (idToDelete) => {
      dispatch({ type: "DELETE", payload: idToDelete });
      const updatedContactsList = contactsList.filter(
        (el) => el.id !== idToDelete
      );
      setLocalStorgeValue(LOCALSTORAGE_KEYS.CONTACTS, updatedContactsList);
      return updatedContactsList;
    },
    [contactsList, dispatch]
  );

  const validateForm = useCallback(() => {
    const reg = new RegExp(`^[0-9+]{${phoneLengthValue}}$`);
    if (nameValue === "") {
      setNameError(true);
      setTimeout(() => {
        setNameError(false);
      }, 1000);
      return;
    } else if (!reg.test(phoneValue)) {
      setPhoneError(true);
      setTimeout(() => {
        setPhoneError(false);
      }, 1000);
      return;
    } else if (modalMode === "add") {
      addNewContact();
    } else if (modalMode === "edit") {
      editContact(editedContactId);
    }
  }, [
    addNewContact,
    editContact,
    nameValue,
    phoneLengthValue,
    phoneValue,
    setNameError,
    setPhoneError,
    modalMode,
    editedContactId,
  ]);

  return {
    handleFileChange,
    handlerNameValue,
    handlerPhoneValue,
    handlerDropdown,
    handleAddAvatarIconClick,
    resetValues,
    validateForm,
    inputRef,
    nameValue,
    phoneValue,
    setPhoneValue,
    isDropdownShown,
    setIsDropdownShown,
    prefixValue,
    setPrefixValue,
    phoneLengthValue,
    setPhoneLengthValue,
    imageSrc,
    setImageSrc,
    nameError,
    phoneError,
    setNameValue,
    deleteContact,
  };
}
