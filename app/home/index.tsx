import React, { useMemo, useRef } from "react";
import { StyleSheet, Dimensions, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import StaticImages from "../../constants/static_images";
import HomeCard from "../../components/home/HomeCard";
import WrapView from "../../components/shared/WrapView";
import SwipeButton from '../../components/home/SwipeButton';
import TitleBar from '../../components/home/TitleBar';
import BigCard from "../../components/home/BigCard";
import Insets from "../../constants/insets";

const HomeStation = () => {
      // Array de Hashes
      const data = [
        { text: "", imageURL: StaticImages.other.pr1 },
        { text: "", imageURL: StaticImages.other.pr2 },
        { text: "", imageURL: StaticImages.other.pr3 },
        { text: "", imageURL: StaticImages.other.pr4 },
      ];

  const screenWidth = Dimensions.get("window").width;
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        mainContainer: {
          marginTop: Insets.screenMarginMedium, // Margen superior grande
          backgroundColor: theme.colors.background, // Establece de color principal usando el color de Background
          paddingHorizontal: Insets.screenMarginMedium, // Relleno a los lados
        },
        SwipeButton: {
          width: screenWidth - Insets.screenMarginMedium * 2,
          height: Insets.layoutLarge*1.25
        },
        text: {
          color: theme.colors.onBackground,
          fontSize: 18,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 20
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
        scrollViewContent: {
          paddingBottom: Insets.screenMarginMedium,
        },
      }),
    [theme.colors.background, theme.colors.onBackground, theme.colors.tertiary, theme.colors.primary, screenWidth]
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TitleBar></TitleBar>

      <SwipeButton navigateTo="/" data={data.map(item => ({ text: item.text, ImageURL: item.imageURL }))}
        style={styles.SwipeButton}>
      </SwipeButton>

      <Text style={styles.text}>Nuestros Servicios</Text>

      <WrapView
        horizontalSpacing={ Insets.large }
        verticalSpacing={ Insets.screenMarginMedium }
        >
        {[
          <HomeCard
            key={"k1"}
            navigateTo="/"
            title="Neumáticos"
            imageSource={ StaticImages.detailedIcons.tyre }
            style={styles.element} />,

          <HomeCard
            key={"k2"}
            navigateTo="/"
            title="Repuestos"
            imageSource={ StaticImages.detailedIcons.shockAbsorber}
            style={styles.element} />,

          <HomeCard
            key={"k3"}
            navigateTo="/"
            title="Aceite"
            imageSource={ StaticImages.detailedIcons.oil }
            style={styles.element} />,

          <HomeCard
            key={"k4"}
            navigateTo="/"
            title="Otros"
            imageSource={ StaticImages.carTypes.van }
            style={styles.element} />,

          <HomeCard
            key={"k5"}
            navigateTo="/"
            title="Amortiguador"
            imageSource={ StaticImages.detailedIcons.wheel }
            style={styles.element} />,

          <HomeCard
            key={"k6"}
            navigateTo="/"
            title="Correas"
            imageSource={ StaticImages.carTypes.allTerrain }
            style={styles.element} />,

        ]}
      </WrapView>

      <Text style={styles.text}>Packs de Mantenimiento</Text>

      <WrapView
        horizontalSpacing={ Insets.screenMarginLarge }
        verticalSpacing={ Insets.screenMarginMedium }
        >{[
          <BigCard
            key={"bc1"}
            navigateTo="/"
            title="PreITV + ITV"
            imageSource={ StaticImages.kitImages.ITVIm }
            style={styles.secondaryElement} />,

          <BigCard
            key={"bc2"}
            navigateTo="/"
            title="Kit de Distribución"
            imageSource={ StaticImages.kitImages.distrIm}
            style={styles.secondaryElement} />,

          <BigCard
            key={"bc3"}
            navigateTo="/"
            title="Kit de Frenos"
            imageSource={ StaticImages.kitImages.brakeIm }
            style={styles.secondaryElement} />,

        ]}
        </WrapView>
      </ScrollView>
    </SafeAreaView>
  );
}


  export default HomeStation;