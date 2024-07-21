import { ImageSourcePropType } from "react-native";

interface StaticImagesType {
  icons: {
    [key: string]: ImageSourcePropType
  };
  detailedIcons: {
    [key: string]: ImageSourcePropType
  };
  real: {
    [key: string]: ImageSourcePropType
  };
  other: {
    [key: string]: ImageSourcePropType
  };
}

const StaticImages: StaticImagesType = {
  icons: {
    tyre: require('../assets/images/icons/tyre.png'),
    clutch: require('../assets/images/icons/clutch.png'),
    carRepair: require('../assets/images/icons/car-repair.png'),
    engineOil: require('../assets/images/icons/engine-oil.png'),
    shockAbsorbers: require('../assets/images/icons/shock-absorbers.png'),
  },
  detailedIcons: {
    wheel: require('../assets/images/detailed_icons/wheel.png'),
    tyre:  require('../assets/images/detailed_icons/tyre.png'),
    tyreStack:  require('../assets/images/detailed_icons/tyreStack.png'),
    oil:  require('../assets/images/detailed_icons/oil.png'),
    shockAbsorber:  require('../assets/images/detailed_icons/shockAbsorber.png'),
    timingBelt:  require('../assets/images/detailed_icons/timingBelt.png'),
  },
  real: {
    tyre: require('../assets/images/real/tyre.png'),
  },
  other: {
    pr1: require("../assets/images/promo1prueba.png"),
    pr2: require("../assets/images/promo2prueba.png"),
    pr3: require("../assets/images/promo3prueba.png"),
    pr4: require("../assets/images/promo4prueba.png"),
  }
};

export default StaticImages;