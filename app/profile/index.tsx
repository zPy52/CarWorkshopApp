import { Text } from "react-native";
import ProfileSection from "../../components/profile/Section";
import { useTheme } from "../../hooks/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Insets from "../../constants/insets";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

type Props = {};

export default function ProfilePage({}: Props) {
  const { theme } = useTheme();

  console.log("we are in!");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <ProfileSection
        icon={
          <Ionicons
            name="person-circle-outline"
            size={Insets.icon}
            color={theme.colors.onBackground}
          />
        }
        title="Información personal"
        onPress={() => {}}
      />
      <ProfileSection
        icon={
          <Ionicons
            name="key-outline"
            size={Insets.icon}
            color={theme.colors.onBackground}
          />
        }
        title="Domicilios"
        description="Añada, elimine o modifique sus direcciones de recogida y entrega del vehículo, así como sus direcciones de facturación."
        onPress={() => {
          router.navigate("/");
        }}
      />
    </SafeAreaView>
  );
}
