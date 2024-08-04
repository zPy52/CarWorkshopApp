import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/theme';
import { router } from 'expo-router';

const BottomBar = ({ currentScreen }) => {
  const { theme } = useTheme();

  const tabs = [
    { name: 'home', label: 'Home', icon: "home-outline", route: '/home' },
    { name: 'reserva', label: 'Reserva', icon: "calendar-outline", route: '/reserva' },
    { name: 'contacto', label: 'Contacto', icon: "mail-outline", route: '/help' },
    { name: 'cuenta', label: 'Cuenta', icon: "person-outline", route: '/profile' },
  ];

  return (
    <View style={styles(theme).container}>
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
