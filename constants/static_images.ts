import { ImageSourcePropType } from "react-native";

interface StaticImagesType {
  onboarding: {
    [key: string]: ImageSourcePropType;
  };
  detailedIcons: {
    [key: string]: ImageSourcePropType;
  };
  real: {
    [key: string]: ImageSourcePropType;
  };
  kitImages: {
    [key: string]: ImageSourcePropType
  };
}

const StaticImages: StaticImagesType = {
  onboarding: {
    itv: require("../assets/images/onboarding/itv.png"),
    workshop: require("../assets/images/onboarding/workshop.png"),
    fromHome: require("../assets/images/onboarding/from_home.png"),
    tyresAndFixes: require("../assets/images/onboarding/tyres_and_fixes.png"),
    customerService: require("../assets/images/onboarding/customer_service.png"),
  },
  detailedIcons: {
    brake: require('../assets/images/detailed_icons/disc-brake.png'),
    tyre:  require('../assets/images/detailed_icons/rueda.png'),
    engine:  require('../assets/images/detailed_icons/motor.png'),
    oil:  require('../assets/images/detailed_icons/aceite.png'),
    shockAbsorber:  require('../assets/images/detailed_icons/amortiguador2.png'),
    timingBelt:  require('../assets/images/detailed_icons/correa.png'),
  },
  real: {
    callCenter: require('../assets/images/real/callCenter.png'),
  },
  kitImages: {
    distrIm: require("../assets/images/kits/distr.jpg"),
    brakeIm: require("../assets/images/kits/brake2.jpg"),
    ITVIm: require("../assets/images/kits/itv.jpg"),
    pintura: require("../assets/images/kits/pintura.png"),
    diagnosis: require("../assets/images/kits/diagnosis.png"),
  }
};

export default StaticImages;
