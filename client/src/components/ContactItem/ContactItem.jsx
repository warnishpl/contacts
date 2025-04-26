import { useCallback, useContext, useState } from "react";
import CopyIcon from "../../assets/copy-plus.svg";
import CopyDoneIcon from "../../assets/copy-check.svg";
import EditIcon from "../../assets/edit.svg";
import TrashIcon from "../../assets/trash.svg";
import {
  ContactItemWrapper,
  PictureWrapper,
  PersonalDataWrapper,
  NameWrapper,
  PhoneWrapper,
  FunctionIconsWrapper,
  Paragraph,
} from "./ContactItem.styles.jsx";
import { Img } from "../PhoneInput/PhoneInput.styles.jsx";
import { COUNTRY_LIST } from "../../utils/constants/country_list.jsx";
import { SvgIconButton } from "../SvgIconButton/SvgIconButton.jsx";
import { ModalModeContext } from "../../context/ModalModeContext.jsx";
import { useAddContactFormContext } from "../../context/ContactFormContext.jsx";
import flags from "../../utils/functions/flags.jsx";

export const ContactItem = ({ personalData }) => {
  const { name, prefix, phone, picture } = personalData;
  const [isExtended, setIsExtended] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const {
    setPhoneValue,
    setPrefixValue,
    setPhoneLengthValue,
    setImageSrc,
    setNameValue,
    deleteContact,
  } = useAddContactFormContext();

  function handlerIsExtended() {
    setIsExtended((prev) => !prev);
  }
  const { handleEditMode, setEditedContactId } = useContext(ModalModeContext);

  const focusToEditContact = useCallback(
    (e) => {
      e.stopPropagation();
      handleEditMode(personalData.id);
      setNameValue(name);
      setPhoneValue(phone);
      setPrefixValue(prefix);
      setPhoneLengthValue(phone.length);
      setImageSrc(picture);
      setEditedContactId(personalData.id);
    },
    [
      handleEditMode,
      phone,
      prefix,
      picture,
      setPhoneValue,
      setPrefixValue,
      setImageSrc,
      setPhoneLengthValue,
      setNameValue,
      name,
      personalData.id,
      setEditedContactId,
    ]
  );

  const handleDelete = useCallback(() => {
    deleteContact(personalData.id);
  }, [deleteContact, personalData.id]);

  const country = COUNTRY_LIST.find((item) => item.phone === prefix);

  const copyHandler = useCallback((textToCopy) => {
    return (e) => {
      e.stopPropagation();
      navigator.clipboard.writeText(textToCopy).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      });
    };
  }, []);

  return (
    <ContactItemWrapper onClick={handlerIsExtended} $isExtended={isExtended}>
      <PersonalDataWrapper $isExtended={isExtended}>
        <PictureWrapper $isExtended={isExtended}>
          <img src={picture} alt="zdjęcie profilowe"></img>
        </PictureWrapper>
        <NameWrapper $isExtended={isExtended}>
          <p>{name}</p>
        </NameWrapper>
        <FunctionIconsWrapper>
          <SvgIconButton
            svg={
              isCopied ? (
                <img src={CopyDoneIcon} alt="CopyDoneIcon" />
              ) : (
                <img src={CopyIcon} alt="CopyIcon" />
              )
            }
            onClick={copyHandler(phone)}
          />
          <SvgIconButton
            svg={<img src={EditIcon} alt="EditIcon" />}
            onClick={focusToEditContact}
          />
          <SvgIconButton
            svg={<img src={TrashIcon} alt="TrashIcon" />}
            onClick={handleDelete}
          />
        </FunctionIconsWrapper>

        <PhoneWrapper $isExtended={isExtended}>
          {country && <Img src={flags[country.flag]} alt={country.label} />}
          <Paragraph>
            {prefix} {phone}
          </Paragraph>
        </PhoneWrapper>
      </PersonalDataWrapper>
    </ContactItemWrapper>
  );
};
