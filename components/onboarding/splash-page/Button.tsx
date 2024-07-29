import { StyleSheet, useWindowDimensions } from "react-native";
import React, { useCallback, useRef } from "react";
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../../hooks/theme";
import Clickable from "../../shared/Clickable";
import Insets from "../../../constants/insets";

type Props = {
  x: SharedValue<number>;
  length: number;
  flatListRef: any;
};

export default function OnboardingSplashButton({
  x,
  length,
  flatListRef,
}: Props) {
  const { theme } = useTheme();

  const { width } = useWindowDimensions();
  const threshold = useRef(0.3).current;

  const rnBtnStyle = useAnimatedStyle(() => {
    return {
      width:
        x.value / width >= length - 1 - threshold
          ? withSpring(120)
          : withSpring(60),
      height: 60,
    };
  }, [x, length]);

  const rnTextStyle = useAnimatedStyle(() => {
    return {
      opacity:
        x.value / width >= length - 1 - threshold
          ? withTiming(1)
          : withTiming(0),
      transform: [
        {
          translateX:
            x.value / width >= length - 1 - threshold
              ? withTiming(0)
              : withTiming(100),
        },
      ],
    };
  }, [x, length]);

  const iconAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        x.value / width < length - 1 - threshold
          ? withTiming(1)
          : withTiming(0),
      transform: [
        {
          translateX:
            x.value / width < length - 1 - threshold
              ? withTiming(0)
              : withTiming(100),
        },
      ],
    };
  }, [x, length]);

  const onPress = useCallback(() => {
    if (x.value / width >= length - 1 - threshold) {
      console.log("Get Started");
      return;
    } else {
      flatListRef?.current?.scrollToIndex({
        index: length - 1,
      });
    }
  }, []);

  const styles = useRef(
    StyleSheet.create({
      container: {
        flexDirection: "row",
        paddingHorizontal: Insets.screenMarginMedium,
        paddingVertical: Insets.screenMarginMedium,
        borderRadius: Insets.layoutMedium,
        backgroundColor: theme.colors.secondary,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      },
      absolute: {
        position: "absolute",
      },
    })
  ).current;

  return (
    <Clickable onPress={onPress}>
      <Animated.View style={[styles.container, rnBtnStyle]}>
        <Animated.Text
          style={[
            theme.text.bodyLarge,
            { fontWeight: "bold", color: theme.colors.onSecondary },
            rnTextStyle,
          ]}
        >
          Vamos
        </Animated.Text>
        <Animated.View style={[styles.absolute, iconAnimatedStyle]}>
          <Ionicons
            name="arrow-forward"
            size={24}
            color={theme.colors.onSecondary}
          />
        </Animated.View>
      </Animated.View>
    </Clickable>
  );
}
