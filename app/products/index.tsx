import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import ProductSnippet from "../../components/products/snippets/ProductSnippet";
import Clickable from "../../components/shared/Clickable";
import { router } from "expo-router";
import SearchBar from "../../components/products/SearchBar";
import FiltersBottomModalSheet from "../../components/products/modals/FiltersModal";
import { useDispatch } from "react-redux";
import { toggleFiltersModal } from "../../redux/reducers/filters";

type Props = {};

export default function CatalogPage({}: Props) {
  const { theme } = useTheme();
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    globalContainer: {
      height: height,
      width: width,
    },
    modalBottomSheet: {
      position: "absolute",
      width: width,
      height: 500,
      bottom: 0,
    },
  });

  return (
    <View style={styles.globalContainer}>
      <SafeAreaView>
        <SearchBar placeholder={"Buscar productos"} onSearch={() => {}} />

        <Clickable
          onPress={() => {
            dispatch(toggleFiltersModal());
          }}
        >
          <Text style={theme.text.headlineMedium}>Ver adasd dads </Text>
        </Clickable>

        <Clickable onPress={() => router.navigate("/products/pages/tyres")}>
          <ProductSnippet key={"mama"} />
        </Clickable>
      </SafeAreaView>
      <View style={styles.modalBottomSheet}>
        <FiltersBottomModalSheet
          filters={[
            {
              categoryName: "Price",
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
              categoryName: "Colors",
              categoryType: "multipleOptions",
              options: ["Red", "Green", "Blue", "Yellow"],
            },
          ]}
        />
      </View>
    </View>
  );
}
