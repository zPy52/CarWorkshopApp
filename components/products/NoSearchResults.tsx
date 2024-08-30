import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";
import { useTheme } from "../../hooks/theme";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function NoSearchResultsComponent() {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      marginHorizontal: Insets.screenMarginLarge,
      alignItems: "center",
    },
    image: {
      height: Insets.layoutLarge + Insets.layoutMedium,
      width: "100%",
      resizeMode: "contain",
      marginTop: Insets.screenMarginLarge,
      marginBottom: Insets.large,
    },
    text: {
      ...theme.text.bodyLarge,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Image source={StaticImages.misc.noResults} style={styles.image} />
      <Text style={styles.text}>
        Lo sentimos, no se ha encontrado ningún producto para la búsqueda
        realizada. Puedes probar con otros filtros o palabras clave.
      </Text>
    </View>
  );
}
