import Color from "../../../utils/color";
import { ColorPaletteType } from "../types";

const DarkColors: ColorPaletteType = {
  primary: Color.hsl(51, 100, 65),  // Primarily Yellow with a touch of Orange, slightly darker
  primaryVariant: Color.hsl(51, 100, 45),  // Darker Yellow-Orange
  onPrimary: Color.hsl(51, 100, 15),  // Light Yellow
  onPrimaryContainer: Color.hsl(45, 100, 80),  // Lighter Yellow-Orange
  primaryContainer: Color.hsl(45, 100, 25),  // Dark Yellow-Orange
  primaryContainerSoft: Color.hslo(45, 100, 25, 0.3),  // Dark Yellow-Orange with 30% opacity

  secondary: Color.hsl(210, 100, 65),  // Blue, slightly darker
  secondaryVariant: Color.hsl(210, 100, 55),  // Darker Blue
  onSecondary: Color.hsl(210, 50, 90),  // Light Blue
  onSecondaryContainer: Color.hsl(210, 100, 80),  // Darker Light Blue
  secondaryContainer: Color.hsl(210, 100, 25),  // Dark Blue
  secondaryContainerSoft: Color.hslo(210, 100, 25, 0.3),  // Dark Blue with 30% opacity

  tertiary: Color.hsl(30, 100, 50),  // Soft Orange-Brown, slightly darker
  tertiaryVariant: Color.hsl(30, 100, 40),  // Darker Soft Orange-Brown
  onTertiary: Color.hsl(0, 0, 90),  // Light Grey
  onTertiaryContainer: Color.hsl(30, 100, 70),  // Darker Light Soft Orange-Brown
  tertiaryContainer: Color.hsl(30, 100, 25),  // Dark Soft Orange-Brown
  tertiaryContainerSoft: Color.hslo(30, 100, 25, 0.3),  // Dark Soft Orange-Brown with 30% opacity

  background: Color.hsl(0, 0, 10),  // Very Dark Grey
  backgroundVariant: Color.hsl(0, 0, 15),  // Slightly Lighter Dark Grey
  onBackground: Color.hsl(0, 0, 90),  // Light Grey

  surface: Color.hsl(0, 0, 20),  // Dark Grey
  surfaceVariant: Color.hsl(0, 0, 30),  // Slightly Lighter Dark Grey
  onSurface: Color.hsl(0, 0, 90),  // Light Grey

  error: Color.hsl(0, 77, 60),  // Bright Red
  onError: Color.hsl(0, 100, 20),  // Dark Red
  onErrorContainer: Color.hsl(0, 100, 20),  // Dark Red
  errorContainer: Color.hsl(0, 81, 40),  // Dark Red
  errorContainerSoft: Color.hslo(0, 77, 40, 0.3),  // Dark Red with 30% opacity

  success: Color.hsl(142, 53, 50),  // Dark Green
  onSuccess: Color.hsl(142, 100, 20),  // Dark Green
  onSuccessContainer: Color.hsl(142, 100, 70),  // Light Green
  successContainer: Color.hsl(142, 86, 30),  // Dark Green
  successContainerSoft: Color.hslo(142, 53, 30, 0.3),  // Dark Green with 30% opacity

  outline: Color.hsl(0, 0, 30),  // Medium Dark Grey
  outlineFocus: Color.hsl(0, 0, 45),  // Medium Grey
  outlineVariant: Color.hsl(0, 0, 20),  // Dark Grey
};

export default DarkColors;