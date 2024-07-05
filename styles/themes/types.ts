import { ImageSourcePropType } from "react-native";

export interface ColorPaletteType {
  primary: string;
  primaryVariant: string;
  onPrimary: string;
  onPrimaryContainer: string;
  primaryContainer: string;
  primaryContainerSoft: string;

  tertiary: string;
  tertiaryVariant: string;
  onTertiary: string;
  onTertiaryContainer: string;
  tertiaryContainer: string;
  tertiaryContainerSoft: string;

  secondary: string;
  secondaryVariant: string;
  onSecondary: string;
  onSecondaryContainer: string;
  secondaryContainer: string;
  secondaryContainerSoft: string;

  background: string;
  backgroundVariant: string;
  onBackground: string;

  surface: string;
  surfaceVariant: string;
  onSurface: string;

  error: string;
  onError: string;
  onErrorContainer: string;
  errorContainer: string;
  errorContainerSoft: string;

  regular: string;
  onRegular: string;
  onRegularContainer: string;
  regularContainer: string;
  regularContainerSoft: string;

  success: string;
  onSuccess: string;
  onSuccessContainer: string;
  successContainer: string;
  successContainerSoft: string;

  fire: string;
  onFire: string;
  onFireContainer: string;
  fireContainer: string;
  fireContainerSoft: string;

  outline: string;
  outlineFocus: string;
  outlineVariant: string;
}

export interface TextStyleType {
  fontSize: number;
  fontFamily: 'Inter';
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 'normal' | 'bold' | 'semibold';
  lineHeight: number;
  color: string;
}

export interface TextThemeType {
  displayLarge: TextStyleType;
  displayMedium: TextStyleType;
  displaySmall: TextStyleType;
  headlineLarge: TextStyleType;
  headlineMedium: TextStyleType;
  headlineSmall: TextStyleType;
  titleLarge: TextStyleType;
  titleMedium: TextStyleType;
  titleSmall: TextStyleType;
  labelLarge: TextStyleType;
  labelMedium: TextStyleType;
  labelSmall: TextStyleType;
  bodyLarge: TextStyleType;
  bodyMedium: TextStyleType;
  bodySmall: TextStyleType;
}

export interface InsetsType {
  layoutLarge: number;
  layoutMedium: number;
  layoutSmall: number;
  screenMarginLarge: number;
  screenMarginMedium: number;
  large: number;
  medium: number;
  submedium: number;
  small: number;
  dwarf: number;
  pixel: number;
  zero: number;
}

export interface ConcreteThemeType {
  mode: 'light' | 'dark';
  colors: ColorPaletteType;
  text: TextThemeType;
  insets: InsetsType;
  images: StaticImagesType,
  adjustOpacityFromRGBA: (color: string, opacity: number) => string;
}

export interface FullThemeType {
  mode: 'light' | 'dark';
  dark: ConcreteThemeType;
  light: ConcreteThemeType;
}

export interface ThemeContextType {
  theme: ConcreteThemeType;
  toggleTheme: () => void;
}

export interface StaticImagesType {
  [key: string]: ImageSourcePropType;
}