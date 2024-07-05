interface InsetsInterface {
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

const Insets: InsetsInterface = {
  layoutLarge: 125.0,
  layoutMedium: 75.0,
  layoutSmall: 50.0,
  screenMarginLarge: 35.0,
  screenMarginMedium: 20.0,
  large: 15.0,
  medium: 10.0,
  submedium: 7.5,
  small: 5.0,
  dwarf: 3.0,
  pixel: 1.0,
  zero: 0.0,
};

export default Insets;
