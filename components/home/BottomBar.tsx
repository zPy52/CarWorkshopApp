import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/theme';
import { router } from 'expo-router';

interface Props {
  style?: StyleProp<ViewStyle>;
  currentScreen: string;
}

const BottomBar = ({ currentScreen, style }: Props) => {
  const { theme } = useTheme();

  const tabs = [
    { name: 'home', label: 'Inicio', icon: "home-outline", route: '/home' },
    { name: 'reserva', label: 'Reserva', icon: "calendar-outline", route: '/bookings' },
    { name: 'perfil', label: 'Perfil', icon: "person-outline", route: '/profile' },
    // { name: 'carrito', label: 'Carrito', icon: "cart-outline", route: '/basket' },
  ];

  return (
    <View style={[styles(theme).container, style]}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.name}
          style={styles(theme, currentScreen === tab.name).tab}
          onPress={() => router.push(tab.route)}
        >
          <Ionicons
            name={tab.icon as "home" | "home-outline" | "calendar-outline" | "person-outline"}
            size={24}
            color={currentScreen === tab.name ? theme.colors.primary : theme.colors.onSurface}
          />
          <Text style={styles(theme, currentScreen === tab.name).label}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
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
    label: {
      fontSize: 12,
      fontWeight: isActive ? 'bold' : 'normal',
      color: isActive ? theme.colors.primary : theme.colors.onSurface,
      marginTop: 4,
    },
  });

export default BottomBar;