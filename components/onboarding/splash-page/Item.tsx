import {
  Text,
  View,
  useWindowDimensions,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { useTheme } from "../../../hooks/theme";
import Insets from "../../../constants/insets";

type Props = {
  item: { description: string; title: string; image: ImageSourcePropType };
  index: number;
  x: SharedValue<number>;
};

export default function OnboardingListItem({ item, index, x }: Props) {
  const { theme } = useTheme();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const rnImageStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      "clamp"
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      "clamp"
    );
    return {
      opacity,
      width: SCREEN_WIDTH * 0.8,
      height: SCREEN_WIDTH * 0.8,
      transform: [{ translateY }],
    };
  }, [index, x]);

  const rnTextStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [100, 0, 100],
      "clamp"
    );
    const opacity = interpolate(
      x.value,
      [
        (index - 1) * SCREEN_WIDTH,
        index * SCREEN_WIDTH,
        (index + 1) * SCREEN_WIDTH,
      ],
      [0, 1, 0],
      "clamp"
    );
    return {
      opacity,
      transform: [{ translateY }],
    };
  }, [index, x]);
  return (
    <View style={[styles.itemContainer, { width: SCREEN_WIDTH }]}>
      <Animated.Image
        source={item.image}
        style={[{ alignSelf: "center" }, rnImageStyle]}
        resizeMode="contain"
      />
      <Animated.View
        style={[{ paddingHorizontal: Insets.screenMarginMedium }, rnTextStyle]}
      >
        <Text style={[theme.text.headlineMedium, { fontWeight: "600" }]}>
          {item.title}
        </Text>
        <Text
          style={[
            theme.text.headlineSmall,
            { paddingTop: Insets.small, color: theme.colors.surfaceVariant },
          ]}
        >
          {item.description}
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  textItem: {
    paddingHorizontal: Insets.screenMarginMedium,
  },
});
