import React, { useMemo, useState } from "react";
import { Modal } from "react-native"
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
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";


export default function ModalHelp ({modalVisible, setModalVisible}) {
    // TODO: EXISTE ALGUN PROP QUE SE PUEDA PASAR PARA QUE SE MUESTRE EL MODAL?

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
              backgroundColor: "rgba(0, 0, 0, 0.5)",
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
              borderBottomColor: theme.colors.onBackground,
              borderBottomWidth: 1,
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
              backgroundColor: "green",
              borderRadius: Insets.small,
            },
            modalOptionButtonSecondary: {
              marginLeft: Insets.small,
              backgroundColor: theme.colors.surfaceContainerLow,
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
          }),
        [theme.colors, width]
      );

    return (
    <Modal
      visible={modalVisible}
      animationType="fade"
      transparent={true}
      onRequestClose={() => setModalVisible(false)} >
      <View style={styles.modalContainer}>
          <Animated.View style={[styles.modalContent, animatedStyle]}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Servicio al Cliente</Text>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.modalCloseButton}
              >
                <Ionicons
                  name="close"
                  size={24}
                  color={theme.colors.onBackground}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalOptionContainer}>
              <View>
                <Text style={styles.modalOptionText}>
                  Contacto de Whatsapp
                </Text>
                <Text style={styles.modalOptionSecondaryText}>
                  De lunes a viernes
                </Text>
                <Text style={styles.modalOptionSecondaryText}>
                  9h - 19h
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => router.navigate("/help")}
                style={styles.modalOptionButton}
              >
                <Ionicons
                  name="logo-whatsapp"
                  size={30}
                  color="white"
                  style={styles.modalOptionIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalOptionContainer}>
              <View>
                <Text style={styles.modalOptionTextSecondary}>
                  911 98 68 40
                </Text>
                <Text style={styles.modalOptionSecondaryText}>
                  De lunes a viernes
                </Text>
                <Text style={styles.modalOptionSecondaryText}>
                  9h - 19h
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => router.navigate("/help")}
                style={styles.modalOptionButtonSecondary}
              >
                <Ionicons
                  name="call-outline"
                  size={30}
                  color={theme.colors.onBackground}
                  style={styles.modalOptionIcon}
                />
              </TouchableOpacity>
            </View>
          </Animated.View>
      </View>
    </Modal>
  );
}