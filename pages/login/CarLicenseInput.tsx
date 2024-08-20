import React, { useCallback, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TextInput,
  useWindowDimensions,
  Text,
  Image,
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
import StaticImages from "../../constants/static_images";

type Props = {
  title: string;
  description: string;
  initialText?: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
};

const allowedConsonantsByEU = "BCDFGHJKLMNPRSTVWXYZ";

const springConfig = {
  damping: 20,
  stiffness: 90,
};

export default function CarLicenseInputPage({
  title,
  description,
  initialText = "",
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

  const onChangeText = useCallback((text: string) => {
    text = text.replaceAll(" ", "").toUpperCase();

    if (text.length > 4) {
      text = text.substring(0, 4) + " " + text.substring(4, text.length);
    }

    for (let i = text.length - 1; i > -1; i--) {
      if (i > 4 && !allowedConsonantsByEU.includes(text[i])) {
        text = text.substring(0, i);
      } else if (i < 4 && !/^\d+$/.test(text[i])) {
        text = text.substring(0, i);
      }
    }

    setText(text);
  }, []);

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
    return text.length === 8;
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
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      height: Insets.layoutMedium,
      borderWidth: Insets.pixel,
      borderColor: isFocused ? theme.colors.outlineFocus : theme.colors.outline,
      borderRadius: Insets.medium,
      paddingRight: Insets.small,
      backgroundColor: theme.colors.surface,
    },
    euContainer: {
      height: "100%",
      marginRight: Insets.medium,
      paddingHorizontal: Insets.small,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.misc.euBlue,
      borderColor: theme.colors.misc.euBlue,
      // Note: we have to subtract parent's borderWidth to get a smooth fit with the left borders.
      borderTopLeftRadius: Insets.medium - Insets.pixel,
      borderBottomLeftRadius: Insets.medium - Insets.pixel,
    },
    euLabel: {
      ...theme.text.titleMedium,
      color: theme.colors.misc.euText,
      fontWeight: "bold",
    },
    euImage: {
      height: Insets.screenMarginMedium + Insets.small,
      aspectRatio: 1,
      resizeMode: "contain",
    },
    input: {
      flex: 1,
      ...theme.text.headlineMedium,
      color: theme.colors.onSurface,
      fontWeight: "bold",
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
            name="car-sport"
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
          <View style={styles.inputContainer}>
            <View style={styles.euContainer}>
              <Image
                source={StaticImages.countries.euLogoStars}
                style={styles.euImage}
              />
              <Text style={styles.euLabel}>E</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="0000 XYZ"
              placeholderTextColor={theme.colors.surfaceContainerHighest}
              maxLength={8}
              onFocus={handleFocus}
              onBlur={handleUnfocus}
            />
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
