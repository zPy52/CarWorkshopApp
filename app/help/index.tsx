import React, { useMemo, useRef } from "react";
import { StyleSheet, Dimensions, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import TitleBar from "../../components/home/TitleBar";


const HelpStation = () => {

    const { theme } = useTheme();
    const screenWidth = Dimensions.get("window").width;

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
            <ScrollView>
                <TitleBar carId="1234FFF"></TitleBar>
                <Text style={[theme.text.headlineSmall, { fontWeight: "600", alignSelf: 'center', marginTop: Insets.screenMarginMedium}]}>Obtener ayuda de CWapp</Text>
            </ScrollView>
        </SafeAreaView>
    )
};

export default HelpStation;