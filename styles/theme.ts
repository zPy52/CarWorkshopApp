import { createContext } from 'react';

import DarkColors from './themes/dark/colors';
import DarkTextTheme from './themes/dark/text';
import { FullThemeType, ThemeContextType } from './themes/types';


const Theme: FullThemeType = {
  mode: 'dark', 
  dark: {
    mode: 'dark', 
    colors: DarkColors,
    text: DarkTextTheme,
  },
  light: {
    mode: 'light', 
    colors: DarkColors, // TODO: Change
    text: DarkTextTheme, // TODO: Change
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export { Theme, ThemeContext };
