import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../../hooks/theme";
import Insets from "../../../../constants/insets";
import Clickable from "../../../shared/Clickable";

export type OptionFilter = {
  categoryName: string;
  categoryType: "options";
  options: string[];
};

export const OptionFilterComponent: React.FC<{ filter: OptionFilter }> = ({
  filter,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { theme } = useTheme();

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
            <Clickable onPress={() => setSelectedOption(option)}>
              <View
                key={option}
                style={[
                  styles.optionButton,
                  {
                    backgroundColor:
                      selectedOption === option
                        ? theme.colors.primary
                        : theme.colors.background,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.optionText,
                    {
                      color:
                        selectedOption === option
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
