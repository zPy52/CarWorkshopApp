import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Insets from "../../../constants/insets";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../hooks/theme";
import StdButton from "../../shared/StdButton";
import ChevronBack from "../../shared/ChevronBack";

type Props = {};

export default function EmptyAddressScreen({}: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      alignItems: "center",
      justifyContent: "flex-start",
    },
    imageView: {
      alignItems: "center",
      paddingTop: Insets.layoutLarge,
      marginHorizontal: Insets.screenMarginMedium,
    },
    buttonView: {
      width: width,
      flex: 1,
      position: "absolute",
      bottom: 0,
      padding: Insets.screenMarginMedium,
      paddingBottom: Insets.screenMarginLarge,
    },
  });

  return (
    <SafeAreaView style={styles.main}>
      <ChevronBack />
      <View style={styles.imageView}>
        <Ionicons
          name="location-outline"
          size={Insets.layoutLarge}
          color={theme.colors.onBackground}
        />
        <Text
          style={[
            theme.text.titleLarge,
            { textAlign: "center" },
            { paddingTop: Insets.large },
          ]}
        >
          Añada una dirección. Podrá usarla para indicarnos dónde recoger su
          vehículo o dónde devolverlo.
        </Text>
      </View>

      <View style={styles.buttonView}>
        <StdButton text="Añadir dirección" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
}
