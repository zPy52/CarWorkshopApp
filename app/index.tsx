import { Text, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useTheme } from "../hooks/theme";
import Insets from "../constants/insets";
import Clickable from "../components/shared/Clickable";
import { Provider } from "react-redux";
import store from "../manager/store";

// To run in Expo Go: npx expo start --tunnel
//   -> Dependencies: npm i -g expo-cli
//   -> If npm dependencies go wild, run: npx expo install --fix
export default function App() {
  const { theme, toggleTheme } = useTheme();

  if (theme.mode === "dark") {
    toggleTheme();
  }

  return (
    <Provider store={store}>
      <SafeAreaView>
        <View
          style={{
            marginLeft: Insets.screenMarginMedium,
            marginTop: Insets.screenMarginLarge,
            alignItems: "flex-start",
          }}
        >
          <Clickable
            onPress={() => {
              router.navigate("/colors");
            }}
            style={{ alignItems: "center" }}
          >
            <Text style={{ color: theme.colors.onBackground }}>
              Ver color roles
            </Text>
          </Clickable>
          <View style={{ height: 20 }}></View>
          <Clickable
            onPress={() => {
              router.navigate("/home");
            }}
            style={{ alignItems: "center" }}
          >
            <Text style={{ color: theme.colors.onBackground }}>
              Navega a la home
            </Text>
          </Clickable>
          <Clickable
            onPress={() => {
              router.navigate("/onboarding");
            }}
            style={[{ paddingTop: 20 }, { alignItems: "center" }]}
          >
            <Text style={{ color: theme.colors.onBackground }}>
              Navega al onboarding
            </Text>
          </Clickable>
        </View>
      </SafeAreaView>
    </Provider>
  );
}
