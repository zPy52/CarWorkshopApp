import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../../hooks/theme";
import { useLocalSearchParams } from "expo-router";
import {
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  FlatList,
  ScrollView,
} from "react-native";
import { useCallback, useMemo, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../../constants/insets";
import TyresDescriptionTable from "../../../components/products/tyres/TyresDescriptionTable";
import PriceComponent from "../../../components/products/Price";
import ProductImageSlider from "../../../components/products/ProductImageSlider";
import StdButton from "../../../components/shared/StdButton";
import Clickable from "../../../components/shared/Clickable";

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

  const [quantity, setQuantity] = useState(1);

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

        priceSection: {
          flexDirection: "row",
          alignItems: "flex-end",
        },
        vatIncludedTag: {
          ...theme.text.bodyMedium,
          paddingLeft: Insets.small,
          paddingBottom: Insets.dwarf,
        },

        statusInStock: {
          ...theme.text.bodyLarge,
          fontWeight: "bold",
          color: theme.colors.success,
        },

        quantitySelector: {
          flexDirection: "row",
          alignItems: "center",
          marginVertical: Insets.medium,
        },
        quantityButton: {
          backgroundColor: theme.colors.primaryContainer,
          padding: Insets.small,
          borderRadius: Insets.dwarf,
        },
        quantityText: {
          ...theme.text.headlineMedium,
          marginHorizontal: Insets.medium,
        },

        buttonSize: {
          height: Insets.layoutSmall,
          width: "100%",
        },
        buttonMargins: {
          marginTop: Insets.large,
          marginBottom: Insets.medium,
        },

        otherProductsSection: {
          marginVertical: Insets.medium,
        },
      }),
    [theme, width]
  );

  const increaseQuantity = useCallback(
    () => setQuantity((prev) => Math.min(prev + 1, stock == null ? 1 : stock)),
    []
  );
  const decreaseQuantity = useCallback(
    () => setQuantity((prev) => Math.max(prev - 1, 1)),
    []
  );

  const buyNow = useCallback(() => {
    // TODO: Add to the cart.
    // TODO: Redirect to the checkout.
  }, []);
  const addToCart = useCallback(() => {
    // TODO: Add to the cart.
    // TODO: Display pop up or surface or snackbar telling the user he has just added it to the cart.
  }, []);

  return (
    <ScrollView>
      <SafeAreaView>
        <ProductImageSlider images={images} />

        <View style={styles.mainContainer}>
          <Text style={styles.productName}>Cinturato™ All Season SF 2</Text>
          <Text style={styles.trademark}>
            De la marca <Text style={{ fontWeight: "bold" }}>Pirelli</Text>
          </Text>

          <View style={styles.priceSection}>
            <PriceComponent
              price={24.42}
              currency="€"
              baseTextTheme={{
                ...theme.text.headlineLarge,
                fontWeight: "bold",
              }}
              centsTextTheme={{
                lineHeight: theme.text.headlineLarge.lineHeight - Insets.large,
                fontSize: Insets.large,
              }}
            />
            <Text style={styles.vatIncludedTag}>IVA incluido</Text>
          </View>

          <Text style={styles.statusInStock}>En stock</Text>

          <View style={styles.quantitySelector}>
            <Clickable style={styles.quantityButton} onPress={decreaseQuantity}>
              <Ionicons
                name="remove"
                size={Insets.icon}
                color={theme.colors.onPrimaryContainer}
              />
            </Clickable>
            <Text style={styles.quantityText}>{quantity}</Text>
            <Clickable style={styles.quantityButton} onPress={increaseQuantity}>
              <Ionicons
                name="add"
                size={Insets.icon}
                color={theme.colors.onPrimaryContainer}
              />
            </Clickable>
          </View>

          <View style={[styles.buttonSize, styles.buttonMargins]}>
            <StdButton
              text="Añadir a la cesta"
              onPress={addToCart}
              backgroundColor={theme.colors.primaryContainer}
              textColor={theme.colors.onPrimaryContainer}
            />
          </View>
          <View style={styles.buttonSize}>
            <StdButton text="Comprar ya" onPress={buyNow} />
          </View>

          <View style={{ height: Insets.screenMarginLarge }} />

          <TyresDescriptionTable data={data} horizontalPadding={0} />

          <View style={styles.otherProductsSection}>
            <FlatList
              data={otherProducts}
              renderItem={(item) => (<View></View>)}
              horizontal
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const otherProducts = [
  {
    productName: "Pregliatto XXX 45Y",
    tags: ["Turismo", "Invierno", "SUV"],
    description: "Seguridad y comfort en cualquier condición invernal",
    imageUri: "https://i.imgur.com/P6trNJP.jpeg"
  },
  {
    productName: "Cinturato P7",
    tags: ["Turismo", "Verano", "Touring"],
    description: "Emoción de largo recorrido",
    imageUri: "https://i.imgur.com/P6trNJP.jpeg"},
];

const images = [
  "https://i.imgur.com/P6trNJP.jpeg",
  "https://i.imgur.com/uM7n8Rb.jpeg",
  "https://i.imgur.com/HswacKa.jpeg",
  "https://i.imgur.com/3iBF100.jpeg",
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
