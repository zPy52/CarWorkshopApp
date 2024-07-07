import { Text, View } from "react-native";
import { router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useTheme } from "../hooks/theme";
import Insets from "../constants/insets";
import Clickable from "../components/shared/Clickable";


// To run in Expo Go: npx expo start --tunnel
//   -> Dependencies: npm i -g expo-cli
//   -> If npm dependencies go wild, run: npx expo install --fix
export default function App() {
  const { theme } = useTheme();

  return (
    <SafeAreaView>
      <View style={{ marginLeft: Insets.screenMarginMedium, marginTop: Insets.screenMarginLarge, alignItems: 'flex-start' }}>
        <Clickable onPress={() => {router.navigate('/home');}} style={{alignItems: 'center'}}>
          <Text style={{ color: theme.colors.onBackground }}>
            Navega a la home
          </Text>
        </Clickable>
      </View>
    </SafeAreaView>
  )
}
