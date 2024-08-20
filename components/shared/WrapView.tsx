import React, { useMemo } from "react";
import { View, StyleSheet, StyleProp, ViewStyle } from "react-native";

type Props<T> = {
  style?: StyleProp<ViewStyle>;
  data: T[];
  keyExtractor: (item: T, index: number) => string;
  renderItem: (item: T, index: number) => React.ReactNode;
  horizontalSpacing?: number;
  verticalSpacing?: number;
};

export default function WrapView<T>({
  data,
  keyExtractor,
  renderItem,
  horizontalSpacing = 0,
  verticalSpacing = 0,
  style = {},
}: Props<T>) {
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
      {data.map((item, index) => (
        <View key={keyExtractor(item, index)} style={styles.item}>
          {renderItem(item, index)}
        </View>
      ))}
    </View>
  );
}
