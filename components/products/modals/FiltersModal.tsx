import React, { useCallback, useRef, useMemo, useEffect } from "react";
import { View, StyleSheet, FlatList, useWindowDimensions } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Insets from "../../../constants/insets";
import { useDispatch, useSelector } from "react-redux";
import {
  closeFiltersModal,
  resetFilters,
} from "../../../redux/reducers/filters";
import { OptionFilter, OptionFilterComponent } from "./filters/Options";
import { RangeFilter, RangeFilterComponent } from "./filters/Range";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import StdButton from "../../shared/StdButton";
import { useTheme } from "../../../hooks/theme";
import Durations from "../../../constants/durations";
import { waitSleep } from "../../../utils/sleep";

type FilterCategory = RangeFilter | OptionFilter;

type Props = {
  filters: FilterCategory[];
};

export default function FiltersBottomModalSheet({ filters }: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const safeAreaInsets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["100%"];

  const dispatch = useDispatch();
  const shouldOpen = useSelector((state: any) => state.filters.isOpen);

  useEffect(() => {
    if (shouldOpen) {
      openBottomSheet();
    } else if (!shouldOpen) {
      closeBottomSheet();
    }
  }, [shouldOpen]);

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const renderFilterItem = useCallback(({ item }: { item: FilterCategory }) => {
    if (item.categoryType === "range") {
      return <RangeFilterComponent filter={item as RangeFilter} />;
    } else if (item.categoryType === "options") {
      return <OptionFilterComponent filter={item as OptionFilter} />;
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
        paddingView: {
          height: Insets.medium,
        },
        contentContainer: {
          flex: 1,
          padding: Insets.screenMarginMedium,
        },
        lowerBannerOuterContainer: {
          position: "absolute",
          bottom: 0,
          width: width,
          paddingHorizontal:
            Insets.screenMarginMedium +
            safeAreaInsets.left +
            safeAreaInsets.right,
          paddingTop: Insets.large,
          paddingBottom: safeAreaInsets.bottom,
          borderColor: theme.colors.transparent,
          borderTopColor: theme.colors.outline,
          borderWidth: Insets.pixel / 2,
        },
        lowerBannerInnerContainer: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
        lowerButtonHeight: {
          height: Insets.layoutSmall - Insets.small,
        },
      }),
    [theme, width]
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        detached
        enablePanDownToClose
        onClose={() => {
          dispatch(closeFiltersModal());
        }}
        index={-1}
        snapPoints={snapPoints}
      >
        <View style={styles.paddingView} />
        <View style={[styles.contentContainer, { position: "relative" }]}>
          <FlatList
            data={filters}
            renderItem={renderFilterItem}
            keyExtractor={(item, index) => `${item.categoryName}-${index}`}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.lowerBannerOuterContainer}>
            <View>
              <View style={styles.lowerBannerInnerContainer}>
                <View style={styles.lowerButtonHeight}>
                  <StdButton
                    text="Quitar filtros"
                    onPress={async () => {
                      dispatch(resetFilters());

                      await waitSleep(Durations.interval);

                      dispatch(closeFiltersModal());
                    }}
                    autoWidth
                    backgroundColor={theme.colors.surfaceContainerLowest}
                    textColor={theme.colors.onBackground}
                    borderWidth={Insets.pixel}
                    borderColor={theme.colors.outline}
                    fontWeight="regular"
                  />
                </View>
                <View style={styles.lowerButtonHeight}>
                  <StdButton
                    text="Mostrar resultados"
                    onPress={() => {
                      // TODO: Notify with redux
                    }}
                    autoWidth
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
}
