import { useEffect, useRef, useState } from "react";
import Animated, {
  Easing,
  useFrameCallback,
  withDelay,
  withSpring,
} from "react-native-reanimated";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Durations from "../../constants/durations";
import Clickable from "../shared/Clickable";
import { router } from "expo-router";
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
  const [text, setText] = useState(initialText);
  const keyboardHeight = useSharedValue(0);
  const safeAreaInsets = useSafeAreaInsets();
  const inputRef = useRef(null);
  const inputLayout = useSharedValue({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    pageX: 0,
    pageY: 0,
  });

  const rnTitleAndInputFieldStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withDelay(Durations.veryFast, keyboardHeight.value) },
      ],
    };
  });

  const rnDescriptionStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withDelay(Durations.normal, keyboardHeight.value) },
      ],
    };
  }, [keyboardHeight]);

  const rnLeftIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(
            Durations.normal,
            withSpring(
              withTiming(-Insets.layoutSmall, {
                duration: Durations.slow,
                easing: Easing.inOut(Easing.cubic),
              })
            )
          ),
        },
      ],
    };
  }, [keyboardHeight]);

  const rnRightIconStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withDelay(
            Durations.normal,
            withSpring(
              withTiming(Insets.layoutSmall, {
                duration: Durations.slow,
                easing: Easing.inOut(Easing.cubic),
              })
            )
          ),
        },
      ],
    };
  }, [keyboardHeight]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      (event) => {
        keyboardHeight.value = withSpring(
          withTiming(
            -event.endCoordinates.height + Insets.large + safeAreaInsets.bottom,
            {
              duration: Durations.normal,
              easing: Easing.out(Easing.cubic),
            }
          )
        );
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        keyboardHeight.value = withSpring(
          withTiming(0, {
            duration: Durations.slow,
            easing: Easing.inOut(Easing.cubic),
          })
        );
      }
    );

    // Cleanup the event listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardHeight]);

  useFrameCallback(() => {
    if (inputRef.current) {
      inputRef.current.measure((x, y, width, height, pageX, pageY) => {
        inputLayout.value = { x, y, width, height, pageX, pageY };
      });
    }
  });

  const onChangeText = useRef((text: string) => {
    setText(textFormatter(text));
  }).current;

  const styles = useRef(
    StyleSheet.create({
      absolute: {
        position: "absolute",
      },
      mainContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
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
        position: "absolute",
        color: theme.colors.onBackground,
        backgroundColor: theme.colors.primaryVariant,
        borderRadius: Insets.medium,
        paddingHorizontal: Insets.screenMarginMedium,
        paddingVertical: Insets.screenMarginMedium,
        ...theme.text.bodyLarge,
        elevation: 5,
      },
    })
  ).current;

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Animated.View
        style={[styles.absolute, styles.leftIcon, rnLeftIconStyle]}
      >
        <Ionicons // should be a React.ReactNode prop, right?
          name="arrow-forward"
          size={Insets.screenMarginLarge}
          color={theme.colors.primary}
        />
      </Animated.View>
      <Animated.View
        style={[styles.absolute, styles.rightIcon, rnRightIconStyle]}
      >
        <Ionicons // should be a React.ReactNode prop, right?
          name="arrow-forward"
          size={Insets.screenMarginLarge}
          color={theme.colors.primary}
        />
      </Animated.View>
      <View>
        <Clickable onPress={() => router.navigate("/")}>
          <Text style={theme.text.bodyLarge}>Go back to home</Text>
        </Clickable>
        <Animated.Text style={theme.text.bodyLarge}>
          Input Layout: {JSON.stringify(inputLayout.value)}
        </Animated.Text>
        <View style={{ height: 300 }}></View>
      </View>
      <Animated.Text style={[theme.text.titleLarge, rnTitleAndInputFieldStyle]}>
        {title}
      </Animated.Text>
      <Animated.Text style={[theme.text.bodyLarge, rnDescriptionStyle]}>
        {description}
      </Animated.Text>
      <Animated.View style={rnTitleAndInputFieldStyle}>
        <TextInput
          ref={inputRef}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.secondary}
        />
      </Animated.View>
    </SafeAreaView>
  );
}
