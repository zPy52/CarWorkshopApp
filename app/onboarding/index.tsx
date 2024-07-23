import { Text, View } from "react-native";
import { router } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import Clickable from "../../components/shared/Clickable";
import TextFieldPage from "../../components/onboarding/TextFieldPage";


// To run in Expo Go: npx expo start --tunnel
//   -> Dependencies: npm i -g expo-cli
//   -> If npm dependencies go wild, run: npx expo install --fix
export default function Onboarding() {
  const { theme, toggleTheme } = useTheme();
  
  if (theme.mode == 'dark') {
    toggleTheme();
  }

  return (
    <SafeAreaView>
      <TextFieldPage />
    </SafeAreaView>
  )
}
