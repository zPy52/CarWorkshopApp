import React from "react";
import HomeCard from "../../components/home/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../../hooks/theme";
import { ScrollView } from "react-native-gesture-handler";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";
import WrapView from "../../components/shared/WrapView";
import SwipeButton from '../../components/shared/SwipeButton';

const HomeStation = () => {
      // Array de Hashes
      const data = [
        { Text:"", ImageURL: StaticImages.detailedIcons.tyre},
        { Text:"", ImageURL: StaticImages.detailedIcons.oil},
        { Text:"", ImageURL: StaticImages.detailedIcons.shockAbsorber},
        { Text:"", ImageURL: StaticImages.detailedIcons.timingBelt},
    ]


  const screenWidth = Dimensions.get("window").width;
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    mainContainer: {
      marginTop: Insets.screenMarginLarge, // Margen superior grande
      backgroundColor: theme.colors.background, // Establece de color principal usando el color de Background
      paddingHorizontal: Insets.screenMarginMedium, // Relleno a los lados
    },
    text: {
      color: theme.colors.onBackground
    },

    primaryElement: {
      width: screenWidth - Insets.screenMarginMedium * 2, // Ancho del elemento primario
      height: Insets.layoutLarge + Insets.layoutSmall,// Altura del elemento primario
      backgroundColor: "pink",
    },
    secondaryElement: {
      width: screenWidth - Insets.screenMarginMedium * 2,
      height: Insets.layoutLarge,
    },
    element: {
      width: screenWidth * 0.5 - Insets.screenMarginMedium - Insets.medium,
      height: Insets.layoutLarge,
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <SwipeButton navigateTo="/" data={data}
         style={{width: screenWidth - Insets.screenMarginMedium * 2,
         height: Insets.layoutLarge*1.25, backgroundColor:'pink'}}>
         </SwipeButton>
        <WrapView
          horizontalSpacing={ Insets.screenMarginMedium }
          verticalSpacing={ Insets.screenMarginMedium }
          >
          {[
            <HomeCard
              key={"aysduydas"}
              navigateTo="/"
              title="Neumáticos"
              imageSource={ StaticImages.detailedIcons.wheel }
              style={styles.element}/>,
          ]}
        </WrapView>
      </ScrollView>
    </SafeAreaView>
  );
};


export default HomeStation;
