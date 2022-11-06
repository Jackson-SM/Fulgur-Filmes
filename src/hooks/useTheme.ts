import React, { useContext } from 'react';

import { ThemeContext } from '../context/Theme';

export const useTheme = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return {
    theme,
    changeTheme,
  };
};
