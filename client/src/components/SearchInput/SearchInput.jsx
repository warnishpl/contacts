import { useDebounceCallback } from "@react-hook/debounce";
import { useContext } from "react";
import { InputWrapper, Input } from "./SearchInput.styles.jsx";
import { SearchValueContext } from "../../context/SearchValueContext.jsx";

export function SearchInput() {
  const { setSearchValue } = useContext(SearchValueContext);
  const debouncedSetSearchValue = useDebounceCallback(setSearchValue, 300);

  const handleChange = (e) => {
    debouncedSetSearchValue(e.target.value);
  };

  return (
    <InputWrapper>
      <Input
        onChange={handleChange}
        type="search"
        placeholder="Wyszukaj kontakt"
      />
    </InputWrapper>
  );
}
