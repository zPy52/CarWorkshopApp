import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TextInput,
  useWindowDimensions,
} from "react-native";
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
import { router } from "expo-router";
import Clickable from "../../components/shared/Clickable";
import StdButton from "../../components/shared/StdButton";

type Props = {
  title: string;
  description: string;
  initialText?: string;
  placeholder?: string;
  textFormatter?: (text: string) => string;
  leftIcon?: React.ReactNode;
};

const springConfig = {
  damping: 20,
  stiffness: 90,
};

export default function TextInputPage({
  title,
  description,
  initialText = "",
  placeholder = "",
  textFormatter = (text) => text,
  leftIcon,
}: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const [isOpeningKeyboard, setIsOpeningKeyboard] = useState(false);
  const [text, setText] = useState(initialText);
  const [isFocused, setIsFocused] = useState(false);
  const labelAnim = useSharedValue(0);
  const keyboardHeight = useSharedValue(0);
  const safeAreaInsets = useSafeAreaInsets();

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
  }, [isOpeningKeyboard]);

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
  }, [isOpeningKeyboard]);

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
  }, [isOpeningKeyboard]);

  const rnLeftIconStyle = useAnimatedStyle(() => {
    const displacement = isOpeningKeyboard
      ? -Insets.layoutMedium - Insets.layoutSmall
      : 0;
    return {
      transform: [
        {
          translateX: withDelay(
            Durations.fast,
            withSpring(displacement, springConfig)
          ),
        },
      ],
    };
  }, [isOpeningKeyboard]);

  const rnRightIconStyle = useAnimatedStyle(() => {
    const displacement = isOpeningKeyboard ? Insets.layoutMedium : 0;
    return {
      transform: [
        {
          translateX: withDelay(
            Durations.fast,
            withSpring(displacement, springConfig)
          ),
        },
      ],
    };
  }, [isOpeningKeyboard]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (event) => {
        setIsOpeningKeyboard(true);

        keyboardHeight.value = withTiming(
          event.endCoordinates.height +
            safeAreaInsets.top -
            Insets.layoutLarge * 2 -
            Insets.screenMarginLarge -
            Insets.screenMarginMedium,
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

  const onChangeText = useCallback(
    (text: string) => {
      setText(textFormatter(text));
    },
    [textFormatter]
  );

  const handleFocus = useCallback(() => {
    setIsFocused(true);

    labelAnim.value = withTiming(1, {
      duration: Durations.fast,
      easing: Easing.inOut(Easing.cubic),
    });
  }, []);

  const handleUnfocus = useCallback(() => {
    setIsFocused(false);
    if (!text) {
      labelAnim.value = withTiming(0, {
        duration: Durations.fast,
        easing: Easing.inOut(Easing.cubic),
      });
    }
  }, []);

  const buttonEnableChecker = useCallback((text: string) => {
    const formattedText = text.replaceAll(" ", "").trim();
    if (formattedText.length === 0) {
      return false;
    }

    const numberRegex = /^-?\d*(\.\d+)?$/;

    return numberRegex.test(formattedText);
  }, []);

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
    input: {
      backgroundColor: theme.colors.surface,
      paddingLeft: Insets.screenMarginLarge + Insets.medium,
      color: theme.colors.onSurface,
      borderRadius: Insets.medium,
      paddingHorizontal: Insets.screenMarginMedium,
      paddingVertical: Insets.screenMarginMedium,
      borderColor: isFocused ? theme.colors.outlineFocus : theme.colors.outline,
      borderWidth: 1,
    },
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SafeAreaView
        style={[
          styles.absolute,
          {
            paddingHorizontal: Insets.screenMarginMedium,
            paddingTop: Insets.screenMarginMedium,
          },
          {
            width: width,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <Animated.View style={rnLeftIconStyle}>
          <Ionicons
            name="person-circle"
            size={Insets.layoutMedium}
            color={theme.colors.onBackground}
          />
        </Animated.View>
        <Animated.View style={rnRightIconStyle}>
          <Clickable
            onPress={() => {
              router.navigate("/");
            }}
          >
            <Ionicons
              name="close"
              size={Insets.screenMarginLarge}
              color={theme.colors.surfaceVariant}
            />
          </Clickable>
        </Animated.View>
      </SafeAreaView>
      <View
        style={{ paddingTop: Insets.layoutLarge + Insets.screenMarginLarge }}
      >
        <Animated.Text
          style={[
            theme.text.headlineLarge,
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
            placeholderTextColor={theme.colors.surfaceContainerHighest}
            onFocus={handleFocus}
            onBlur={handleUnfocus}
          />

          <View
            style={[
              styles.absolute,
              {
                height: "100%",
                justifyContent: "center",
                paddingLeft: Insets.large,
              },
            ]}
          >
            {leftIcon && leftIcon}
          </View>
        </Animated.View>
      </View>
      <SafeAreaView
        style={[
          styles.absolute,
          {
            padding: Insets.screenMarginMedium,
          },
          { width: width, flex: 1, bottom: 0 },
        ]}
      >
        <View style={{ height: Insets.layoutSmall }}>
          <StdButton
            text="Continuar"
            onPress={() => {}}
            enabled={buttonEnableChecker(text)}
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
