import { StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../../hooks/theme";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyAddressScreen from "../../../pages/profile/addresses/Empty";
import AddressesListPage from "../../../pages/profile/addresses/AddressesList";

type Props = {};

export default function AddressesPage({}: Props) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({});

  if (true) {
    return <AddressesListPage />;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={theme.text.headlineMedium}>Domicilios</Text>
        <Text
          style={[theme.text.bodyLarge, { color: theme.colors.surfaceVariant }]}
        >
          Añada, elimine o modifique sus direcciones de recogida y entrega del vehículo, así como sus direcciones de facturación.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
