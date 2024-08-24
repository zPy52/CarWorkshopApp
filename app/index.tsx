import { Image, ScrollView, Text, View } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { useTheme } from "../hooks/theme";
import Insets from "../constants/insets";
import Clickable from "../components/shared/Clickable";
import StaticImages from "../constants/static_images";

// To run in Expo Go: npx expo start --tunnel
//   -> Dependencies: npm i -g expo-cli
//   -> If npm dependencies go wild, run: npx expo install --fix
export default function App() {
  const { theme, toggleTheme } = useTheme();

  if (theme.mode === "dark") {
    toggleTheme();
  }

  useEffect(() => {
    const images = [
      StaticImages.onboarding.fromHome,
      StaticImages.onboarding.tyresAndFixes,
      StaticImages.onboarding.workshop,
      StaticImages.onboarding.itv,
      StaticImages.onboarding.customerService,
    ];

    for (let i = 0; i < images.length; i++) {
      Image.prefetch(Image.resolveAssetSource(images[i]).uri);
    }
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          marginLeft: Insets.screenMarginMedium,
          marginTop: Insets.screenMarginLarge,
        }}
      >
        {clickables.map((item, index) => (
          <View
            key={`main-compt-lst-${index}`}
            style={{ alignSelf: "flex-start" }}
          >
            {index > 0 && <View style={{ height: 20 }} />}
            <Clickable
              onPress={() => {
                router.navigate(item.route);
              }}
              style={{ alignItems: "center" }}
            >
              <Text style={{ color: theme.colors.onBackground }}>
                {item.label}
              </Text>
            </Clickable>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const clickables = [
  { label: "Ver color roles", route: "/colors" },
  { label: "Navega a la home", route: "/home" },
  { label: "Navega al onboarding", route: "/onboarding" },
  { label: "Navega al pedir teléfono", route: "/test" },
  { label: "Navega al profile", route: "/profile" },
  { label: "Navega al drawer", route: "/drawer" },
  { label: "Navega a los addresses bro", route: "/profile/addresses" },
  { label: "Navega al catálogo", route: "/products" },
  { label: "Navega al catálogo de Jose", route: "/productCatalog" },
  { label: "Navega a copy", route: "/copy" },
  { label: "Navega a garage", route: "/garage" },
];
