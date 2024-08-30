import React from "react";
import { Text, View } from "react-native";
import ProfileSection from "../../components/profile/Section";
import { useTheme } from "../../hooks/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import Insets from "../../constants/insets";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import BottomBar from "../../components/shared/BottomBar";
import ChevronBack from "../../components/shared/ChevronBack";
import { ScrollView } from "react-native-gesture-handler";

type Props = {};

export default function ProfilePage({}: Props) {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        backgroundColor: theme.colors.background,
      }}
    >
      <ScrollView>
      <Text style={[theme.text.headlineSmall,
        { textAlign: "left",
          alignSelf: "flex-start",
          paddingTop: Insets.screenMarginMedium,
          paddingHorizontal: Insets.screenMarginMedium,
          paddingBottom: Insets.large,
            }]}>
          Tu Cuenta
      </Text>
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
              name="location-outline"
              size={Insets.icon}
              color={theme.colors.onBackground}
            />
          }
          title="Domicilios"
          description="Añada, elimine o modifique sus direcciones de recogida y entrega del vehículo, así como sus direcciones de facturación."
          onPress={() => {
            router.navigate("/profile/addresses");
          }}
        />
        <ProfileSection
          icon={
            <Ionicons
              name="card-outline"
              size={Insets.icon}
              color={theme.colors.onBackground}
            />
          }
          title="Métodos de pago"
          description="Añada, elimine o modifique sus métodos de pago."
          onPress={() => {}}
        />
        <ProfileSection
          icon={
            <Ionicons
              name="car-outline"
              size={Insets.icon}
              color={theme.colors.onBackground}
            />
          }
          title="Garaje"
          description="Elimine o modifique sus vehículos."
          onPress={() => {
            router.navigate("/garage");
          }}
        />

        <View>
          <Text style={[theme.text.headlineSmall,
            { textAlign: "left",
              alignSelf: "flex-start",
              paddingTop: Insets.screenMarginMedium,
              paddingHorizontal: Insets.screenMarginMedium,
              paddingBottom: Insets.large,
                }]}>
            Contacto
          </Text>
          <ProfileSection
            icon={
              <Ionicons
                name="chatbubbles-outline"
                size={Insets.icon}
                color={theme.colors.onBackground} />
            }
            title="Te Ayudamos"
            onPress={() => {
              router.navigate("/help");
            }}>
            </ProfileSection>
        </View>
        <View>
          <Text style={[theme.text.headlineSmall,
            { textAlign: "left",
              alignSelf: "flex-start",
              paddingTop: Insets.screenMarginMedium,
              paddingHorizontal: Insets.screenMarginMedium,
              paddingBottom: Insets.large,
                }]}>
            Legal
          </Text>
          <ProfileSection
            icon={
              <Ionicons
                name="document-text-outline"
                size={Insets.icon}
                color={theme.colors.onBackground} />
            }
            title="Términos y condiciones"
            onPress={() => {}}>
          </ProfileSection>
          <ProfileSection
            icon={
              <Ionicons
                name="newspaper-outline"
                size={Insets.icon}
                color={theme.colors.onBackground} />
            }
            title="Política de privacidad"
            onPress={() => {}}>
          </ProfileSection>
        </View>
      </ScrollView>
      <BottomBar currentScreen="perfil" style={{position: 'absolute', bottom: 0}}/>
    </SafeAreaView>
  );
}
