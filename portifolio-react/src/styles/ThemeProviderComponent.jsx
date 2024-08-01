import React, { useState, useEffect, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';

export const ThemeContext = createContext();

const ThemeProviderComponent = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const isDarkTheme = currentTheme === 'dark';

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? 'light' : 'dark';
    setCurrentTheme(updatedTheme);
    localStorage.setItem('theme', updatedTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme && ['dark', 'light'].includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    } else if (prefersDark) {
      setCurrentTheme('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <ThemeProvider theme={theme[currentTheme]}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProviderComponent;