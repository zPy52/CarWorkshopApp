import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
import CodeKeySnippet from "../../components/login/CodeKeySnippet";

type Props = {
  title: string;
  description: string;
};

function isCodeComplete(code: string[], expectedLength: number): boolean {
  return code.filter((item) => item !== "").length === expectedLength;
}

export default function SMSValidationPage({ title, description }: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const [isOpeningKeyboard, setIsOpeningKeyboard] = useState(false);
  const keyboardHeight = useSharedValue(0);
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef<(TextInput | null)[]>([]);
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

  const handleChangeText = useCallback(
    (text: string, index: number) => {
      text = text.trim();

      const newCode = [...code];
      newCode[index] = text.length > 0 ? text.charAt(text.length - 1) : "";
      setCode(newCode);

      if (isCodeComplete(newCode, code.length)) {
        Keyboard.dismiss();
      } else if (index < inputsRef.current.length - 1 && text.length > 0) {
        inputsRef.current[index + 1]?.focus();
      }
    },
    [code, theme]
  );

  const handleKeyPress = useCallback(
    (e: any, index: number) => {
      if (e.nativeEvent.key === "Backspace" && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    },
    [code]
  );

  const buttonEnableChecker = useCallback(
    () => code.every((digit) => digit !== ""),
    [code]
  );

  const styles = useMemo(() => StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: "flex-start",
      backgroundColor: theme.colors.background,
      paddingHorizontal: Insets.screenMarginLarge,
    },

    iconsHeaderSection: {
      position: "absolute",
      paddingHorizontal: Insets.screenMarginMedium,
      paddingTop: Insets.screenMarginMedium,

      width: width,
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    headline: {
      ...theme.text.headlineLarge,
      textAlign: "center",
    },

    description: {
      ...theme.text.bodyLarge,
      textAlign: "center",
      paddingTop: Insets.small,
      paddingBottom: Insets.screenMarginLarge,
    },

    inputContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: Insets.large,
    },
    buttonContainer: {
      position: "absolute",
      padding: Insets.screenMarginMedium,
      width: width,
      flex: 1,
      bottom: 0,
    },
  }), [theme, width]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <SafeAreaView style={styles.iconsHeaderSection}>
        <Animated.View style={rnLeftIconStyle}>
          <Ionicons
            name="chatbubbles"
            size={Insets.layoutMedium}
            color={theme.colors.primary}
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
        <Animated.Text style={[styles.headline, rnTitleStyle]}>
          {title}
        </Animated.Text>
        <Animated.Text style={[styles.description, rnDescriptionStyle]}>
          {description}
        </Animated.Text>
        <Animated.View style={rnInputStyle}>
          <View style={styles.inputContainer}>
            {code.map((digit, index) => (
              <CodeKeySnippet
                key={`t-sms-inpt-${index}`}
                ref={(input) => (inputsRef.current[index] = input)}
                value={digit}
                onChangeText={(text) => handleChangeText(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                autoFocus={index === 0}
              />
            ))}
          </View>
        </Animated.View>
      </View>
      <SafeAreaView style={styles.buttonContainer}>
        <View style={{ height: Insets.layoutSmall }}>
          <StdButton
            text="Validar"
            onPress={() => {
              if (!isCodeComplete(code, code.length)) {
                return;
              }

              console.log(code);
            }}
            enabled={buttonEnableChecker()}
          />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
}
