import { useEffect, useState } from 'react';

import { dark } from '../styled/themes/dark';
import { light } from '../styled/themes/light';

export const useTheme = () => {
  const [theme, setTheme] = useState<typeof dark>(() => {
    const storageTheme = JSON.parse(`${localStorage.getItem('theme-stitches')}`);

    if (storageTheme) {
      if (storageTheme === 'dark') {
        return light;
      }
    }
    return dark;
  });

  const handleChangeTheme = () => {
    theme.title === 'dark' ? setTheme(light) : setTheme(dark);
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem('theme-stitches');

    if (!storageTheme) {
      localStorage.setItem('theme-stitches', theme.title);
    }
  }, [theme]);

  return {
    theme,
    handleChangeTheme,
  };
};
