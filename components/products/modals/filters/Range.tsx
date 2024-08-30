import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../../hooks/theme";
import Insets from "../../../../constants/insets";
import Slider from "@react-native-community/slider";

export type RangeFilter = {
  categoryName: string;
  categoryType: "range";
  startRange: number;
  endRange: number;
};

export const RangeFilterComponent: React.FC<{ filter: RangeFilter }> = ({
  filter,
}) => {
  const [rangeValue, setRangeValue] = useState([
    filter.startRange,
    filter.endRange,
  ]);
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        filterContainer: {
          marginVertical: Insets.medium,
        },
        filterTitle: {
          ...theme.text.titleLarge,
          fontWeight: "bold",
          marginBottom: Insets.medium,
        },
        rangeValueText: {
          ...theme.text.bodyLarge,
          textAlign: "center",
          marginVertical: Insets.medium,
        },
      }),
    [theme]
  );

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>{filter.categoryName}</Text>
      <Slider
        style={{ width: "100%", height: Insets.screenMarginLarge }}
        minimumValue={filter.startRange}
        maximumValue={filter.endRange}
        onValueChange={(value) =>
          setRangeValue([Math.round(value), rangeValue[1]])
        }
        onSlidingComplete={(value) =>
          setRangeValue([Math.round(value), rangeValue[1]])
        }
        minimumTrackTintColor={theme.colors.primary}
        maximumTrackTintColor={theme.text.bodyLarge.color}
        thumbTintColor={theme.colors.primary}
      />
      <Text style={styles.rangeValueText}>
        {rangeValue[0]} - {rangeValue[1]}
      </Text>
    </View>
  );
};
