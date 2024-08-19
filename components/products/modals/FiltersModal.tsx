import React, { useCallback, useRef, useMemo, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { useTheme } from "../../../hooks/theme";

type Props = {
  command?: "open" | "close" | undefined;
};

export default function FiltersBottomModalSheet({ command }: Props) {
  const { theme } = useTheme();

  // ref to access BottomSheet
  const bottomSheetRef = useRef(null);

  // snapPoints define the sheet's height
  const snapPoints = useRef(["50%", "80%"]).current;

  // function to open the sheet
  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  // function to close the sheet
  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  // Handle bottom sheet changes
  const handleSheetChanges = useCallback((index: number) => {
    if (index < 1) {
      closeBottomSheet(); // Fully close the sheet if it's at the bottom (index 0 or -1)
    }
  }, []);

  useEffect(() => {
    if (command == null) {
      return;
    }

    if (command === "open") {
      openBottomSheet();
    } else {
      closeBottomSheet();
    }
  }, [command]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          height: "100%",
          width: "100%",
        },
        contentContainer: {
          flex: 1,
          alignItems: "center",
        },
        contentText: {
          marginBottom: 20,
          fontSize: 18,
          fontWeight: "bold",
          color: "black",
        },
      }),
    [theme]
  );

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        detached={true}
        enablePanDownToClose={true}
        index={-1} // initially closed
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>Hello, I'm a Bottom Sheet!</Text>
          <Text>a</Text>
        </View>
      </BottomSheet>
    </View>
  );
}
