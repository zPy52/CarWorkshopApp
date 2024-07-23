import React from "react";
import { Slot } from "expo-router";
import { ThemeProvider } from "../styles/provider/provider";
import { View, Text } from "react-native";
import { useTheme } from "../hooks/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from "@expo-google-fonts/inter";

function Scaffold({ children }) {
  const { theme} = useTheme();
  
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  });
  if (!fontsLoaded) {
    return (<View><Text>Loading...</Text></View>);
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      { children }
    </View>
  )
}

export default function AppLayout() {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Scaffold>
          <Slot />
        </Scaffold>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}