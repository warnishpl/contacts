import { HeaderWrapper, Wrapper } from "./ContactsHeader.styles.jsx";
import { ThemeContext } from "../../context/AppThemeContext.jsx";
import { ThemePicker } from "../ThemePicker/ThemePicker.jsx";
import { useContext } from "react";
import { SvgIconButton } from "../SvgIconButton/SvgIconButton.jsx";
import { IsAscendingContext } from "../../context/IsAscendingContext.jsx";
import SortAzIcon from "../../assets/sort-ascending-letters.svg";
import SortZaIcon from "../../assets/sort-descending-letters.svg";

export function ContactsHeader() {
  const { setTheme } = useContext(ThemeContext);
  const isAscendingContextValue = useContext(IsAscendingContext);
  return (
    <HeaderWrapper>
      <Wrapper>
        <h1>Moje kontakty</h1>
      </Wrapper>
      <ThemePicker setTheme={setTheme} />
      <SvgIconButton
        svg={
          isAscendingContextValue.isAscending ? (
            <img src={SortZaIcon} alt="SortZaIcon" />
          ) : (
            <img src={SortAzIcon} alt="SortAzIcon" />
          )
        }
        onClick={() => isAscendingContextValue.setIsAscending((prev) => !prev)}
      />
    </HeaderWrapper>
  );
}
