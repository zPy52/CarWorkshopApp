import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
import Clickable from "../shared/Clickable";
import Insets from "../../constants/insets";
import { toggleFiltersModal } from "../../redux/reducers/filters";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

type Props = {};

export default function SearchOptionsComponent({}: Props) {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const nOptionFilters = useSelector(
    (state: any) => state.filters.selectedOptionFilters.length
  );
  const nRangeFilters = useSelector(
    (state: any) => state.filters.selectedRangeFilters.length
  );

  const nFiltersInUse = useMemo(
    () => nOptionFilters + nRangeFilters,
    [nOptionFilters, nRangeFilters]
  );

  const styles = useMemo(
    () =>
      StyleSheet.create({
        searchOptionsContainer: {
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: Insets.screenMarginMedium,
          marginBottom: Insets.screenMarginMedium,
        },
        yourCarContainer: { width: Insets.layoutLarge + Insets.layoutSmall },
        filtersContainer: { flexDirection: "row", alignItems: "center" },
      }),
    [theme]
  );

  return (
    <View style={styles.searchOptionsContainer}>
      <Clickable onPress={() => {}}>
        <View style={styles.yourCarContainer}>
          <Text style={theme.text.bodyMedium}>Recomendaciones para tu</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="car-sport-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.onBackground}
            />
            <Text
              style={[
                theme.text.bodyMedium,
                { fontWeight: "bold", paddingHorizontal: Insets.small },
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              AUDI
            </Text>
            <Ionicons
              name="chevron-down-outline"
              size={Insets.medium}
              color={theme.colors.onBackground}
            />
          </View>
        </View>
      </Clickable>
      <Clickable
        onPress={() => {
          dispatch(toggleFiltersModal());
        }}
      >
        <View style={styles.filtersContainer}>
          <Ionicons
            name="funnel-outline"
            size={Insets.screenMarginMedium}
            color={theme.colors.onBackground}
          />
          <View style={{ width: Insets.small }} />
          <Text style={theme.text.bodyMedium}>Filtros ({nFiltersInUse})</Text>
        </View>
      </Clickable>
    </View>
  );
}
