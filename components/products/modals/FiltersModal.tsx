import React, {
  useCallback,
  useRef,
  useMemo,
  useEffect,
  useState,
} from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Slider from "@react-native-community/slider";
import { useTheme } from "../../../hooks/theme";
import Insets from "../../../constants/insets";
import Clickable from "../../shared/Clickable";

// Reuse the types from above
type OptionFilter = {
  categoryName: string;
  categoryType: "options";
  options: string[];
};

type RangeFilter = {
  categoryName: string;
  categoryType: "range";
  startRange: number;
  endRange: number;
};

type FilterCategory = OptionFilter | RangeFilter;

type Props = {
  command?: "open" | "close";
  filters: FilterCategory[];
};

export default function FiltersBottomModalSheet({ command, filters }: Props) {
  const { theme } = useTheme();
  const { height } = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["100%"];

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  useEffect(() => {
    if (command === "open") {
      openBottomSheet();
    } else if (command === "close") {
      closeBottomSheet();
    }
  }, [command, openBottomSheet, closeBottomSheet]);

  const renderFilterItem = useCallback(({ item }: { item: FilterCategory }) => {
    if (item.categoryType === "options") {
      return <OptionFilterComponent filter={item as OptionFilter} />;
    } else if (item.categoryType === "range") {
      return <RangeFilterComponent filter={item as RangeFilter} />;
    }
    return null;
  }, []);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: "100%",
          width: "100%",
        },
        contentContainer: {
          flex: 1,
          padding: Insets.screenMarginMedium,
        },
      }),
    []
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        detached
        enablePanDownToClose
        index={-1}
        snapPoints={snapPoints}
      >
        <View style={styles.contentContainer}>
          <FlatList
            data={filters}
            renderItem={renderFilterItem}
            keyExtractor={(item, index) => `${item.categoryName}-${index}`}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const OptionFilterComponent: React.FC<{ filter: OptionFilter }> = ({
  filter,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
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
        optionButton: {
          padding: Insets.medium,
          borderWidth: Insets.pixel,
          borderColor: theme.colors.primary,
          borderRadius: Insets.submedium,
          marginVertical: Insets.small,
          backgroundColor: theme.colors.background,
        },
        optionText: {
          ...theme.text.bodyLarge,
        },
      }),
    [theme]
  );

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.filterTitle}>{filter.categoryName}</Text>
      {filter.options.map((option) => (
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
      ))}
    </View>
  );
};

const RangeFilterComponent: React.FC<{ filter: RangeFilter }> = ({
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
