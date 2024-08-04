import { View } from "react-native";
import Insets from "../../constants/insets";
import { router } from "expo-router";
import Clickable from "./Clickable";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks/theme";

export default function ChevronBack() {
  const { theme } = useTheme();
  return (
    <View
      style={[
        {
          width: "100%",
          alignItems: "flex-start",
          paddingLeft: Insets.screenMarginMedium - Insets.medium,
          paddingTop: Insets.large,
        },
      ]}
    >
      <Clickable onPress={() => router.back()}>
        <View style={{ padding: Insets.medium }}>
          <Ionicons
            name="chevron-back"
            size={Insets.icon}
            color={theme.colors.onBackground}
          />
        </View>
      </Clickable>
    </View>
  );
}