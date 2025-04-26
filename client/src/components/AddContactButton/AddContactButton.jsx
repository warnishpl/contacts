import { useContext, memo } from "react";
import addIcon from "../../assets/add-icon.svg";
import {
  Wrapper,
  Button,
  ParagraphStyled,
} from "./AddContactButton.styles.jsx";
import { ModalModeContext } from "../../context/ModalModeContext.jsx";
import { useAddContactFormContext } from "../../context/ContactFormContext.jsx";
export const AddContactButton = memo(function AddContactButton() {
  const { handleAddMode } = useContext(ModalModeContext);
  const {
    setPhoneValue,
    setPrefixValue,
    setPhoneLengthValue,
    setImageSrc,
    setNameValue,
  } = useAddContactFormContext();
  const handleClick = () => {
    handleAddMode();
    setPhoneValue("");
    setPrefixValue("+48");
    setPhoneLengthValue(9);
    setImageSrc(null);
    setNameValue("");
  };

  return (
    <Wrapper>
      <Button onClick={handleClick}>
        <img src={addIcon} alt="Add Icon" />
        <ParagraphStyled>Dodaj kontakt</ParagraphStyled>
      </Button>
    </Wrapper>
  );
});
