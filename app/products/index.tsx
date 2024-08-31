import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import ProductSnippet from "../../components/products/snippets/ProductSnippet";
import Clickable from "../../components/shared/Clickable";
import { router } from "expo-router";
import SearchBar from "../../components/products/SearchBar";
import FiltersBottomModalSheet from "../../components/products/modals/FiltersModal";
import SearchOptionsComponent from "../../components/products/SearchOptions";

type Props = {};

export default function CatalogPage({}: Props) {
  const { width, height } = useWindowDimensions();

  const styles = StyleSheet.create({
    globalContainer: {
      position: "relative",
      height: height,
      width: width,
    },
    catalogContainer: {
      height: "100%",
      width: "100%",
    },
    modalBottomSheet: {
      position: "absolute",
      bottom: 0,
      width: width,
      height: height * 0.6,
    },
  });

  return (
    <View style={styles.globalContainer}>
      <SafeAreaView style={styles.catalogContainer}>
        <SearchBar placeholder={"Buscar productos"} onSearch={() => {}} />
        <SearchOptionsComponent />

        <Clickable onPress={() => router.navigate("/products/pages/tyres")}>
          <ProductSnippet key={"mama"} />
        </Clickable>
      </SafeAreaView>
      <View style={styles.modalBottomSheet}>
        <FiltersBottomModalSheet
          filters={[
            {
              categoryName: "Precio",
              categoryType: "range",
              startRange: 10,
              endRange: 1000,
            },
            {
              categoryName: "Tamaño",
              categoryType: "options",
              options: ["34", "41", "93", "810"],
            },
            {
              categoryName: "Colores",
              categoryType: "options",
              options: ["Rojo", "Verde", "Azul", "Amarillo"],
            },
          ]}
        />
      </View>
    </View>
  );
}
