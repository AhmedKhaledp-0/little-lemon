import React, { useContext } from "react";
import { ThemeContext } from "../contexts/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ThemeBotton() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const handleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };
  return (
    <FontAwesomeIcon onClick={handleTheme} icon={darkMode ? faMoon : faSun} />

  );
}

export default ThemeBotton;
