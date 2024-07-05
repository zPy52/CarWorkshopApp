import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, Animated, StyleProp, ViewStyle } from 'react-native';
import Durations from '../../constants/durations';

interface ClickableProps {
  onPress: () => void;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  shrinkage?: { x: number; y: number };
}

const Clickable: React.FC<ClickableProps> = ({
  onPress,
  children,
  style,
  shrinkage = { x: 0.985, y: 0.985 },
}) => {
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
      style={[{ overflow: 'hidden' }, style]}
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
};

export default Clickable;
