import React, { useRef } from "react";
import HomeCard from "../../components/home/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Dimensions, Text } from "react-native";
import { useTheme } from "../../hooks/theme";
import { ScrollView } from "react-native-gesture-handler";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";
import WrapView from "../../components/shared/WrapView";
import SwipeButton from '../../components/shared/SwipeButton';
import TitleBar from '../../components/shared/TitleBar';

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

  const styles = useRef(
    StyleSheet.create({
      mainContainer: {
        marginTop: Insets.screenMarginLarge, // Margen superior grande
        backgroundColor: theme.colors.background, // Establece de color principal usando el color de Background
        paddingHorizontal: Insets.screenMarginMedium, // Relleno a los lados
      },
      text: {
        color: theme.colors.onBackground
      },
      primaryElement: {
        width: screenWidth - Insets.screenMarginMedium * 1.75, // Ancho del elemento primario
        height: Insets.layoutLarge + Insets.layoutSmall,// Altura del elemento primario
        backgroundColor: "pink",
      },
      secondaryElement: {
        width: screenWidth - Insets.screenMarginMedium * 1.75,
        height: Insets.layoutLarge,
      },
      element: {
        width: screenWidth * 0.35 - Insets.screenMarginMedium - Insets.medium,
        height: Insets.layoutMedium,
      },
    })
  ).current;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <TitleBar></TitleBar>

        <SwipeButton navigateTo="/" data={data}
          style={{width: screenWidth - Insets.screenMarginMedium * 2,
          height: Insets.layoutLarge*1.25, backgroundColor:  theme.colors.onBackground, marginTop: 20, padding: Insets.submedium
          ,borderRadius: Insets.small}}>
          </SwipeButton>

        <Text style={{color: "white", fontWeight: 700, marginTop: 30}}>Nuestros Servicios</Text>
        <WrapView
          horizontalSpacing={ Insets.large }
          verticalSpacing={ Insets.large }
          >
          {[
            <HomeCard
              key={"aysduydas"}
              navigateTo="/"
              title="Neumáticos"
              imageSource={ StaticImages.detailedIcons.tyre }
              style={styles.element} />,

            <HomeCard
              key={"aysduydas13rdasd"}
              navigateTo="/"
              title="Repuestos"
              imageSource={ StaticImages.detailedIcons.shockAbsorber}
              style={styles.element} />,

            <HomeCard
              key={"aysduydaasdadss13rdasd"}
              navigateTo="/"
              title="Aceite"
              imageSource={ StaticImages.detailedIcons.oil }
              style={styles.element} />,

            <HomeCard
              key={"sd"}
              navigateTo="/"
              title="Otros"
              imageSource={ StaticImages.carTypes.van }
              style={styles.element} />,

            <HomeCard
              key={"aysduyda1132s"}
              navigateTo="/"
              title="Amortiguadores"
              imageSource={ StaticImages.detailedIcons.wheel }
              style={styles.element} />,

            <HomeCard
              key={"aysduy14da1s"}
              navigateTo="/"
              title="Correas"
              imageSource={ StaticImages.carTypes.allTerrain }
              style={styles.element} />,

            <HomeCard
              key={"aysduy14da1s"}
              navigateTo="/"
              title="PreITV + ITV"
              imageSource={ StaticImages.carTypes.boxTruck}
              style={styles.secondaryElement} />,
            <HomeCard
              key={"aysduy14da1s"}
              navigateTo="/"
              title="Frenos"
              imageSource={ StaticImages.carTypes.taxi }
              style={styles.secondaryElement} />,
            <HomeCard
              key={"aysduy14da1s"}
              navigateTo="/"
              title="motor"
              imageSource={ StaticImages.carTypes.scarabTypeShit }
              style={styles.element} />,
          ]}
        </WrapView>
      </ScrollView>
    </SafeAreaView>
  );
};


  export default HomeStation;