import React from "react";
import { Stack } from "expo-router";
import { ThemeProvider } from "../styles/provider/provider";
import { View, Text } from "react-native";
import { useTheme } from "../hooks/theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function Scaffold({ children }) {
  const { theme } = useTheme();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });
  if (!fontsLoaded) {
    return <Text style={{ color: theme.colors.onBackground }}>Loading...</Text>;
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {children}
    </View>
  );
}

export default function AppLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Scaffold>
            <Stack
              screenOptions={{
                headerShown: false,
                animation: "simple_push",
              }}
            />
          </Scaffold>
        </GestureHandlerRootView>
      </ThemeProvider>
    </Provider>
  );
}
