import {
  StyleSheet,
  Image,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../hooks/theme";
import Insets from "../../../constants/insets";
import PriceComponent from "../Price";

type Props = {};

export default function ProductSnippet({}: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        snippetCover: {
          paddingHorizontal: Insets.large,
        },
        snippet: {
          width: "100%",
          flexDirection: "row",
          borderRadius: Insets.small,
          borderColor: theme.colors.outlineVariant,
          borderWidth: Insets.pixel / 2,
        },
        imageWrapper: {
          width: "40%",
          justifyContent: "center",
          backgroundColor: theme.colors.surface,
        },
        productImage: {
          width: "100%",
          aspectRatio: 1,
          resizeMode: "contain",
        },
        textSection: {
          flex: 1,
          paddingVertical: Insets.large,
          paddingHorizontal: Insets.medium,
        },
        title: {
          ...theme.text.titleMedium,
          flexShrink: 1,
        },
        subtitle: {
          ...theme.text.titleSmall,
          color: theme.colors.surfaceContainerHighest,
          flexShrink: 1,
        },

        reviewsWrapper: {
      
          flexDirection: "row",
          alignItems: "flex-start",
        },
        reviewCount: {
          paddingRight:Insets.dwarf,
          ...theme.text.titleSmall,
          fontWeight: "bold",
          flexShrink: 1,
        },
      }),
    [theme, width]
  );

  return (
    <View style={styles.snippetCover}>
      <View style={styles.snippet}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.productImage}
            source={{
              uri: "https://llantasyruedas.es/6853-home_default/llanta-para-coche-ronal-r10-bronce-cmfc.jpg",
            }}
          />
        </View>
        <View style={styles.textSection}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            Llanta Dorada L24 - Alta Resistencia al Daño
          </Text>
          <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
            de TURBQ
          </Text>

          <View style={styles.reviewsWrapper}>
            <Text style={styles.reviewCount}>3,6</Text>

            <Ionicons
              name="star"
              size={Insets.large}
              color={theme.colors.tertiary}
            />
            <Ionicons
              name="star"
              size={Insets.large}
              color={theme.colors.tertiary}
            />
            <Ionicons
              name="star"
              size={Insets.large}
              color={theme.colors.tertiary}
            />
            <Ionicons
              name="star-half"
              size={Insets.large}
              color={theme.colors.tertiary}
            />
            <Ionicons
              name="star-outline"
              size={Insets.large}
              color={theme.colors.tertiary}
            />
          </View>
          <PriceComponent price={24.31} />
        </View>
      </View>
    </View>
  );
}
