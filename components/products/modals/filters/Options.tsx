import React, { useCallback, useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../../hooks/theme";
import Insets from "../../../../constants/insets";
import Clickable from "../../../shared/Clickable";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOptionFilter } from "../../../../redux/reducers/filters";

export type OptionFilter = {
  categoryName: string;
  categoryType: "options";
  options: string[];
};

export const OptionFilterComponent: React.FC<{
  filter: OptionFilter;
}> = ({ filter }) => {
  const { theme } = useTheme();
  const selectedOptionsFilter = useSelector((state: any) =>
    state.filters.selectedOptionFilters.find(
      (filterState: any) => filterState.categoryName === filter.categoryName
    )
  );
  const selectedOptions = selectedOptionsFilter?.selectedOptions || [];

  const dispatch = useDispatch();

  const toggleOption = useCallback((option: string) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((item: string) => item !== option)
      : [...selectedOptions, option];

    // Dispatch the selected options to Redux
    dispatch(
      setSelectedOptionFilter({
        categoryName: filter.categoryName,
        selectedOptions: updatedOptions,
      })
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
