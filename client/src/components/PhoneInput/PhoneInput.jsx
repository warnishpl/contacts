import {
  PhoneInputWrapper,
  PrefixList,
  PhoneInputField,
  ChevronStyled,
  Wrapper,
  Button,
  Img,
  Paragraph,
} from "./PhoneInput.styles.jsx";
import { COUNTRY_LIST } from "../../utils/constants/country_list.jsx";
import flags from "../../utils/functions/flags.jsx";

export function PhoneInput({
  isDropdownShown,
  setIsDropdownShown,
  prefixValue,
  setPrefixValue,
  phoneValue,
  handlerPhoneValue,
  phoneLengthValue,
  setPhoneLengthValue,
  handlerDropdown,
}) {
  function flagHandler(phone, phoneLength) {
    setIsDropdownShown(false);
    setPrefixValue(phone);
    setPhoneLengthValue(phoneLength);
  }

  return (
    <PhoneInputWrapper $isDropdownShown={isDropdownShown}>
      <PrefixList onClick={handlerDropdown}>
        <p>{prefixValue}</p>
        <ChevronStyled
          $isDropdownShown={isDropdownShown}
        />
      </PrefixList>
      <PhoneInputField
        value={phoneValue}
        onChange={handlerPhoneValue}
        placeholder={`Wprowadz ${phoneLengthValue}-cyfrowy numer`}
      />
      {isDropdownShown && (
        <Wrapper>
          {COUNTRY_LIST.map((country) => (
            <Button
              key={country.flag}
              onClick={() => flagHandler(country.phone, country.phoneLength)}
            >
              <Img src={flags[country.flag]} alt={country.label} />
              <Paragraph>{`${country.phone} ${country.label}`}</Paragraph>
            </Button>
          ))}
        </Wrapper>
      )}
    </PhoneInputWrapper>
  );
}
