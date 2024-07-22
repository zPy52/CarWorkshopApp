import React, { useState } from 'react';
import { ThemeContext, Theme } from '../theme';
import { ConcreteThemeType } from '../themes/types';


export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Set initial theme to Theme.light.
  const [theme, setTheme] = useState<ConcreteThemeType>(Theme.light);

  const toggleTheme = () => {
    const newTheme = theme.mode === 'light' ? 'dark' : 'light';
    setTheme(newTheme === 'light' ? Theme.light : Theme.dark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}