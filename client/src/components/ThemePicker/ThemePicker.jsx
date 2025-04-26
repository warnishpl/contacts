import React, { useState } from "react";
import { setLocalStorgeValue } from "../../utils/functions/localStorageFunctions.jsx";
import { blue, blueDark, green, greenDark } from "../../styles/theme.jsx";
import {
  Wrapper,
  ThemeWrapper,
  ThemeBox,
  HoverEffect,
  Button,
} from "./ThemePicker.styles.jsx";

const themes = {
  blue,
  blueDark,
  green,
  greenDark,
};

export function ThemePicker({ setTheme }) {
  const [showThemes, setShowThemes] = useState(false);
  return (
    <Wrapper>
      {!showThemes ? (
        <Button onClick={() => setShowThemes(true)}>Zmień motyw</Button>
      ) : (
        <ThemeWrapper>
          {Object.keys(themes).map((themeName) => (
            <HoverEffect
              key={themeName}
              onClick={() => {
                setTheme(themes[themeName]);
                setLocalStorgeValue("theme", themes[themeName]);
                setLocalStorgeValue("themeName", themeName);
                setShowThemes(false);
              }}
            >
              <ThemeBox
                $primary={themes[themeName].colors.button}
                $secondary={themes[themeName].colors.background}
              />
            </HoverEffect>
          ))}
        </ThemeWrapper>
      )}
    </Wrapper>
  );
}
