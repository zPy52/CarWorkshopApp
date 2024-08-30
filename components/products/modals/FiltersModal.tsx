import React, {
  useCallback,
  useRef,
  useMemo,
  useEffect,
} from "react";
import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Insets from "../../../constants/insets";
import { useDispatch, useSelector } from "react-redux";
import {
  closeFiltersModal,
  openFiltersModal,
} from "../../../redux/reducers/filters";
import { OptionFilter, OptionFilterComponent } from "./filters/Options";
import { RangeFilter, RangeFilterComponent } from "./filters/Range";


type FilterCategory = RangeFilter | OptionFilter;

type Props = {
  filters: FilterCategory[];
};

export default function FiltersBottomModalSheet({ filters }: Props) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = ["100%"];

  const dispatch = useDispatch();
  const shouldOpen = useSelector((state: any) => state.filters.isOpen);

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
    dispatch(openFiltersModal());
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
    dispatch(closeFiltersModal());
  }, []);

  useEffect(() => {
    if (shouldOpen) {
      openBottomSheet();
    } else if (shouldOpen) {
      closeBottomSheet();
    }
  }, [shouldOpen, openBottomSheet, closeBottomSheet]);

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
      }),
    []
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