import React from "react";
import { Slot } from "expo-router";
import { ThemeProvider } from "../styles/provider/provider";
import { View } from "react-native";
import { useTheme } from "../hooks/theme";

function Scaffold({ children }) {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      { children }
    </View>
  )
}

export default function AppLayout() {
  return (
    <ThemeProvider>
      <Scaffold>
        <Slot />
      </Scaffold>
    </ThemeProvider>
  )
}