import React, { useMemo } from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import BottomBar from "../../components/home/BottomBar";
import HomeCard from "../../components/home/HomeCard";
import WrapView from "../../components/shared/WrapView";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";


const TyreOption = () => {
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
          fontSize: 27,
          fontWeight: "800",
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
        icon : {
          width: screenWidth * 0.5 - Insets.screenMarginMedium - Insets.medium,
          height: Insets.layoutMedium *8.5,
          backgroundColor: theme.colors.background,
          borderRadius: Insets.small,
          justifyContent: 'center', // Center vertically
          alignItems: 'center', // Center horizontally
        },
      }),
    [theme.colors.background, theme.colors.onBackground, theme.colors.tertiary, screenWidth]
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Introduccion medidas</Text>
        <TouchableOpacity 
          onPress={() => router.navigate('/profile')} //para ir a explicacion 
          style={styles.headerIcon}
        >
          <Ionicons
            name="information-circle-outline"
            size={30}
            color={theme.colors.onBackground}
          />
        </TouchableOpacity>
      </View>
      <WrapView horizontalSpacing={Insets.large} verticalSpacing={Insets.screenMarginMedium}>
      {[
            <HomeCard
              key={"k1"}
              navigateTo="/tyreMeassures" //siguiente pantalla
              title="A medida"
              imageSource={ StaticImages.detailedIcons.tyre }
              style={styles.icon} />,

            <HomeCard
              key={"k11"}
              navigateTo="/" //camara de la UI 
              title="IA"
              imageSource={ StaticImages.detailedIcons.artificialIntelligence }
              style={styles.icon} />,
          ]}
      </WrapView>

    </SafeAreaView>
  );
};

export default TyreOption;