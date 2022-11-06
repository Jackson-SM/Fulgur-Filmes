import React, { useState, useEffect } from 'react';

import { darkTheme } from '../../styled/stitches-theme/darkTheme';
import { lightTheme } from '../../styled/stitches-theme/lightTheme';

type ThemeContextProps = {
  theme: string;
  changeTheme(): void;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = React.createContext({} as ThemeContextProps);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<string>(() => {
    const storageTheme = localStorage.getItem('theme-stitches');

    if (storageTheme) {
      const html = document.querySelector('html');

      html?.classList.remove(...html.classList);

      html?.classList.add(storageTheme === 'dark' ? darkTheme : lightTheme);
      return storageTheme;
    }
    return 'dark';
  });

  useEffect(() => {
    console.log(theme);
    const themeStorage = localStorage.setItem('theme-stitches', theme);
  }, [theme]);

  const htmlChangeThemeClass = () => {
    const html = document.querySelector('html');

    html?.classList.remove(...html.classList);

    html?.classList.add(theme === 'dark' ? lightTheme : darkTheme);
  };

  const changeTheme = () => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));

    htmlChangeThemeClass();
  };

  return <ThemeContext.Provider value={{ theme, changeTheme }}>{children}</ThemeContext.Provider>;
}
