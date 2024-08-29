import React, { useMemo, useState } from "react";
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
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import Modal from "react-native-modal"; // Importamos el modal deslizable

export default function ModalHelp({ modalVisible, setModalVisible }) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const translateY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const styles = useMemo(
    () =>
      StyleSheet.create({
        modalContainer: {
          flex: 1,
          justifyContent: "flex-end",
          margin: 0, // Para asegurarse de que el modal ocupe toda la pantalla
        },
        modalContent: {
          backgroundColor: theme.colors.background,
          padding: Insets.large,
          borderTopLeftRadius: Insets.large,
          borderTopRightRadius: Insets.large,
        },
        modalHeader: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: Insets.medium,
          borderBottomColor: theme.colors.outline,
          borderBottomWidth: Insets.pixel / 2,
        },
        modalHeaderText: {
          ...theme.text.titleLarge,
          color: theme.colors.onBackground,
          fontWeight: "bold",
          marginLeft: Insets.small,
        },
        modalCloseButton: {
          padding: Insets.small,
        },
        modalOptionContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: Insets.medium,
          marginLeft: Insets.small,
        },
        modalOptionButton: {
          marginLeft: Insets.small,
          backgroundColor: theme.colors.background,
          borderRadius: Insets.small,
        },
        modalOptionButtonSecondary: {
          marginLeft: Insets.small,
          backgroundColor: theme.colors.background,
          borderRadius: Insets.small,
          opacity: 0.6,
        },
        modalOptionText: {
          color: theme.colors.onBackground,
          fontSize: 18,
          fontWeight: "bold",
        },
        modalOptionTextSecondary: {
          color: theme.colors.onBackground,
          fontSize: 18,
        },
        modalOptionSecondaryText: {
          color: theme.colors.onSurface,
          fontSize: 14,
        },
        modalOptionIcon: {
          margin: Insets.submedium,
        },
        swipeIndicator: {
          width: 40,
          height: 5,
          backgroundColor: "#ccc", // Color del indicador
          borderRadius: 2.5,
          alignSelf: "center",
          marginBottom: 10, // Espacio entre el indicador y el contenido del modal
        },
      }),
    [theme.colors, width]
  );

  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={() => setModalVisible(false)}
      swipeDirection="down" // Habilita el deslizamiento hacia abajo para cerrar el modal
      onSwipeComplete={() => setModalVisible(false)}
      style={styles.modalContainer}
    >
      <Animated.View style={[styles.modalContent, animatedStyle]}>
        {/* Indicador de deslizamiento */}
        <View style={styles.swipeIndicator} />
        <View style={styles.modalHeader}>
          <Text style={styles.modalHeaderText}>Servicio al Cliente</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={styles.modalCloseButton}
          >
            <Ionicons
              name="close"
              size={24}
              color={theme.colors.surfaceContainerLow}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.modalOptionContainer}>
          <View>
            <Text style={styles.modalOptionText}>Contacto de Whatsapp</Text>
            <Text style={styles.modalOptionSecondaryText}>De lunes a viernes</Text>
            <Text style={styles.modalOptionSecondaryText}>9h - 19h</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.navigate("/help")}
            style={styles.modalOptionButton}
          >
            <Ionicons
              name="logo-whatsapp"
              size={Insets.icon}
              color="green"
              style={styles.modalOptionIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.modalOptionContainer}>
          <View>
            <Text style={styles.modalOptionTextSecondary}>911 98 68 40</Text>
            <Text style={styles.modalOptionSecondaryText}>De lunes a viernes</Text>
            <Text style={styles.modalOptionSecondaryText}>9h - 19h</Text>
          </View>
          <TouchableOpacity
            onPress={() => router.navigate("/help")}
            style={styles.modalOptionButtonSecondary}
          >
            <Ionicons
              name="call-outline"
              size={Insets.icon}
              color={theme.colors.onBackground}
              style={styles.modalOptionIcon}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
}
