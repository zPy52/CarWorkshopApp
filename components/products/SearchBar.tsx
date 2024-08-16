import React, { useMemo } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";

type Props = { placeholder: string; onSearch: () => void };

export default function SearchBar({ placeholder, onSearch }: Props) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: Insets.large,
      paddingVertical: Insets.medium,
      paddingBottom: 30,
    },
    searchBar: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.colors.background,
      borderRadius: Insets.screenMarginLarge,
      paddingHorizontal: Insets.large,
      height: Insets.layoutSmall,
      // Elevation for Android
      elevation: 5,
      // Shadow for iOS
      shadowColor: theme.colors.onBackground,
      shadowOffset: { width: 0, height: Insets.small },
      shadowOpacity: 0.2,
      shadowRadius: Insets.medium,
    },
    icon: {
      marginRight: Insets.submedium,
    },
    input: {
      width: "100%",
      flexShrink: 1,
      ...theme.text.bodyLarge,
      textAlignVertical: "center", 
      lineHeight: theme.text.bodyLarge.lineHeight - Insets.dwarf,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          size={Insets.icon}
          color={theme.colors.surfaceContainerHighest}
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.surfaceVariant}
          onSubmitEditing={onSearch}
          returnKeyType="search"
        />
      </View>
    </View>
  );
}
