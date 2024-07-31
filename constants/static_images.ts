import { ImageSourcePropType } from "react-native";

interface StaticImagesType {
  onboarding: {
    [key: string]: ImageSourcePropType;
  };
  icons: {
    [key: string]: ImageSourcePropType;
  };
  detailedIcons: {
    [key: string]: ImageSourcePropType;
  };
  real: {
    [key: string]: ImageSourcePropType;
  };
  promo: {
    [key: string]: ImageSourcePropType
  };
  carTypes: {
    [key: string]: ImageSourcePropType
  };
  kitImages: {
    [key: string]: ImageSourcePropType
  };
  other: {
    [key: string]: ImageSourcePropType
  };
  carTypes: {
    [key: string]: ImageSourcePropType
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
  icons: {
    tyre: require('../assets/images/icons/tyre.png'),
    clutch: require('../assets/images/icons/clutch.png'),
    carRepair: require('../assets/images/icons/car-repair.png'),
    engineOil: require('../assets/images/icons/engine-oil.png'),
    shockAbsorbers: require('../assets/images/icons/shock-absorbers.png'),
    user: require("../assets/images/icons/Buser.png"),
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
  promo: {
    pr1: require("../assets/images/promoexamples/promo1prueba.png"),
    pr2: require("../assets/images/promoexamples/promo2prueba.png"),
    pr3: require("../assets/images/promoexamples/promo3prueba.png"),
    pr4: require("../assets/images/promoexamples/promo4prueba.png"),
  },
  carTypes: {
    allTerrain: require("../assets/images/CarTypes/allTerrain.png"),
    boxTruck: require("../assets/images/CarTypes/boxTruck.png"),
    car: require("../assets/images/CarTypes/car.png"),
    raceCar: require("../assets/images/CarTypes/raceCarBw.png"),
    raceCarColoured: require("../assets/images/CarTypes/raceCarColoured.png"),
    scarabTypeShit: require("../assets/images/CarTypes/scarabTypeShit.png"),
    taxi: require("../assets/images/CarTypes/taxi.png"),
    van: require("../assets/images/CarTypes/van.png")
  },
  kitImages: {
    distrIm: require("../assets/images/kits/distr.jpg"),
    brakeIm: require("../assets/images/kits/brake2.jpg"),
    ITVIm: require("../assets/images/kits/itv.jpg"),
  }
};

export default StaticImages;
