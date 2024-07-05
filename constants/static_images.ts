import { ImageSourcePropType } from "react-native";

interface StaticImagesType {
  [key: string]: ImageSourcePropType;
}

const StaticImages: StaticImagesType = {
  wheel: require('../assets/images/wheel.png'),
};

export default StaticImages;