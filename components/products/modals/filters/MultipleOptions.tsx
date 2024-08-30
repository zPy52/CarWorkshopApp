import React, { useCallback, useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../../hooks/theme";
import Insets from "../../../../constants/insets";
import Clickable from "../../../shared/Clickable";

export type MultipleOptionFilter = {
  categoryName: string;
  categoryType: "multipleOptions";
  options: string[];
};

export const MultipleOptionFilterComponent: React.FC<{
  filter: MultipleOptionFilter;
}> = ({ filter }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const { theme } = useTheme();

  const toggleOption = useCallback((option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  }, []);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        filterContainer: {
          marginVertical: Insets.medium,
          flexDirection: "row",
          flexWrap: "wrap",
        },
        filterTitle: {
          ...theme.text.titleLarge,
          fontWeight: "bold",
          marginBottom: Insets.medium,
        },
        optionButton: {
          padding: Insets.medium,
          borderWidth: Insets.pixel,
          borderColor: theme.colors.primary,
          borderRadius: Insets.submedium,
          marginBottom: Insets.small,
          marginRight: Insets.medium,
          backgroundColor: theme.colors.background,
        },
        optionText: {
          ...theme.text.bodyLarge,
        },
      }),
    [theme]
  );

  return (
    <View>
      <Text style={styles.filterTitle}>{filter.categoryName}</Text>
      <View style={styles.filterContainer}>
        {filter.options.map((option, index) => (
          <View key={`${filter.categoryName}-${filter.categoryType}-${index}`}>
            <Clickable onPress={() => toggleOption(option)}>
              <View
                style={[
                  styles.optionButton,
                  {
                    backgroundColor: selectedOptions.includes(option)
                      ? theme.colors.primary
                      : theme.colors.background,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    {
                      color: selectedOptions.includes(option)
                        ? theme.colors.background
                        : theme.text.bodyLarge.color,
                    },
                  ]}
                >
                  {option}
                </Text>
              </View>
            </Clickable>
          </View>
        ))}
      </View>
    </View>
  );
};
