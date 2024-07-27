import { Pressable, StyleSheet } from "react-native";
import React, { useCallback } from "react";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../hooks/theme";

type Props = {
  currentIndex: SharedValue<number>;
  length: number;
  flatListRef: any;
};
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function OnboardingSplashButton({
  currentIndex,
  length,
  flatListRef,
}: Props) {
  const { theme } = useTheme();

  const rnBtnStyle = useAnimatedStyle(() => {
    return {
      width:
        currentIndex.value === length - 1 ? withSpring(140) : withSpring(60),
      height: 60,
    };
  }, [currentIndex, length]);

  const rnTextStyle = useAnimatedStyle(() => {
    return {
      opacity:
        currentIndex.value === length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value === length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    };
  }, [currentIndex, length]);

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        currentIndex.value !== length - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            currentIndex.value !== length - 1 ? withTiming(0) : withTiming(100),
        },
      ],
    };
  }, [currentIndex, length]);

  const onPress = useCallback(() => {
    if (currentIndex.value === length - 1) {
      console.log("Get Started");
      return;
    } else {
      flatListRef?.current?.scrollToIndex({
        index: currentIndex.value + 1,
      });
    }
  }, []);
  return (
    <AnimatedPressable style={[styles.container, rnBtnStyle]} onPress={onPress}>
      <Animated.Text
        style={[
          theme.text.bodyLarge,
          { fontWeight: "bold", color: theme.colors.onSecondary },
          rnTextStyle,
        ]}
      >
        Get Started
      </Animated.Text>
      <Animated.View style={[styles.absolute, iconAnimatedStyle]}>
        <Ionicons name="arrow-forward" size={24} color="white" />
      </Animated.View>
    </AnimatedPressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 100,
    backgroundColor: "#304FFE",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  absolute: {
    position: "absolute",
  },
});
