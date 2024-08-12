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
import { router } from "expo-router";

type Props = {
  x: SharedValue<number>;
  currentIndex: SharedValue<number>;
  length: number;
  flatListRef: any;
};

export default function OnboardingSplashButton({
  x,
  currentIndex,
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

  const  onPress = useCallback(() => {
    if (x.value / width >= length - 1 - threshold) {
      router.navigate("/");
    } else {
      if (currentIndex.value < length - 1) {
        flatListRef?.current?.scrollToIndex({
          index: currentIndex.value + 1,
        });

        currentIndex.value = currentIndex.value + 1;
      }
    }
  }, []);

  const styles = useRef(
    StyleSheet.create({
      container: {
        flexDirection: "row",
        paddingHorizontal: Insets.screenMarginMedium,
        paddingVertical: Insets.screenMarginMedium,
        borderRadius: Insets.layoutMedium,
        backgroundColor: theme.colors.primary,
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
            { fontWeight: "bold", color: theme.colors.onPrimary },
            rnTextStyle,
          ]}
        >
          Vamos
        </Animated.Text>
        <Animated.View style={[styles.absolute, iconAnimatedStyle]}>
          <Ionicons
            name="arrow-forward"
            size={Insets.icon}
            color={theme.colors.onPrimary}
          />
        </Animated.View>
      </Animated.View>
    </Clickable>
  );
}
