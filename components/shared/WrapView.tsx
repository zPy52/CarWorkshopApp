import React, { useMemo } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

type Props = {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode[];
  horizontalSpacing?: number;
  verticalSpacing?: number;
};

export default function WrapView({
  children,
  horizontalSpacing = 0,
  verticalSpacing = 0,
  style = {},
}: Props) {
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flexDirection: "row",
          flexWrap: "wrap",
          marginHorizontal: -horizontalSpacing / 2, // Negative margin to offset the padding added to each item
          marginVertical: -verticalSpacing / 2, // Negative margin to offset the padding added to each item
        },
        item: {
          marginHorizontal: horizontalSpacing / 2,
          marginVertical: verticalSpacing / 2,
        },
      }),
    [horizontalSpacing, verticalSpacing]
  );

  return (
    <View style={[styles.container, style]}>
      {React.Children.map(children, (child) => (
        <View style={styles.item}>{child}</View>
      ))}
    </View>
  );
}
