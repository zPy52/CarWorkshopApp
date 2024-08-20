import React, { useMemo } from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import BottomBar from "../../components/home/BottomBar";

const HelpStation = () => {
  const { theme } = useTheme();
  const screenWidth = Dimensions.get("window").width;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        mainContainer: {
          flex: 1, // Esto asegura que el contenedor ocupe toda la pantalla
          backgroundColor: theme.colors.background,
          paddingHorizontal: Insets.screenMarginMedium,
        },
        scrollViewContent: {
          paddingBottom: Insets.layoutLarge, // Espacio para la BottomBar
        },
        secondaryContainer: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: Insets.screenMarginMedium,
        },
        buttonContainer: {
          marginTop: Insets.screenMarginLarge,
          alignItems: "center",
        },
        button: {
          width: screenWidth - Insets.screenMarginMedium * 2.1,
          height: 80,
          borderRadius: Insets.large,
          margin: Insets.large,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.primary,
        },
        buttonIcon: {
          fontSize: 28,
          color: theme.colors.onPrimary,
        },
        primaryText: {
          fontWeight: "900",
          marginTop: Insets.screenMarginMedium,
          alignSelf: "center",
          color: theme.colors.onBackground,
        },
        secondaryText: {
          alignSelf: "center",
          marginTop: Insets.screenMarginMedium,
          paddingHorizontal: Insets.medium,
          textAlign: "center",
          color: theme.colors.onBackground,
        },
        tertiaryText: {
          marginLeft: Insets.medium,
          color: theme.colors.primary,
        },
      }),
    [theme.colors.background, theme.colors.onBackground, theme.colors.primary, screenWidth]
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={[theme.text.headlineMedium, styles.primaryText]}>Obtener ayuda de CWA</Text>
        <Text style={[theme.text.titleMedium, styles.secondaryText]}>
          Estamos aquí para ayudarte con cualquier problema o pregunta que tengas.
        </Text>

        <View style={styles.secondaryContainer}>
          <Ionicons name="time-outline" size={20} color={theme.colors.primary} />
          <Text style={[theme.text.bodySmall, styles.tertiaryText]}>
            Horario de Atención: 9:00 AM - 7:00 PM
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Ionicons name="call-outline" style={styles.buttonIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Ionicons name="mail-outline" style={styles.buttonIcon} />
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: 'green'}]}>
            <Ionicons name="logo-whatsapp" style={styles.buttonIcon} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <BottomBar currentScreen="contacto" />
    </SafeAreaView>
  );
};

export default HelpStation;
