import { StyleSheet, View, useWindowDimensions } from "react-native";
import React, { useCallback } from "react";
import Animated, {
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useTheme } from "../../../hooks/theme";
import Insets from "../../../constants/insets";

type Props = {
  length: number;
  x: SharedValue<number>;
};

export default function OnboardingPaginator({ length, x }: Props) {
  const { theme } = useTheme();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const PaginationComponent = useCallback(({ index }: { index: number }) => {
    const itemRnStyle = useAnimatedStyle(() => {
      const width = interpolate(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [35, 16, 35],
        "clamp"
      );

      const bgColor = interpolateColor(
        x.value,
        [
          (index - 1) * SCREEN_WIDTH,
          index * SCREEN_WIDTH,
          (index + 1) * SCREEN_WIDTH,
        ],
        [theme.colors.primaryContainer, theme.colors.primary, theme.colors.primaryContainer]
      );

      return {
        width,
        backgroundColor: bgColor,
      };
    }, [x]);
    return <Animated.View style={[styles.itemStyle, itemRnStyle]} />;
  }, []);

  return (
    <View style={styles.container}>
      {Array.from({ length }).map((_, index) => {
        return <PaginationComponent index={index} key={index} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  itemStyle: {
    width: Insets.screenMarginLarge,
    height: Insets.medium,
    borderRadius: Insets.small,
    marginHorizontal: Insets.small,
  },
});
