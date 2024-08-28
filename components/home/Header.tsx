import React, { useMemo } from "react";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import Insets from "../../constants/insets";

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

export default function Header({ selectedCar }) {
  console.log(selectedCar);
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const carName = selectedCar ? selectedCar.name : "Escriba una matrícula";

  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          paddingTop: Insets.screenMarginLarge,
          backgroundColor: theme.colors.background,
        },
        secondaryTitle: {
          textAlign: "left",
          alignSelf: "flex-start",
          paddingTop: Insets.medium,
        },
        headerCarInfo: {
          flexDirection: "row",
          alignItems: "center",
          borderBottomColor: theme.colors.surfaceContainerLowest,
          borderBottomWidth: 1,
          paddingHorizontal: Insets.screenMarginMedium,
          paddingBottom: Insets.large,
        },
        headerIconCarContainer: {
          flexGrow: 0,
          flexShrink: 1,
          marginRight: Insets.medium,
          paddingTop: Insets.medium,
          alignContent: "space-around",
        },
        headerSecondaryContainer: {},
        headerMatriculaButton: {
          flexGrow: 0,
          flexShrink: 1,
          paddingTop: Insets.medium,
          marginLeft: "auto",
        },
      }),
    [theme.colors, width]
  );

  return (
    <View style={styles.header}>
      <View style={styles.headerCarInfo}>
        <View style={styles.headerIconCarContainer}>
          <Ionicons
            name="car-sport-outline"
            size={Insets.screenMarginLarge}
            color={theme.colors.primary}
          />
        </View>
        <View style={styles.headerSecondaryContainer}>
          <Text style={[theme.text.titleLarge, styles.secondaryTitle]}>
            Tu coche:
          </Text>
          <Text style={[theme.text.titleMedium, { fontWeight: "bold" }]}>
            {carName}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.headerMatriculaButton}
          onPress={() => {
            router.navigate("/garage");
          }}
        >
          <Ionicons
            name="chevron-forward"
            size={Insets.icon}
            color={theme.colors.onBackground}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}