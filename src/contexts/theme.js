import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) ?? false
  );

  useEffect(() => {
    const updateTheme = (e) => {
      setDarkMode(e.matches);
    };

    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    setDarkMode(prefersDarkMode.matches);
    prefersDarkMode.addEventListener("change", updateTheme);

    return () => {
      prefersDarkMode.removeEventListener("change", updateTheme);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
