import React, { useMemo } from "react";
import { StyleSheet, Dimensions, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import StaticImages from "../../constants/static_images";
import HomeCard from "../../components/home/HomeCard";
import WrapView from "../../components/shared/WrapView";
import BigCard from "../../components/home/BigCard";
import Insets from "../../constants/insets";
import TitleBar from '../../components/home/TitleBar';

const HomeStation = () => {
  // Array de Hashes
  const data = [
    { id: "1", text: "", imageURL: StaticImages.promo.pr1 },
    { id: "11", text: "", imageURL: StaticImages.promo.pr2 },
    { id: "111", text: "", imageURL: StaticImages.promo.pr3 },
    { id: "1111", text: "", imageURL: StaticImages.promo.pr4 },
  ];

  const screenWidth = Dimensions.get("window").width;
  const { theme } = useTheme(); // toggleTheme removed as it's unused

  const styles = useMemo(
    () =>
      StyleSheet.create({
        mainContainer: {
          backgroundColor: theme.colors.background,
          paddingHorizontal: Insets.screenMarginMedium,
        },
        SwipeButton: {
          width: screenWidth - Insets.screenMarginMedium * 2,
          height: Insets.layoutLarge * 1.25,
        },
        text: {
          color: theme.colors.onBackground,
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 20,
        },
        primaryElement: {
          width: screenWidth - Insets.screenMarginMedium * 1.75,
          height: Insets.layoutLarge + Insets.layoutSmall,
        },
        secondaryElement: {
          width: screenWidth - Insets.screenMarginMedium * 1.5,
          height: Insets.layoutLarge,
          alignContent: "stretch",
          flexDirection: "row",
          justifyContent: "flex-start",
          backgroundColor: theme.colors.tertiary,
        },
        element: {
          width: screenWidth * 0.35 - Insets.screenMarginMedium - Insets.medium,
          height: Insets.layoutMedium,
          backgroundColor: theme.colors.primary,
        },
        scrollViewContent: {
          paddingBottom: Insets.layoutLarge * 4,
        },
      }),
    [
      theme.colors.background,
      theme.colors.onBackground,
      theme.colors.tertiary,
      theme.colors.primary,
      screenWidth,
    ]
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <TitleBar carId="1234FFF" />

        <Text style={styles.text}>Nuestros Servicios</Text>

        <WrapView
          horizontalSpacing={Insets.large}
          verticalSpacing={Insets.screenMarginMedium}
        >
          {[
            <HomeCard
              key={"k1"}
              navigateTo="/"
              title="Neumáticos"
              imageSource={StaticImages.detailedIcons.tyre}
              style={styles.element}
            />,
            <HomeCard
              key={"k2"}
              navigateTo="/"
              title="Repuestos"
              imageSource={StaticImages.detailedIcons.shockAbsorber}
              style={styles.element}
            />,
            <HomeCard
              key={"k3"}
              navigateTo="/"
              title="Aceite"
              imageSource={StaticImages.detailedIcons.oil}
              style={styles.element}
            />,
            <HomeCard
              key={"k4"}
              navigateTo="/"
              title="Otros"
              imageSource={StaticImages.carTypes.van}
              style={styles.element}
            />,
            <HomeCard
              key={"k5"}
              navigateTo="/"
              title="Amortiguador"
              imageSource={StaticImages.detailedIcons.wheel}
              style={styles.element}
            />,
            <HomeCard
              key={"k6"}
              navigateTo="/"
              title="Correas"
              imageSource={StaticImages.carTypes.allTerrain}
              style={styles.element}
            />,
          ]}
        </WrapView>

        <WrapView
          horizontalSpacing={Insets.screenMarginLarge}
          verticalSpacing={Insets.screenMarginMedium}
        >
          {[
            <BigCard
              key={"bc1"}
              navigateTo="../preITV+ITV"
              title="PreITV + ITV"
              imageSource={StaticImages.kitImages.ITVIm}
              style={styles.secondaryElement}
            />,
            <BigCard
              key={"bc2"}
              navigateTo="../frenos"
              title="Kit de Frenos"
              imageSource={StaticImages.kitImages.brakeIm}
              style={styles.secondaryElement}
            />,
          ]}
        </WrapView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeStation;
