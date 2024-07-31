import { ColorPaletteType } from "../types";
import Color from "../../../utils/color";


const LightColors: ColorPaletteType = {
  primary: Color.hsl(51, 100, 75),  // Primarily Yellow with a touch of Orange
  primaryVariant: Color.hsl(51, 100, 50),  // Slightly Darker Yellow-Orange
  onPrimary: Color.hsl(51, 100, 20),  // Very Light Yellow
  onPrimaryContainer: Color.hsl(45, 100, 35),  // Darker Yellow-Orange
  primaryContainer: Color.hsl(45, 100, 85),  // Light Yellow-Orange
  primaryContainerSoft: Color.hslo(45, 100, 85, 0.3),  // Light Yellow-Orange with 30% opacity

  secondary: Color.hsl(210, 100, 50),  // Blue
  secondaryVariant: Color.hsl(210, 100, 40),  // Darker Blue
  onSecondary: Color.hsl(210, 50, 95),  // White
  onSecondaryContainer: Color.hsl(210, 100, 30),  // Dark Blue
  secondaryContainer: Color.hsl(210, 100, 90),  // Light Blue
  secondaryContainerSoft: Color.hslo(210, 100, 90, 0.3),  // Light Blue with 30% opacity

  tertiary: Color.hsl(30, 100, 65),  // Soft Orange-Brown
  tertiaryVariant: Color.hsl(30, 100, 55),  // Darker Soft Orange-Brown
  onTertiary: Color.hsl(0, 0, 100),  // White
  onTertiaryContainer: Color.hsl(30, 100, 45),  // Dark Soft Orange-Brown
  tertiaryContainer: Color.hsl(30, 100, 85),  // Light Soft Orange-Brown
  tertiaryContainerSoft: Color.hslo(30, 100, 85, 0.3),  // Light Soft Orange-Brown with 30% opacity

  error: Color.hsl(0, 77, 48),  // Dark Red
  onError: Color.hsl(0, 100, 87),  // Very Light Red
  onErrorContainer: Color.hsl(0, 100, 87),  // Very Light Red
  errorContainer: Color.hsl(0, 81, 24),  // Darkest Red
  errorContainerSoft: Color.hslo(0, 77, 48, 0.3),  // Dark Red with 30% opacity

  success: Color.hsl(142, 53, 41),  // Medium Dark Green
  onSuccess: Color.hsl(142, 100, 95),  // Very Pale Green
  onSuccessContainer: Color.hsl(142, 100, 92),  // Pale Green
  successContainer: Color.hsl(142, 86, 17),  // Very Dark Green
  successContainerSoft: Color.hslo(142, 53, 41, 0.3),  // Medium Dark Green with 30% opacity

  background: Color.hsl(0, 0, 96),  // Very Light Grey
  onBackground: Color.hsl(0, 0, 10),  // Dark Grey

  surface: Color.hsl(0, 0, 90),  // Light Grey
  surfaceVariant: Color.hsl(0, 0, 80),  // Slightly Darker Light Grey
  onSurface: Color.hsl(0, 0, 30),  // Dark Grey

  surfaceContainerLowest: Color.hsl(0, 0, 85), 
  surfaceContainerLow: Color.hsl(0, 0, 75), 
  surfaceContainer: Color.hsl(0, 0, 65), 
  surfaceContainerHigh: Color.hsl(0, 0, 55),
  surfaceContainerHighest: Color.hsl(0, 0, 45), 

  outline: Color.hsl(0, 0, 65),  // Dark Grey
  outlineFocus: Color.hsl(0, 0, 45),  // Medium Grey
  outlineVariant: Color.hsl(0, 0, 80),  // Darker Medium Grey
};

export default LightColors;
