import { useEffect, useState, useContext } from "react";
import { applyTheme } from "./utils";


export function useTheme() {

  const [colorPalette, setColorPalette] = useState<any[]>([])  ;
  const [updatingTheme, setUpdatingTheme] = useState(false)  ;
  const [typography, setTypography] = useState();
  const [themeLoading, setThemeLoading] = useState(true);
  const [themeError, setThemeError] = useState(false);

  const applyColors = (data) => {
    // setColorPalette(data);
    applyTheme(data);
  }

  return {
    colorPalette,
    setColorPalette,
    typography,
    setTypography,
    themeLoading,
    themeError,
    applyColors,
    updatingTheme
  };
}
