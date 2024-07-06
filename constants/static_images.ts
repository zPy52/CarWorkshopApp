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
  },
  real: {
    tyre: require('../assets/images/real/tyre.png'),
  }
};

export default StaticImages;