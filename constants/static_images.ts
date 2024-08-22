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
    luces: require('../assets/images/detailed_icons/luces.png'),
    pintura: require('../assets/images/detailed_icons/pintura.png'),
  },
  real: {
    callCenter: require('../assets/images/real/callCenter.png'),
    callCenter2: require('../assets/images/real/callcenter1.jpg'),
  },
  kitImages: {
    distrIm: require("../assets/images/kits/distr.jpg"),
    brakeIm: require("../assets/images/kits/brake2.jpg"),
    ITVIm: require("../assets/images/kits/itv.jpg"),
    diagnosis: require("../assets/images/kits/diagnosis.png"),
    neumaticos: require("../assets/images/kits/neumaticos.png"),
    aceite: require("../assets/images/kits/aceite.png"),
    pintura: require("../assets/images/kits/pintura.png"),
  }
};

export default StaticImages;
