import { ImageSourcePropType } from "react-native";

interface StaticImagesType {
  onboarding: {
    [key: string]: ImageSourcePropType
  },
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
  onboarding: {
    itv: require('../assets/images/onboarding/itv.png'),
    workshop: require('../assets/images/onboarding/workshop.png'),
    fromHome: require('../assets/images/onboarding/from_home.png'),
    tyresAndFixes: require('../assets/images/onboarding/tyres_and_fixes.png'),
    customerService: require('../assets/images/onboarding/customer_service.png'),
  },
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