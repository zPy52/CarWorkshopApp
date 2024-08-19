import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import { Text, useWindowDimensions } from "react-native";
import ProductSnippet from "../../components/products/snippets/ProductSnippet";
import Clickable from "../../components/shared/Clickable";
import { router } from "expo-router";
import SearchBar from "../../components/products/SearchBar";
import FiltersBottomModalSheet from "../../components/products/modals/FiltersModal";
import { useCallback, useState } from "react";

type Props = {};

export default function CatalogPage({}: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const [modalStatus, setModalStatus] = useState<"open" | "close" | undefined>(
    undefined
  );

  const toggleModal = useCallback(() => {
    setModalStatus((prevStatus) => (prevStatus === "open" ? "close" : "open"));
  }, []);

  return (
    <SafeAreaView>
      <SearchBar placeholder={"Buscar productos"} onSearch={() => {}} />

      <Clickable
        onPress={() => {
          toggleModal();
        }}
      >
        <Text style={theme.text.headlineMedium}>Ver adasd dads </Text>
      </Clickable>

      <Clickable onPress={() => router.navigate("/products/pages/tyres")}>
        <ProductSnippet key={"mama"} />
      </Clickable>

      <FiltersBottomModalSheet
        command={modalStatus}
        filters={[
          {
            categoryName: "Price",
            categoryType: "range",
            startRange: 10,
            endRange: 1000,
          },
          {
            categoryName: "Size",
            categoryType: "options",
            options: ["34", "41", "93", "810"]
          },
        ]}
      />
    </SafeAreaView>
  );
}
