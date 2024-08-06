
import React, { useMemo } from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import BottomBar from "../../components/home/BottomBar";
import HomeCard from "../../components/home/HomeCard";
import WrapView from "../../components/shared/WrapView";
import BigCard from "../../components/home/BigCard";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";

const HomeStation = () => {
  const screenWidth = Dimensions.get("window").width;
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        mainContainer: {
          flex: 1, // Asegura que el SafeAreaView ocupe toda la pantalla
          backgroundColor: theme.colors.background,
          paddingHorizontal: Insets.screenMarginMedium,
        },
        scrollViewContent: {
          paddingBottom: Insets.layoutLarge, // Espacio al final para que no se superponga el contenido con la BottomBar
        },
        header: {
          paddingTop: Insets.small,
          flexDirection: "row",
          marginBottom: Insets.medium,
        },
        headerText: {
          color: theme.colors.onBackground,
          fontSize: 30,
          fontWeight: "900",
        },
        headerIcon: {
          marginLeft: "auto",
          alignSelf: "center",
        },
        text: {
          color: theme.colors.onSurface,
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 20
        },
        element: {
          width: screenWidth * 0.35 - Insets.screenMarginMedium - Insets.medium,
          height: Insets.layoutMedium,
          backgroundColor: theme.colors.background,
          borderRadius: Insets.small,
        },
        secondaryElement: {
          width: screenWidth - Insets.screenMarginMedium * 1.5, // Ancho del elemento secundario
          height: Insets.layoutLarge,
          alignContent: 'stretch',
          flexDirection: 'row', // Alinea los elementos en una fila
          justifyContent: 'flex-start', // Alinea los elementos desde la izquierda
          backgroundColor : theme.colors.tertiary,
        },
      }),
    [theme.colors.background, theme.colors.onBackground, theme.colors.tertiary, screenWidth]
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CWA</Text>
        <TouchableOpacity
          onPress={() => router.navigate('/profile')}
          style={styles.headerIcon}
        >
          <Ionicons
            name="person-circle-outline"
            size={30}
            color={theme.colors.onBackground}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollViewContent} showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Nuestros Servicios</Text>
        <WrapView horizontalSpacing={Insets.large} verticalSpacing={Insets.screenMarginMedium}>
        {[
              <HomeCard
                key={"k1"}
                navigateTo="/tyres"
                title="Neumáticos"
                imageSource={ StaticImages.detailedIcons.tyre }
                style={styles.element} />,

              <HomeCard
                key={"k2"}
                navigateTo="/"
                title="Repuestos"
                imageSource={ StaticImages.detailedIcons.brake}
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
                title="Motor"
                imageSource={ StaticImages.detailedIcons.engine}
                style={styles.element} />,

              <HomeCard
                key={"k5"}
                navigateTo="/"
                title="Amortiguador"
                imageSource={ StaticImages.detailedIcons.shockAbsorber }
                style={styles.element} />,

              <HomeCard
                key={"k6"}
                navigateTo="/"
                title="Correas"
                imageSource={ StaticImages.detailedIcons.timingBelt}
                style={styles.element} />,

            ]}
        </WrapView>

        <Text style={[styles.text, { marginTop: 20 }]}>Packs de Mantenimiento</Text>
        <WrapView horizontalSpacing={Insets.screenMarginLarge} verticalSpacing={Insets.screenMarginMedium}>
          {[
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

      <BottomBar currentScreen="home" />
    </SafeAreaView>
  );
}

export default HomeStation;

