import React, { useRef } from "react";
import HomeCard from "../../components/home/HomeCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Dimensions, Text } from "react-native";
import { useTheme } from "../../hooks/theme";
import { ScrollView } from "react-native-gesture-handler";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";
import WrapView from "../../components/shared/WrapView";
import SwipeButton from '../../components/home/SwipeButton';
import TitleBar from '../../components/home/TitleBar';
import { Image } from "react-native";
import BigCard from "../../components/home/BigCard";
const HomeStation = () => {
      // Array de Hashes
      const data = [
        { Text:"", ImageURL: StaticImages.other.pr1},
        { Text:"", ImageURL: StaticImages.other.pr2},
        { Text:"", ImageURL: StaticImages.other.pr3},
        { Text:"", ImageURL: StaticImages.other.pr4},
        // { Text:"", ImageURL: StaticImages.detailedIcons.oil},
        // { Text:"", ImageURL: StaticImages.detailedIcons.shockAbsorber},
        // { Text:"", ImageURL: StaticImages.detailedIcons.timingBelt},
    ]

  const screenWidth = Dimensions.get("window").width;
  const { theme, toggleTheme } = useTheme();

  const styles = useRef(
    StyleSheet.create({
      mainContainer: {
        marginTop: Insets.screenMarginMedium, // Margen superior grande
        backgroundColor: theme.colors.background, // Establece de color principal usando el color de Background
        paddingHorizontal: Insets.screenMarginMedium, // Relleno a los lados
      },
      text: {
        color: theme.colors.onBackground
      },
      primaryElement: {
        width: screenWidth - Insets.screenMarginMedium * 1.75, // Ancho del elemento primario
        height: Insets.layoutLarge + Insets.layoutSmall,// Altura del elemento primario
      },
      secondaryElement: {
        width: screenWidth - Insets.screenMarginMedium * 1.5, // Ancho del elemento secundario
        height: Insets.layoutLarge,
        alignContent: 'stretch',
        flexDirection: 'row', // Alinea los elementos en una fila
        justifyContent: 'flex-start', // Alinea los elementos desde la izquierda
        backgroundColor : theme.colors.tertiary,
      },
      element: {
        width: screenWidth * 0.35 - Insets.screenMarginMedium - Insets.medium,
        height: Insets.layoutMedium,
        backgroundColor: theme.colors.primary,
      },
    })
  ).current;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <TitleBar></TitleBar>

        <SwipeButton navigateTo="/" data={data}
          style={{width: screenWidth - Insets.screenMarginMedium * 2,
          height: Insets.layoutLarge*1.25}}>
          </SwipeButton>

        <Text style={{color: theme.colors.onBackground, fontSize: 18 ,fontWeight: 700, marginTop: 20, marginBottom: 20}}>Nuestros Servicios</Text>
        <WrapView
          horizontalSpacing={ Insets.large }
          verticalSpacing={ Insets.screenMarginMedium }
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
              title="Amortiguador"
              imageSource={ StaticImages.detailedIcons.wheel }
              style={styles.element} />,

            <HomeCard
              key={"aysduy14da1s"}
              navigateTo="/"
              title="Correas"
              imageSource={ StaticImages.carTypes.allTerrain }
              style={styles.element} />,

          ]}
        </WrapView>

        <Text style={{color: theme.colors.onBackground,fontSize: 18 ,fontWeight: 700, marginTop: 20, marginBottom: 20}}>Packs de Mantenimiento</Text>

        <WrapView
          horizontalSpacing={ Insets.screenMarginLarge }
          verticalSpacing={ Insets.screenMarginMedium }
          >{[
            <BigCard
              key={"sdds"}
              navigateTo="/"
              title="PreITV + ITV"
              imageSource={ StaticImages.kitImages.ITVIm }
              style={styles.secondaryElement} />,

            <BigCard
              key={"aysduydaca1132s"}
              navigateTo="/"
              title="Kit de Distribución"
              imageSource={ StaticImages.kitImages.distrIm}
              style={styles.secondaryElement} />,

            <BigCard
              key={"aysduy14daava1s"}
              navigateTo="/"
              title="Kit de Frenos"
              imageSource={ StaticImages.kitImages.brakeIm }
              style={styles.secondaryElement} />,

          ]}
          </WrapView>
      </ScrollView>
    </SafeAreaView>
  );
};


  export default HomeStation;