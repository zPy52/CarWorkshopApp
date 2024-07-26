import { useEffect, useRef, useState } from "react";
import Animated, { Easing, useFrameCallback, withDelay } from 'react-native-reanimated';
import { StyleSheet, Text, View, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import Durations from "../../constants/durations";
import Clickable from "../shared/Clickable";
import { router } from "expo-router";


export default function TextFieldPage({}) {
  const { theme } = useTheme()
  const [text, onChangeText] = useState('Useless Text')
  const keyboardHeight = useSharedValue(0)
  const safeAreaInsets = useSafeAreaInsets()
  const inputRef = useRef(null)
  const inputLayout = useSharedValue({ x: 0, y: 0, width: 0, height: 0, pageX: 0, pageY: 0 });

  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: keyboardHeight.value }],
    }
  })

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', (event) => {
      keyboardHeight.value = withDelay(Durations.veryFast, 
          withTiming(-event.endCoordinates.height + Insets.large + safeAreaInsets.bottom, { 
          duration: Durations.normal, 
          easing: Easing.out(Easing.cubic) 
        })
      )
    })

    const keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
      keyboardHeight.value = withTiming(0, { 
        duration: Durations.slow,
        easing: Easing.inOut(Easing.cubic) 
      })
    })

    // Cleanup the event listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardHeight]);

  const styles = useRef(
    StyleSheet.create({
      inputContainer: {
        width: '80%',
      },
      input: {
        color: theme.colors.onBackground,
        backgroundColor: theme.colors.primaryVariant,
        borderRadius: Insets.medium,
        paddingHorizontal: Insets.screenMarginMedium,
        paddingVertical: Insets.screenMarginMedium,
        ...theme.text.bodyLarge,
        elevation: 5,
      },
    })
  ).current

  useFrameCallback(() => {
    if (inputRef.current) {
      inputRef.current.measure((x, y, width, height, pageX, pageY) => {
        inputLayout.value = { x, y, width, height, pageX, pageY };
      });
    }
  });

  return (
    <SafeAreaView> 
      <View>
        <Clickable onPress={() => router.navigate('/')}>
          <Text style={theme.text.bodyLarge}>Go back to home</Text>
        </Clickable>
        <Animated.Text style={theme.text.bodyLarge}>Input Layout: {JSON.stringify(inputLayout.value)}</Animated.Text>
        <View style={{height: 300}}></View>
      </View>
      <Animated.View style={[styles.inputContainer, animatedStyle]}>
        <TextInput 
          ref={inputRef}
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
          placeholderTextColor={theme.colors.primary}
        />
      </Animated.View>
    </SafeAreaView>
  )
}
