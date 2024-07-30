import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Keyboard, TextInput } from "react-native";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import Durations from "../../constants/durations";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  description: string;
  initialText?: string;
  placeholder?: string;
  textFormatter?: (text: string) => string;
};

export default function TextInputPageComponent({
  title,
  description,
  initialText = "",
  placeholder = "",
  textFormatter = (text) => text,
}: Props) {
  const { theme } = useTheme();
  const [isOpeningKeyboard, setIsOpeningKeyboard] = useState(false);
  const [text, setText] = useState(initialText);
  const keyboardHeight = useSharedValue(0);
  const safeAreaInsets = useSafeAreaInsets();

  const springConfig = useRef({
    damping: 20,
    stiffness: 90,
  }).current;

  const rnTitleStyle = useAnimatedStyle(() => {
    const duration = isOpeningKeyboard ? Durations.normal : 0;

    return {
      transform: [
        {
          translateY: withDelay(
            duration,
            withSpring(keyboardHeight.value, springConfig)
          ),
        },
      ],
    };
  }, [isOpeningKeyboard, keyboardHeight]);

  const rnDescriptionStyle = useAnimatedStyle(() => {
    const duration = Durations.fast;

    return {
      transform: [
        {
          translateY: withDelay(
            duration,
            withSpring(keyboardHeight.value, springConfig)
          ),
        },
      ],
    };
  }, [isOpeningKeyboard, keyboardHeight]);

  const rnInputStyle = useAnimatedStyle(() => {
    const duration = isOpeningKeyboard ? 0 : Durations.normal;

    return {
      transform: [
        {
          translateY: withDelay(
            duration,
            withSpring(keyboardHeight.value, springConfig)
          ),
        },
      ],
    };
  }, [isOpeningKeyboard, keyboardHeight]);

  const rnLeftIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(
            Durations.veryFast,
            withSpring(
              withTiming(-Insets.layoutSmall, {
                duration: Durations.slow,
                easing: Easing.inOut(Easing.cubic),
              }),
              springConfig
            )
          ),
        },
      ],
    };
  }, [isOpeningKeyboard, keyboardHeight]);

  const rnRightIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(
            Durations.veryFast,
            withSpring(
              withTiming(0, {
                duration: Durations.slow,
                easing: Easing.inOut(Easing.cubic),
              }),
              springConfig
            )
          ),
        },
      ],
    };
  }, [isOpeningKeyboard, keyboardHeight]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (event) => {
        setIsOpeningKeyboard(true);

        keyboardHeight.value = withTiming(
          event.endCoordinates.height +
            safeAreaInsets.bottom -
            Insets.layoutMedium - Insets.layoutLarge,
          {
            duration: Durations.normal,
            easing: Easing.out(Easing.cubic),
          }
        );
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        setIsOpeningKeyboard(false);

        keyboardHeight.value = withTiming(0, {
          duration: Durations.slow,
          easing: Easing.inOut(Easing.cubic),
        });
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardHeight, safeAreaInsets]);

  const onChangeText = useRef((text: string) => {
    setText(textFormatter(text));
  }).current;

  const styles = StyleSheet.create({
    absolute: {
      position: "absolute",
    },
    mainContainer: {
      flex: 1,
      justifyContent: "flex-start",
      backgroundColor: theme.colors.background,
      paddingHorizontal: Insets.screenMarginLarge,
    },
    leftIcon: {
      top: Insets.screenMarginLarge,
      left: Insets.screenMarginLarge,
    },
    rightIcon: {
      top: Insets.screenMarginLarge,
      right: Insets.screenMarginLarge,
    },
    input: {
      backgroundColor: theme.colors.primaryContainer,
      color: theme.colors.onPrimary,
      borderRadius: Insets.medium,
      paddingHorizontal: Insets.screenMarginMedium,
      paddingVertical: Insets.screenMarginMedium,
      elevation: 5,
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View
        style={[styles.absolute, styles.leftIcon, rnLeftIconStyle]}
      >
        <Ionicons
          name="arrow-forward"
          size={Insets.screenMarginLarge}
          color={theme.colors.onBackground}
        />
      </Animated.View>
      <Animated.View
        style={[styles.absolute, styles.rightIcon, rnRightIconStyle]}
      >
        <Ionicons
          name="arrow-forward"
          size={Insets.screenMarginLarge}
          color={theme.colors.onBackground}
        />
      </Animated.View>
      <View style={[{ paddingTop: Insets.layoutLarge }]}>
        <Animated.Text
          style={[
            theme.text.titleLarge,
            { textAlign: "center" },
            rnTitleStyle,
          ]}
        >
          {title}
        </Animated.Text>
        <Animated.Text
          style={[
            theme.text.bodyLarge,
            { textAlign: "center" },
            {
              paddingTop: Insets.small,
              paddingBottom: Insets.screenMarginLarge,
            },
            rnDescriptionStyle,
          ]}
        >
          {description}
        </Animated.Text>
        <Animated.View style={rnInputStyle}>
          <TextInput
            style={[theme.text.bodyLarge, styles.input]}
            onChangeText={onChangeText}
            value={text}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.surfaceVariant}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
