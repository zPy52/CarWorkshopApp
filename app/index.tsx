import { Text } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";


// To run in Expo Go: npx expo start --tunnel
//   -> Dependencies: npm i -g expo-cli
//   -> If npm dependencies go wild, run: npx expo install --fix
export default function App() {
  return (
    <SafeAreaView>
      <Link href={"/home"}>
        <Text>Navega a la home</Text>
      </Link>
    </SafeAreaView>
  )
}
