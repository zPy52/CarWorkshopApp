import Colors from "./colors";

interface TextStyle {
  fontSize: number;
  fontWeight: '400' | '500';
  lineHeight: number;
  color: string;
}

interface TextThemeInterface {
  displayLarge: TextStyle;
  displayMedium: TextStyle;
  displaySmall: TextStyle;
  headlineLarge: TextStyle;
  headlineMedium: TextStyle;
  headlineSmall: TextStyle;
  titleLarge: TextStyle;
  titleMedium: TextStyle;
  titleSmall: TextStyle;
  labelLarge: TextStyle;
  labelMedium: TextStyle;
  labelSmall: TextStyle;
  bodyLarge: TextStyle;
  bodyMedium: TextStyle;
  bodySmall: TextStyle;
}

const DarkTextTheme: TextThemeInterface = {
  displayLarge: {
    fontSize: 57,
    fontWeight: '400',
    lineHeight: 64,
    color: Colors.onBackground,
  },
  displayMedium: {
    fontSize: 45,
    fontWeight: '400',
    lineHeight: 52,
    color: Colors.onBackground,
  },
  displaySmall: {
    fontSize: 36,
    fontWeight: '400',
    lineHeight: 44,
    color: Colors.onBackground,
  },
  headlineLarge: {
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 40,
    color: Colors.onBackground,
  },
  headlineMedium: {
    fontSize: 28,
    fontWeight: '400',
    lineHeight: 36,
    color: Colors.onBackground,
  },
  headlineSmall: {
    fontSize: 24,
    fontWeight: '400',
    lineHeight: 32,
    color: Colors.onBackground,
  },
  titleLarge: {
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 28,
    color: Colors.onBackground,
  },
  titleMedium: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: Colors.onBackground,
  },
  titleSmall: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.onBackground,
  },
  labelLarge: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: Colors.onBackground,
  },
  labelMedium: {
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.onBackground,
  },
  labelSmall: {
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 16,
    color: Colors.onBackground,
  },
  bodyLarge: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: Colors.onBackground,
  },
  bodyMedium: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: Colors.onBackground,
  },
  bodySmall: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: Colors.onBackground,
  },
};

export default DarkTextTheme;