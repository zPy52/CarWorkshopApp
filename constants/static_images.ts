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
  carTypes: {
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
  other: {
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
  }
};

export default StaticImages;