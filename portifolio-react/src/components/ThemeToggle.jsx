import React, { useContext } from "react";
import { ThemeContext } from "../styles/ThemeProviderComponent"; // Novo import

const ThemeToggle = () => {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  const isDarkTheme = currentTheme === 'dark';

  return (
    <div>
      <button onClick={toggleTheme}>
        Toggle to {isDarkTheme ? 'Light' : 'Dark'} Theme
      </button>
    </div>
  );
};

export default ThemeToggle;