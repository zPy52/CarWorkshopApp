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

  // if (theme.mode === 'dark') {
  //   toggleTheme();
  // }


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
        <Clickable
          onPress={() => {
            router.navigate("/help");
          }}
          style={[{ paddingTop: 20, alignItems: "center" }]}
        >
          <Text style={{ color: theme.colors.onBackground }}>
            Navega a help
          </Text>
        </Clickable>
        <Clickable
          onPress={() => {
            router.navigate("/test");
          }}
          style={[{ paddingTop: 20, alignItems: "center" }]}
        >
          <Text style={{ color: theme.colors.onBackground }}>
            Navega al pedir telefono
          </Text>
        </Clickable>
        <Clickable
          onPress={() => {
            toggleTheme();
          }}
          style={[{ paddingTop: 20, alignItems: "center" }]}
        >
          <Text style={{ color: theme.colors.onBackground }}>
            Cambia el color
          </Text>
        </Clickable>
        <Clickable
          onPress={() => {
            router.navigate("/drawer");
          }}
          style={[{ paddingTop: 20, alignItems: "center" }]}
        >
          <Text style={{ color: theme.colors.onBackground }}>
            Ver Drawer
          </Text>
        </Clickable>
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
];
