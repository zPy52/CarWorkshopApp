import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Animated, StyleProp, ViewStyle } from 'react-native';
import Durations from '../../constants/durations';

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  children: React.ReactNode;
  shrinkage?: { x: number; y: number };
}

export default function Clickable({
  onPress,
  children,
  shrinkage = { x: 0.985, y: 0.985 },
  style = {},
} : Props) {
  const [shrink, setShrink] = useState(false);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (shrink) {
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: Durations.veryFast,
        //easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: Durations.veryFast,
        //easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }).start();
    }
  }, [shrink]);

  const handlePressIn = () => {
    setShrink(true);
  };

  const handlePressOut = () => {
    setShrink(false);
  };


  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={ 0.8 }
      style={[{ overflow: 'hidden', alignItems: 'center', justifyContent: 'center' }, style]}
    >
      <Animated.View
        style={{
          transform: [
            {
              scaleX: scaleValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, shrinkage.x],
              }),
            },
            {
              scaleY: scaleValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, shrinkage.y],
              }),
            },
          ],
        }}
      >
        { children }
      </Animated.View>
    </TouchableOpacity>
  );
}