import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../hooks/theme";
import { useLocalSearchParams } from "expo-router";
import WrapView from "../../../components/shared/WrapView";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../../constants/insets";
import TyresDescriptionTable from "../../../components/products/tyres/TyresDescriptionTable";
import PriceComponent from "../../../components/products/Price";
import ProductImageSlider from "../../../components/products/ProductImageSlider";

type Props = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
};

export default function TyresProductPage({}: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const { id, title, thumbnail, description, price, rating, stock } =
    useLocalSearchParams() as unknown as Props;

  const styles = useMemo(
    () =>
      StyleSheet.create({
        mainContainer: {
          paddingVertical: Insets.screenMarginMedium,
          paddingHorizontal: Insets.screenMarginMedium,
        },
        productName: {
          ...theme.text.titleLarge,
          fontWeight: "bold",
        },
        trademark: {
          ...theme.text.titleMedium,
          color: theme.colors.surfaceContainerHighest,
          paddingBottom: Insets.medium,
        },
      }),
    [theme, width]
  );

  return (
    <SafeAreaView>
      <ProductImageSlider images={images} />

      <View style={styles.mainContainer}>
        <Text style={styles.productName}>Cinturato™ All Season SF 2</Text>
        <Text style={styles.trademark}>
          De la marca <Text style={{ fontWeight: "bold" }}>Pirelli</Text>
        </Text>

        <PriceComponent
          price={24.42}
          currency="€"
          baseTextTheme={{ ...theme.text.headlineLarge, fontWeight: "bold" }}
          centsTextTheme={{
            lineHeight: theme.text.headlineLarge.lineHeight - Insets.large,
            fontSize: Insets.large,
          }}
        />

        <View style={{height: Insets.screenMarginLarge}}/>

        <TyresDescriptionTable data={data} horizontalPadding={0} />
      </View>
    </SafeAreaView>
  );
}

const images = [
  "https://i.imgur.com/P6trNJP.jpeg",
  "https://i.imgur.com/uM7n8Rb.jpeg",
  "https://i.imgur.com/HswacKa.jpeg",
  "https://i.imgur.com/3iBF100.jpeg"
];

// Data array representing the items to render
const data = [
  {
    iconName: "download-outline",
    title: "Índice de carga",
    data: "95",
  },
  {
    iconName: "water-outline",
    title: "Adherencia a superficie mojada",
    data: "A",
  },
  {
    iconName: "leaf-outline",
    title: "Eficiencia energética",
    data: "C",
  },
  {
    iconName: "flower-outline",
    title: "Estación",
    data: "Invierno",
  },
];
