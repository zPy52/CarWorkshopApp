import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import { useWindowDimensions } from "react-native";
import Insets from "../../constants/insets";
import WrapView from "../../components/shared/WrapView";
import ProductSnippet from "../../components/products/ProductSnippet";
import Clickable from "../../components/shared/Clickable";
import { router } from "expo-router";

type Props = {};

export default function CatalogPage({}: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView>
      <Clickable onPress={() => router.navigate("/products/pages/tyres")}>
      <ProductSnippet key={"mama"} />
      </Clickable>
    </SafeAreaView>
  );
}
