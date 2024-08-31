import React, { useCallback, useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "../../../../hooks/theme";
import Insets from "../../../../constants/insets";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedOptionFilter } from "../../../../redux/reducers/filters";
import FilterOptionSnippet from "./OptionSnippet";

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

  const dispatch = useDispatch();

  const selectedOptions = useMemo(
    () => selectedOptionsFilter?.selectedOptions || [],
    [selectedOptionsFilter]
  );

  const toggleOption = useCallback(
    (option: string) => {
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
    },
    [selectedOptions]
  );

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
            <FilterOptionSnippet
              toggleOption={() => {
                toggleOption(option);
              }}
              option={option}
              isChosen={selectedOptions.includes(option)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
