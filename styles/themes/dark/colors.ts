interface ColorPalette {
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

const DarkColors: ColorPalette = {
  primary: 'rgba(255, 215, 0, 1)',  // Yellow
  primaryVariant: 'rgba(255, 195, 0, 1)',  // Darker yellow
  onPrimary: 'rgba(0, 0, 0, 1)',  // Black
  onPrimaryContainer: 'rgba(255, 215, 0, 1)',
  primaryContainer: 'rgba(255, 235, 59, 1)',
  primaryContainerSoft: 'rgba(255, 215, 0, 0.3)',

  tertiary: 'rgba(255, 165, 0, 1)',  // Orange
  tertiaryVariant: 'rgba(255, 140, 0, 1)',  // Darker orange
  onTertiary: 'rgba(0, 0, 0, 1)',  // Black
  onTertiaryContainer: 'rgba(255, 165, 0, 1)',
  tertiaryContainer: 'rgba(255, 204, 128, 1)',
  tertiaryContainerSoft: 'rgba(255, 165, 0, 0.3)',

  secondary: 'rgba(0, 122, 255, 1)',  // Royal Blue
  secondaryVariant: 'rgba(140, 188, 255, 1)',  // Light Sky Blue
  onSecondary: 'rgba(217, 235, 255, 1)',  // Very Light Blue
  onSecondaryContainer: 'rgba(140, 188, 255, 1)',
  secondaryContainer: 'rgba(0, 54, 113, 1)',  // Deep Royal Blue
  secondaryContainerSoft: 'rgba(0, 100, 204, 0.3)',  // Azure with 30% opacity

  background: 'rgba(18, 18, 18, 1)',  // Squarespace
  backgroundVariant: 'rgba(41, 41, 41, 1)',  // Black signals
  onBackground: 'rgba(237, 237, 237, 1)',  // Inverted squarespace

  surface: 'rgba(30, 30, 30, 1)',  // Bright charcoal
  surfaceVariant: 'rgba(46, 46, 46, 1)',  // Darker grey
  onSurface: 'rgba(237, 237, 237, 1)',  // Inverted squarespace

  error: 'rgba(204, 47, 40, 1)',  // Dark Red
  onError: 'rgba(255, 188, 188, 1)',  // Very Light Red
  onErrorContainer: 'rgba(255, 188, 188, 1)',  // Very Light Red
  errorContainer: 'rgba(102, 24, 20, 1)',  // Darkest Red
  errorContainerSoft: 'rgba(204, 47, 40, 0.3)',  // Dark Red with 30% opacity

  regular: 'rgba(255, 204, 0, 1)',  // Amber Yellow
  onRegular: 'rgba(102, 82, 0, 1)',  // Darkest Yellow
  onRegularContainer: 'rgba(255, 244, 204, 1)',  // Pale Yellow
  regularContainer: 'rgba(102, 82, 0, 1)',  // Darkest Yellow
  regularContainerSoft: 'rgba(255, 204, 0, 0.3)',  // Amber Yellow with 30% opacity

  success: 'rgba(50, 160, 90, 1)',  // Medium Dark Green
  onSuccess: 'rgba(230, 255, 240, 1)',  // Very Pale Green
  onSuccessContainer: 'rgba(210, 255, 220, 1)',  // Pale Green
  successContainer: 'rgba(10, 75, 35, 1)',  // Very Dark Green
  successContainerSoft: 'rgba(50, 160, 90, 0.3)',  // Medium Dark Green with 30% opacity

  fire: 'rgba(224, 132, 0, 1)',  // Orange
  onFire: 'rgba(255, 250, 237, 1)',  // Yellow
  onFireContainer: 'rgba(255, 242, 204, 1)',  // Light Yellow
  fireContainer: 'rgba(153, 51, 0, 1)',  // Reddish Orange
  fireContainerSoft: 'rgba(224, 132, 0, 0.3)',  // Orange with 30% opacity

  outline: 'rgba(60, 60, 60, 1)',  // Medium Dark Grey
  outlineFocus: 'rgba(127, 127, 127, 1)',  // Light Medium Grey
  outlineVariant: 'rgba(89, 89, 89, 1)',  // Medium Grey
};

export default DarkColors;