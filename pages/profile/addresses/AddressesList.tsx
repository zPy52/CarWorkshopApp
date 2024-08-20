import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Insets from "../../../constants/insets";
import { useTheme } from "../../../hooks/theme";
import ChevronBack from "../../../components/shared/ChevronBack";
import AddressSnippet from "../../../components/profile/addresses/AddressSnippet";
import { FlatList } from "react-native-gesture-handler";
import AddAddressSnippet from "../../../components/profile/addresses/AddAddressSnippet";

type Props = {};

export default function AddressesListPage({}: Props) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    title: {
      textAlign: "left",
      alignSelf: "flex-start",
      paddingTop: Insets.screenMarginLarge,
      paddingHorizontal: Insets.screenMarginMedium,
      paddingBottom: Insets.large,
    },
  });

  return (
    <SafeAreaView style={styles.main}>
      <ChevronBack />

      <FlatList
        data={addresses}
        keyExtractor={({ id }) => `fltlst-addrs-${id}`}
        renderItem={({ item, index }) => {
          if (index === 0) {
            return (
              <Text style={[theme.text.headlineLarge, styles.title]}>
                Tus direcciones
              </Text>
            );
          } else if (index === addresses.length - 1) {
            return <AddAddressSnippet />;
          }

          return (
            <View
              style={{
                paddingBottom: Insets.large,
                paddingHorizontal: Insets.screenMarginMedium,
              }}
            >
              <AddressSnippet
                name={item.name}
                street={item.street}
                state={item.state}
                zip={item.zip}
                country={item.country}
                isDefault={item.isDefault}
              />
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const addresses = [
  {id: "starting"},
  {
    id: "adsdsadad",
    name: "Antonio Peña Peña",
    street: "C/ Erasmo de Rotterdam, 3-5, D-400",
    state: "Madrid",
    zip: "28049",
    country: "España",
    isDefault: true,
  },
  {
    id: "ads",
    name: "El Rey",
    street: "Palacio de La Zarzuela",
    state: "Carretera de El Pardo s/n, Madrid",
    zip: "28071",
    country: "España",
    isDefault: false,
  },
  {id:"ending"},
];
