import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from "react-native";
import React, { useMemo } from "react";
import Insets from "../../constants/insets";
import { router } from "expo-router";
import { useTheme } from "../../hooks/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

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
              name="information-circle-outline"
              size={30}
              color={theme.colors.onBackground}
            />
          </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
};
export default TyreOption;