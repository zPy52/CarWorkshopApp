import { ImageSourcePropType } from "react-native";

interface StaticImagesType {
  misc: {
    [key: string]: ImageSourcePropType;
  };
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
  asegurador: {
    [key: string]: ImageSourcePropType
  };
  servicios: {
    [key: string]: ImageSourcePropType
  };
}

const StaticImages: StaticImagesType = {
  misc: {
    euLogoStars: require("../assets/images/miscellaneous/eu_logo_stars.png"),
    noResults: require("../assets/images/miscellaneous/no_results.png"),
  },
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
    mecanicoPedro: require("../assets/images/kits/mecanicoPedro.jpeg"),
    mecanicoJuan: require("../assets/images/kits/mecanicoJuan.jpeg"),
    mecanicoLuis: require("../assets/images/kits/mecanicoLuis.jpeg"),
    devolucion1: require("../assets/images/kits/devolucion1.png"),
    devolucion2: require("../assets/images/kits/devolucion2.png"),
  },
  asegurador: {
    photo: require("../assets/images/kits/asegurador.png"),
  },
  servicios: {
  aire: require("../assets/images/servicios/aire-acondicionado.png"),
  alineacion: require("../assets/images/servicios/alineacion.png"),
  amortiguador: require("../assets/images/servicios/amortiguador.png"),
  bateria: require("../assets/images/servicios/bateria.png"),
  bujia: require("../assets/images/servicios/bujia.png"),
  filtro: require("../assets/images/servicios/filtro-de-aire.png"),
  freno: require("../assets/images/servicios/freno.png"),
  aceite: require("../assets/images/servicios/aceite.png"),
  diagnosis: require("../assets/images/servicios/diagnosis.png"),
  luces: require("../assets/images/servicios/luces.png"),
  motor: require("../assets/images/servicios/motor.png"),
  pintura: require("../assets/images/servicios/pintura.png"),
  piston: require("../assets/images/servicios/piston.png"),
  polea: require("../assets/images/servicios/polea.png"),
  radiador: require("../assets/images/servicios/radiador.png"),
  neumatico: require("../assets/images/servicios/neumatico.png"),
  suspension: require("../assets/images/servicios/suspension.png"),
  turbo: require("../assets/images/servicios/turbo.png"),
  velocimetro: require("../assets/images/servicios/velocimetro.png"),
  }
};

export default StaticImages;
