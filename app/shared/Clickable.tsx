import React, { useCallback } from "react";
import { TouchableOpacity, StyleProp, ViewStyle } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Durations from "../../constants/durations";

type Props = {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  children: React.ReactNode;
  shrinkage?: { x: number; y: number };
};

export default function Clickable({
  onPress,
  children,
  shrinkage = { x: 0.985, y: 0.985 },
  style = {},
}: Props) {
  const scale = useSharedValue(1);

  const rnScaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  }, [scale]);

  const handlePressIn = useCallback(() => {
    scale.value = withTiming(shrinkage.x, { duration: Durations.veryFast });
  }, []);

  const handlePressOut = useCallback(() => {
    scale.value = withTiming(1, { duration: Durations.veryFast });
  }, []);

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={0.8}
      style={[
        { overflow: "hidden", alignItems: "center", justifyContent: "center" },
        style,
      ]}
    >
      <Animated.View style={rnScaleStyle}>{children}</Animated.View>
    </TouchableOpacity>
  );
}