import { createContext } from 'react';

import Insets from './insets'; 
import DarkColors from './themes/dark/colors';
import DarkTextTheme from './themes/dark/text';
import adjustOpacityFromRGBA from './utils';
import { FullThemeType, ThemeContextType } from './themes/types';
import staticImages from './images';


const Theme: FullThemeType = {
  mode: 'dark', 
  dark: {
    mode: 'dark', 
    colors: DarkColors,
    text: DarkTextTheme,
    insets: Insets,
    images: staticImages,
    adjustOpacityFromRGBA: adjustOpacityFromRGBA,
  },
  light: {
    mode: 'light', 
    colors: DarkColors, // TODO: Change
    text: DarkTextTheme, // TODO: Change
    insets: Insets,
    images: staticImages,
    adjustOpacityFromRGBA: adjustOpacityFromRGBA,
  },
};


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export { Theme, ThemeContext };
