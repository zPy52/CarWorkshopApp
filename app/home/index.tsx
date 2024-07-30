import React, { useRef } from "react";
import HomeCard from "../../components/home/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Dimensions } from "react-native";
import { useTheme } from "../../hooks/theme";
import { ScrollView } from "react-native-gesture-handler";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";
import WrapView from "../../components/shared/WrapView";

const HomeStation = () => {
  const screenWidth = Dimensions.get("window").width;
  const { theme } = useTheme();

  const styles = useRef(
    StyleSheet.create({
      mainContainer: {
        marginTop: Insets.screenMarginLarge, // Margen superior grande
        backgroundColor: theme.colors.background, // Establece de color principal usando el color de Background
        paddingHorizontal: Insets.screenMarginMedium, // Relleno a los lados
      },
      text: {
        color: theme.colors.onBackground,
      },

      primaryElement: {
        width: screenWidth - Insets.screenMarginMedium * 2, // Ancho del elemento primario
        height: Insets.layoutLarge + Insets.layoutSmall, // Altura del elemento primario
      },
      secondaryElement: {
        width: screenWidth - Insets.screenMarginMedium * 2,
        height: Insets.layoutLarge,
      },
      element: {
        width: screenWidth * 0.5 - Insets.screenMarginMedium - Insets.medium,
        height: Insets.layoutLarge,
      },
    })
  ).current;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <WrapView
          horizontalSpacing={Insets.screenMarginMedium}
          verticalSpacing={Insets.screenMarginMedium}
        >
          <SafeAreaView style={styles.primaryElement}>
            {/* Puedes añadir otros componentes aquí */}
          </SafeAreaView>
          {[
            <HomeCard
              key={"aysduydas"}
              navigateTo="/"
              title="Neumáticos"
              imageSource={StaticImages.detailedIcons.wheel}
              style={styles.element}
            />,

            <HomeCard
              key={"aysduydas13rdasd"}
              navigateTo="/"
              title="Repuestos"
              imageSource={StaticImages.detailedIcons.wheel}
              style={styles.element}
            />,

            <HomeCard
              key={"aysduydaasdadss13rdasd"}
              navigateTo="/"
              title="Aceite"
              imageSource={StaticImages.detailedIcons.wheel}
              style={styles.element}
            />,

            <HomeCard
              key={"sd"}
              navigateTo="/"
              title="Otros"
              imageSource={StaticImages.real.tyre}
              style={styles.element}
            />,

            <HomeCard
              key={"aysduyda1132s"}
              navigateTo="/"
              title="Big Repuestos"
              imageSource={StaticImages.detailedIcons.wheel}
              style={styles.secondaryElement}
            />,

            <HomeCard
              key={"aysduy14da1s"}
              navigateTo="/"
              title="Big Neumáticos"
              imageSource={StaticImages.real.tyre}
              style={styles.primaryElement}
            />,
          ]}
        </WrapView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeStation;
