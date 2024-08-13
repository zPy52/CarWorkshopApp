import { useTheme } from "../../hooks/theme";
import { View, Text, StyleSheet } from "react-native";
import Insets from "../../constants/insets";
import { useMemo } from "react";

type Props = {
  price: number;
  baseTextTheme?: any;
  centsTextTheme?: any;
  currency?: string;
};

export default function PriceComponent({
  price,
  currency = "€",
  baseTextTheme = {},
  centsTextTheme = {},
}: Props) {
  const { theme } = useTheme();

  const [integerPart, decimalPart] = useMemo(
    () => price.toFixed(2).split("."),
    [price]
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        priceSection: {
          flexDirection: "row",
          alignItems: "flex-start",
        },
        price: {
          ...theme.text.titleLarge,
          fontWeight: "bold",
          flexShrink: 1,
        },
        centsCorrection: {
          lineHeight: theme.text.titleLarge.lineHeight - Insets.medium,
          fontSize: Insets.medium,
        },
      }),
    [theme]
  );

  if (currency === "€") {
    return (
      <View style={styles.priceSection}>
        <Text style={[styles.price, baseTextTheme]} numberOfLines={1}>
          {integerPart}
        </Text>

        <Text
          style={[
            styles.price,
            baseTextTheme,
            styles.centsCorrection,
            centsTextTheme,
          ]}
          numberOfLines={1}
        >
          {decimalPart}
        </Text>

        <Text style={[styles.price, baseTextTheme]} numberOfLines={1}>
          {currency}
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.priceSection}>
      <Text style={[styles.price, baseTextTheme]} numberOfLines={1}>
        {currency}
      </Text>

      <Text style={[styles.price, baseTextTheme]} numberOfLines={1}>
        {integerPart}
      </Text>

      <Text
        style={[styles.price, baseTextTheme, styles.centsCorrection]}
        numberOfLines={1}
      >
        {decimalPart}
      </Text>
    </View>
  );
}
