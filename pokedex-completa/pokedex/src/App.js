import React, { useState, useEffect } from "react";
import "./App.css";
import Router from "./router";

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme/themes";
import Switch from "react-switch";

const useStateWithLocalStorage = (localStorageKey) => {
  const [theme, setTheme] = useState(
    localStorage.getItem(localStorageKey) || "light"
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, theme);
  }, [theme]);

  return [theme, setTheme];
};

export default function App() {
  const [theme, setTheme] = useStateWithLocalStorage("@Theme");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    localStorage.clear();
    localStorage.setItem("@Theme", theme);
  };


  return (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
  <>
    <GlobalStyles />
    <div className="App">
    
    <div className="dark-mode-btn">
      <p className="dark-mode-name">Modo Noturno</p>
      <Switch checked={theme === "dark"? true : false} className="btn-right" onChange={themeToggler} />
    </div>
    <Router />
    </div>
  </>
</ThemeProvider>
);
  
}
