import {
  AddContactBox,
  AddContactFormWrapper,
  Background,
  Header,
  IconWrapper,
  ImagePreview,
  ImgInput,
  NameInputField,
  InputTitle,
  InputsWrapper,
  ImageWrapper,
  AvatarSign,
  DeleteAvatarIconStyled,
  AddAvatarIconStyled,
  RedP,
} from "./ContactFormModal.styles.jsx";
import BackIcon from "../../assets/arrow-left.svg?react";
import { OwnButton } from "../OwnButton/OwnButton.jsx";
import { ModalModeContext } from "../../context/ModalModeContext.jsx";
import { useAddContactFormContext } from "../../context/ContactFormContext.jsx";
import { useContext } from "react";
import { PhoneInput } from "../PhoneInput/PhoneInput.jsx";

export function ContactFormModal() {
  const { modalMode, handleEditMode, handleAddMode, editedContactId } =
    useContext(ModalModeContext);

  function handleClick() {
    if (modalMode === "edit") {
      handleEditMode(editedContactId);
    } else if (modalMode === "add") {
      handleAddMode();
    }
  }

  const {
    handleFileChange,
    handlerNameValue,
    handlerPhoneValue,
    handlerDropdown,
    handleAddAvatarIconClick,
    validateForm,
    inputRef,
    nameValue,
    phoneValue,
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
  } = useAddContactFormContext();

  return (
    <>
      <Background onClick={handleClick}></Background>
      <AddContactFormWrapper>
        <AddContactBox>
          <Header>
            <IconWrapper>
              <BackIcon onClick={handleClick} />
            </IconWrapper>
            <p>{modalMode === "edit" ? "Edytuj kontakt" : "Dodaj kontakt"}</p>
          </Header>
          <InputsWrapper>
            <ImageWrapper>
              <ImagePreview $imageSrc={imageSrc}></ImagePreview>
              <ImgInput
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              ></ImgInput>
            </ImageWrapper>
            <AvatarSign as="button">
              {!imageSrc ? (
                <AddAvatarIconStyled onClick={handleAddAvatarIconClick} />
              ) : (
                <DeleteAvatarIconStyled onClick={() => setImageSrc(null)} />
              )}
            </AvatarSign>
            <InputTitle>
              <p>Nazwa</p>
              {nameError && <RedP>Wprowadź nazwe</RedP>}
            </InputTitle>
            <NameInputField
              name=""
              value={nameValue}
              onChange={handlerNameValue}
              placeholder={`Wprowadz nazwe kontaktu`}
            ></NameInputField>
            <InputTitle>
              <p>Numer telefonu</p>
              {phoneError && <RedP>Błędny numer telefonu</RedP>}
            </InputTitle>
            <PhoneInput
              isDropdownShown={isDropdownShown}
              setIsDropdownShown={setIsDropdownShown}
              prefixValue={prefixValue}
              setPrefixValue={setPrefixValue}
              phoneValue={phoneValue}
              handlerPhoneValue={handlerPhoneValue}
              phoneLengthValue={phoneLengthValue}
              setPhoneLengthValue={setPhoneLengthValue}
              handlerDropdown={handlerDropdown}
            />
          </InputsWrapper>

          <OwnButton type="submit" onClick={validateForm}>
            Zapisz
          </OwnButton>
        </AddContactBox>
      </AddContactFormWrapper>
    </>
  );
}
