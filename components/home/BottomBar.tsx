import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Animated, ViewStyle, StyleProp } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/theme';
import { router } from 'expo-router';

type ItemProps = {
  currentScreen: string;
  style?:  StyleProp<ViewStyle>;
};

const BottomBar = ({ currentScreen, style}: ItemProps) => {
  const { theme } = useTheme();

  const [translateValues, setTranslateValues] = useState([0, 0, 0]);

  const tabs = [
    { name: 'home', label: 'Home', icon: "home-outline", route: '/home' },
    { name: '/', label: 'Reserva', icon: "calendar-outline", route: '/' },
    { name: 'contacto', label: 'Contacto', icon: "mail-outline", route: '/help' },
  ];

  const scaleAnims = useRef(tabs.map(() => new Animated.Value(1))).current;
  const translateXAnims = useRef(tabs.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const newTranslateValues = [...translateValues];

    tabs.forEach((tab, index) => {
      const isActive = currentScreen === tab.name;
      Animated.timing(scaleAnims[index], {
        toValue: isActive ? 1.2 : 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      let toValue;

      if (isActive) {
        if (index === 0) {
          toValue = 0;
        } else {
          toValue = -10;
        }
      } else {
        if (currentScreen === 'home' && index > 0) {
          toValue = 10;
        } else {
          toValue = translateValues[index] || -10;
        }
      }

      newTranslateValues[index] = toValue;

      Animated.timing(translateXAnims[index], {
        toValue: newTranslateValues[index],
        duration: 900,
        useNativeDriver: true,
      }).start();
    });

    setTranslateValues(newTranslateValues);
  }, [currentScreen]);

  return (
    <View style={[styles(theme).container, style]}>
      {tabs.map((tab, index) => {
        const isActive = currentScreen === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles(theme, isActive).tab}
            onPress={() => router.push(tab.route)}
          >
            <Animated.View style={[styles(theme).iconLabelContainer, { transform: [{ scale: scaleAnims[index] }, { translateX: translateXAnims[index] }] }]}>

              <View style={[styles(theme, isActive).background]}>

                <Ionicons
                  name={tab.icon as any}
                  size={24}
                  color={isActive ? theme.colors.onPrimary : theme.colors.onSurface}
                />
                {isActive && (
                  <Text style={styles(theme, isActive).label}>
                    {tab.label}
                  </Text>
                )}
              </View>
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = (theme, isActive?) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: theme.colors.background,
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: theme.colors.surface,
    },
    tab: {
      alignItems: 'center',
      flex: 1,
    },
    iconLabelContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    background: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: isActive ? theme.colors.primary : 'transparent',
      borderRadius: 20,
    },
    label: {
      marginLeft: 8,
      fontSize: 14,
      fontWeight: 'bold',
      color: theme.colors.onPrimary,
      fontFamily: 'Inter_500Medium',
    },
  });

export default BottomBar;
