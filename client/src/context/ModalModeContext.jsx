import { createContext, useState } from "react";

export const ModalModeContext = createContext({
  modalMode: "",
  setModalMode: () => {},
  handleAddMode: () => {},
  handleEditMode: () => {},
  editedContactId: null,
  setEditedContactId: () => {},
});

export const ModalModeProvider = ({ children }) => {
  const [modalMode, setModalMode] = useState(null);
  const [editedContactId, setEditedContactId] = useState(null);

  const handleEditMode = (newEditedContactId) => {
    if (modalMode === "edit" && editedContactId === newEditedContactId) {
      setModalMode(null);
      setEditedContactId(null);
    } else {
      setModalMode("edit");
      setEditedContactId(newEditedContactId);
    }
  };

  const handleAddMode = () => {
    if (modalMode === "add") {
      setModalMode(null);
    } else {
      setModalMode("add");
    }
  };

  const handleCloseModal = () => setModalMode(null);

  return (
    <ModalModeContext.Provider
      value={{
        modalMode,
        setModalMode,
        handleAddMode,
        handleEditMode,
        editedContactId,
        setEditedContactId,
        handleCloseModal,
      }}
    >
      {children}
    </ModalModeContext.Provider>
  );
};
