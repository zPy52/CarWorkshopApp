import { createContext } from 'react';

import DarkColors from './themes/dark/colors';
import DarkTextTheme from './themes/dark/text';
import { FullThemeType, ThemeContextType } from './themes/types';
import LightColors from './themes/light/colors';
import LightTextTheme from './themes/light/text';


const Theme: FullThemeType = {
  mode: 'light', 
  dark: {
    mode: 'dark', 
    colors: DarkColors,
    text: DarkTextTheme,
  },
  light: {
    mode: 'light', 
    colors: LightColors,
    text: LightTextTheme,
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export { Theme, ThemeContext };
