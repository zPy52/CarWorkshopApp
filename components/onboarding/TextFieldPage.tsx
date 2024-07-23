import { useEffect, useRef, useState } from "react";
import { StyleSheet, Dimensions, View, Animated, Keyboard } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";


export default function TextFieldPage({}) {
  const { theme } = useTheme();
  const [text, onChangeText] = useState('Useless Text');
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [inputY, setInputY] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (event) => {
      setKeyboardVisible(true);
      setKeyboardHeight(event.endCoordinates.height);
      Animated.timing(inputY, {
        toValue: event.endCoordinates.height -10,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
      setKeyboardHeight(0);
      Animated.timing(inputY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });

    // Cleanup the event listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const styles = useRef(
    StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputContainer: {
        width: '80%',
      },
      input: {
        color: theme.colors.onSurface,
        backgroundColor: theme.colors.background,
        borderRadius: Insets.medium,
        paddingHorizontal: Insets.screenMarginMedium,
        paddingVertical: Insets.screenMarginMedium,
        ...theme.text.bodyLarge,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      },
    })
  ).current

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.inputContainer, { transform: [
          { translateY: inputY },
        ]}]}>
        <TextInput 
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="useless placeholder"
          placeholderTextColor={theme.colors.surfaceVariant}
        />
      </Animated.View>
    </SafeAreaView>
  )
}
