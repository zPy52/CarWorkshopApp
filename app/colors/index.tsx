import React, { useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../../hooks/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Clickable from "../../components/shared/Clickable";
import Insets from "../../constants/insets";

export default function ColorRoles() {
  const { theme, toggleTheme } = useTheme();

  const colors = useRef([
    {
      name: "primary",
      color: theme.colors.primary,
      textColor: theme.colors.onPrimary,
    },
    {
      name: "primaryVariant",
      color: theme.colors.primaryVariant,
      textColor: theme.colors.onPrimary,
    },
    {
      name: "onPrimary",
      color: theme.colors.onPrimary,
      textColor: theme.colors.primary,
    },
    {
      name: "onPrimaryContainer",
      color: theme.colors.onPrimaryContainer,
      textColor: theme.colors.primaryContainer,
    },
    {
      name: "primaryContainer",
      color: theme.colors.primaryContainer,
      textColor: theme.colors.onPrimary,
    },
    {
      name: "primaryContainerSoft",
      color: theme.colors.primaryContainerSoft,
      textColor: theme.colors.onPrimary,
    },

    {
      name: "secondary",
      color: theme.colors.secondary,
      textColor: theme.colors.onSecondary,
    },
    {
      name: "secondaryVariant",
      color: theme.colors.secondaryVariant,
      textColor: theme.colors.onSecondary,
    },
    {
      name: "onSecondary",
      color: theme.colors.onSecondary,
      textColor: theme.colors.secondary,
    },
    {
      name: "onSecondaryContainer",
      color: theme.colors.onSecondaryContainer,
      textColor: theme.colors.secondaryContainer,
    },
    {
      name: "secondaryContainer",
      color: theme.colors.secondaryContainer,
      textColor: theme.colors.secondary,
    },
    {
      name: "secondaryContainerSoft",
      color: theme.colors.secondaryContainerSoft,
      textColor: theme.colors.secondary,
    },

    {
      name: "tertiary",
      color: theme.colors.tertiary,
      textColor: theme.colors.onTertiary,
    },
    {
      name: "tertiaryVariant",
      color: theme.colors.tertiaryVariant,
      textColor: theme.colors.onTertiary,
    },
    {
      name: "onTertiary",
      color: theme.colors.onTertiary,
      textColor: theme.colors.tertiary,
    },
    {
      name: "onTertiaryContainer",
      color: theme.colors.onTertiaryContainer,
      textColor: theme.colors.tertiaryContainer,
    },
    {
      name: "tertiaryContainer",
      color: theme.colors.tertiaryContainer,
      textColor: theme.colors.tertiary,
    },
    {
      name: "tertiaryContainerSoft",
      color: theme.colors.tertiaryContainerSoft,
      textColor: theme.colors.tertiary,
    },

    {
      name: "background",
      color: theme.colors.background,
      textColor: theme.colors.onBackground,
    },
    {
      name: "backgroundVariant",
      color: theme.colors.backgroundVariant,
      textColor: theme.colors.onBackground,
    },
    {
      name: "onBackground",
      color: theme.colors.onBackground,
      textColor: theme.colors.background,
    },

    {
      name: "surface",
      color: theme.colors.surface,
      textColor: theme.colors.onSurface,
    },
    {
      name: "surfaceVariant",
      color: theme.colors.surfaceVariant,
      textColor: theme.colors.onSurface,
    },
    {
      name: "onSurface",
      color: theme.colors.onSurface,
      textColor: theme.colors.surface,
    },

    {
      name: "error",
      color: theme.colors.error,
      textColor: theme.colors.onError,
    },
    {
      name: "onError",
      color: theme.colors.onError,
      textColor: theme.colors.error,
    },
    {
      name: "onErrorContainer",
      color: theme.colors.onErrorContainer,
      textColor: theme.colors.errorContainer,
    },
    {
      name: "errorContainer",
      color: theme.colors.errorContainer,
      textColor: theme.colors.onError,
    },
    {
      name: "errorContainerSoft",
      color: theme.colors.errorContainerSoft,
      textColor: theme.colors.errorContainer,
    },

    {
      name: "success",
      color: theme.colors.success,
      textColor: theme.colors.onSuccess,
    },
    {
      name: "onSuccess",
      color: theme.colors.onSuccess,
      textColor: theme.colors.success,
    },
    {
      name: "onSuccessContainer",
      color: theme.colors.onSuccessContainer,
      textColor: theme.colors.successContainer,
    },
    {
      name: "successContainer",
      color: theme.colors.successContainer,
      textColor: theme.colors.onSuccess,
    },
    {
      name: "successContainerSoft",
      color: theme.colors.successContainerSoft,
      textColor: theme.colors.successContainer,
    },

    {
      name: "outline",
      color: theme.colors.outline,
      textColor: theme.colors.onSurface,
    },
    {
      name: "outlineFocus",
      color: theme.colors.outlineFocus,
      textColor: theme.colors.onSurface,
    },
    {
      name: "outlineVariant",
      color: theme.colors.outlineVariant,
      textColor: theme.colors.onSurface,
    },
  ]).current;

  return (
    <SafeAreaView>
      <Clickable onPress={toggleTheme}>
        <Text style={[{ paddingTop: Insets.large }, theme.text.titleMedium]}>
          Change mode to: ({theme.mode})
        </Text>
      </Clickable>
      <ScrollView
        style={{ marginVertical: Insets.large }}
        contentContainerStyle={styles.container}
      >
        {colors.map((colorItem) => (
          <View
            key={colorItem.name}
            style={[styles.colorBox, { backgroundColor: colorItem.color }]}
          >
            <Text style={[styles.colorText, { color: colorItem.textColor }]}>
              {colorItem.name}
            </Text>
          </View>
        ))}
        <View style={{ height: Insets.large }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Insets.large,
    flexDirection: "column",
    alignItems: "center",
  },
  colorBox: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: Insets.medium,
  },
  colorText: {
    fontSize: Insets.screenMarginMedium,
    fontWeight: "bold",
  },
});
