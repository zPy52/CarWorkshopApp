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
  icons: {},
  detailedIcons: {
    wheel: require('../assets/images/detailed_icons/wheel.png'),
  },
  real: {
    tyre: require('../assets/images/real/tyre.png'),
  }
};

export default StaticImages;