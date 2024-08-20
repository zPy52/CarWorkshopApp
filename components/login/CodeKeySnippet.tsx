// CodeKeySnippet.tsx

import React, { forwardRef, useCallback, useMemo } from "react";
import { TextInput, StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import Durations from "../../constants/durations";

type CodeKeySnippetProps = {
  value: string;
  onChangeText: (text: string) => void;
  onKeyPress: (e: any) => void;
  autoFocus: boolean;
};

const CodeKeySnippet = forwardRef<TextInput, CodeKeySnippetProps>(
  ({ value, onChangeText, onKeyPress, autoFocus }, ref) => {
    const { theme } = useTheme();

    const inputBackgroundColor = useSharedValue(0);
    const inputBorderColor = useSharedValue(0);

    const styles = useMemo(
      () =>
        StyleSheet.create({
          container: {
            borderRadius: Insets.medium,
            borderWidth: 1,
          },
          input: {
            ...theme.text.bodyLarge,
            textAlign: "center",
            padding: Insets.screenMarginMedium,
          },
        }),
      [theme]
    );

    // Animated styles for input background and border colors
    const rnInputStyle = useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          inputBackgroundColor.value,
          [0, 1],
          [theme.colors.surface, theme.colors.primaryContainerSoft]
        ),
        borderColor: interpolateColor(
          inputBorderColor.value,
          [0, 1],
          [theme.colors.outline, theme.colors.primary]
        ),
      };
    }, [inputBackgroundColor, inputBorderColor, theme]);

    const changeTextProxy = useCallback(
      (text: string) => {
        const config = { duration: Durations.normal };
        if (text.trim().length > 0) {
          inputBackgroundColor.value = withTiming(1, config);
          inputBorderColor.value = withTiming(1, config);
        } else {
          inputBackgroundColor.value = withTiming(0, config);
          inputBorderColor.value = withTiming(0, config);
        }

        onChangeText(text);
      },
      [onChangeText]
    );

    return (
      <Animated.View style={[styles.container, rnInputStyle]}>
        <TextInput
          ref={ref}
          style={styles.input}
          onChangeText={changeTextProxy}
          onKeyPress={onKeyPress}
          value={value}
          keyboardType="numeric"
          maxLength={1}
          autoFocus={autoFocus}
        />
      </Animated.View>
    );
  }
);

export default CodeKeySnippet;
