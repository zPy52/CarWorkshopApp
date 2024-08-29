import { ColorPaletteType } from "../types";
import Color from "../../../utils/color";

const LightColors: ColorPaletteType = {
  misc: {
    euBlue: Color.hsl(213, 100, 35),
    euText: Color.hsl(0, 0, 100),
    onDark: Color.hsl(0, 0, 15),
  },
  transparent: Color.hslo(0, 0, 0, 0),

  primary: Color.hsl(210, 100, 50),
  primaryVariant: Color.hsl(210, 100, 40),
  onPrimary: Color.hsl(210, 50, 95),
  onPrimaryContainer: Color.hsl(210, 100, 30),
  primaryContainer: Color.hsl(210, 100, 90),
  primaryContainerSoft: Color.hslo(210, 100, 90, 0.3),

  secondary: Color.hsl(270, 60, 50), // Morado sólido
  secondaryVariant: Color.hsl(270, 60, 40), // Morado más oscuro
  onSecondary: Color.hsl(270, 60, 90), // Texto claro sobre secondary
  onSecondaryContainer: Color.hsl(270, 60, 95), // Texto claro sobre secondaryContainer
  secondaryContainer: Color.hsl(270, 60, 80), // Morado suave para contenedores
  secondaryContainerSoft: Color.hslo(270, 60, 85, 0.3), // Suave para contenedores sutiles

  tertiary: Color.hsl(30, 100, 65),
  tertiaryVariant: Color.hsl(30, 100, 55),
  onTertiary: Color.hsl(0, 0, 100),
  onTertiaryContainer: Color.hsl(30, 100, 45),
  tertiaryContainer: Color.hsl(30, 100, 85),
  tertiaryContainerSoft: Color.hslo(30, 100, 85, 0.3),

  error: Color.hsl(0, 77, 48),
  onError: Color.hsl(0, 100, 87),
  onErrorContainer: Color.hsl(0, 100, 87),
  errorContainer: Color.hsl(0, 81, 24),
  errorContainerSoft: Color.hslo(0, 77, 48, 0.3),

  success: Color.hsl(142, 53, 41),
  onSuccess: Color.hsl(142, 100, 95),
  onSuccessContainer: Color.hsl(142, 100, 92),
  successContainer: Color.hsl(142, 86, 17),
  successContainerSoft: Color.hslo(142, 53, 41, 0.3),

  background: Color.hsl(0, 0, 145),
  onBackground: Color.hsl(0, 0, 10),

  surface: Color.hsl(0, 0, 86),
  surfaceVariant: Color.hsl(0, 0, 50),
  onSurface: Color.hsl(0, 0, 30),

  surfaceContainerLowest: Color.hsl(0, 0, 85),
  surfaceContainerLow: Color.hsl(0, 0, 75),
  surfaceContainer: Color.hsl(0, 0, 65),
  surfaceContainerHigh: Color.hsl(0, 0, 55),
  surfaceContainerHighest: Color.hsl(0, 0, 45),

  outline: Color.hsl(0, 0, 75),
  outlineFocus: Color.hsl(0, 0, 45),
  outlineVariant: Color.hsl(0, 0, 80),

};

export default LightColors;
