import React, { useMemo, useRef } from "react";
import { StyleSheet, Dimensions, Text, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import TitleBar from "../../components/home/TitleBar";
import StaticImages from "../../constants/static_images";

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
        secondaryContainer: {
          opacity: 0.8,
          flexDirection: 'row',
          justifyContent: 'center',
        },
        buttonContainer: {
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: Insets.screenMarginLarge,
        },
        IconButton: {
          width: 25,
          height: 25,
        },
        Icon : {
          width: 20,
          height: 20
        },

        Button: {
          width: screenWidth - Insets.screenMarginMedium * 2.1,
          height: 80,
          borderRadius: Insets.large,
          margin: Insets.large,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.primary,
        },
        PrimaryText: {
          fontWeight: "900",
          marginTop: Insets.screenMarginMedium,
          alignSelf: 'center',
        },
        SecondaryText: {
          alignSelf: 'center',
          marginTop: Insets.screenMarginMedium,
          padding: Insets.medium,
          textAlign: 'center',
        },
        TertiaryText: {
          alignSelf: 'center',
          marginLeft: Insets.medium,
          color: theme.colors.primaryVariant,
        },
        }),
      [theme.colors.background, theme.colors.onBackground, theme.colors.tertiary, theme.colors.primary, screenWidth]
      );

    return (
      <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <TitleBar carId="1234FFF"></TitleBar>
        <Text style={[theme.text.headlineMedium, styles.PrimaryText]}>Obtener ayuda de CWapp</Text>
        <Text style={[theme.text.titleMedium, styles.SecondaryText]}>Estamos aquí para ayudarte con cualquier problema o pregunta que tengas.</Text>
        <View style={styles.secondaryContainer}>
          <Image source={StaticImages.icons.lightblueclock} style={styles.Icon}></Image>
          <Text style={[theme.text.bodySmall, styles.TertiaryText]}>Horario de Atención: 9:00 AM - 7:00 PM</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.Button}>
            <Image source={StaticImages.icons.phone} style={styles.IconButton}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Image source={StaticImages.icons.email} style={styles.IconButton}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Image source={StaticImages.icons.whatsapp} style={styles.IconButton}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </SafeAreaView>
    )
};

export default HelpStation;