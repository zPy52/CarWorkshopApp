import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from "../../hooks/theme";

const CustomButton = ({ onPress, title }: { onPress: () => void; title: string }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={onPress}
      style={[
        styles.button,
        isPressed && styles.buttonActive,
      ]}
    >
      <LinearGradient
        colors={isPressed ? ['rgba(2,29,78,0.681)', 'rgba(31,215,232,0.873)'] : ['rgb(14,14,26)', 'rgb(14,14,26)']}
        style={styles.gradient}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 20, // Equivalent to 1.2rem
    paddingVertical: 15, // Equivalent to 1rem
    paddingHorizontal: 25, // Equivalent to 2.5rem
    borderRadius: 10, // Equivalent to 0.4rem
    cursor: 'pointer',
    textTransform: 'uppercase',
    backgroundColor: 'rgb(14, 14, 26)',
    color: 'rgb(234, 234, 234)',
    fontWeight: '700',
    shadowColor: '#1f4c65',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonActive: {
    transform: [{ scale: 0.92 }],
  },
  buttonText: {
    color: 'rgb(234, 234, 234)',
    fontWeight: '700',
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomButton;
