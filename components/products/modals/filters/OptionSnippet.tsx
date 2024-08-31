import { useTheme } from "../../../../hooks/theme";
import { StyleSheet } from "react-native";
import Clickable from "../../../shared/Clickable";
import Insets from "../../../../constants/insets";
import { useEffect, useMemo } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Durations from "../../../../constants/durations";
import React from "react";

type Props = {
  toggleOption: () => void;
  option: string;
  isChosen: boolean;
};

function FilterOptionSnippetComponent({
  toggleOption,
  option,
  isChosen,
}: Props) {
  const { theme } = useTheme();
  const sharedValueBackgroundColor = useSharedValue(0);
  const sharedValueTextColor = useSharedValue(0);

  const rnBackgroundColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        sharedValueBackgroundColor.value,
        [0, 1],
        [theme.colors.primaryContainerSoft, theme.colors.primaryVariant]
      ),
    };
  }, [theme, isChosen]);

  const rnTextColor = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        sharedValueTextColor.value,
        [0, 1],
        [theme.text.bodyLarge.color, theme.colors.onPrimary]
      ),
    };
  }, [theme, isChosen]);

  useEffect(() => {
    const config = { duration: Durations.veryFast };
    if (isChosen) {
      sharedValueBackgroundColor.value = withTiming(1, config);
      sharedValueTextColor.value = withTiming(1, config);
    } else {
      sharedValueBackgroundColor.value = withTiming(0, config);
      sharedValueTextColor.value = withTiming(0, config);
    }
  }, [isChosen]);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        optionButton: {
          padding: Insets.medium,
          borderWidth: Insets.pixel,
          borderColor: theme.colors.primary,
          borderRadius: Insets.submedium,
          marginBottom: Insets.small,
          marginRight: Insets.medium,
        },
        optionText: {
          ...theme.text.bodyLarge,
        },
      }),
    [theme]
  );

  return (
    <Clickable onPress={toggleOption}>
      <Animated.View style={[styles.optionButton, rnBackgroundColor]}>
        <Animated.Text style={[styles.optionText, rnTextColor]}>
          {option}
        </Animated.Text>
      </Animated.View>
    </Clickable>
  );
}

const FilterOptionSnippet = React.memo(FilterOptionSnippetComponent);
export default FilterOptionSnippet;
