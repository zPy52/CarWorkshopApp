import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useTheme } from '../../hooks/theme';

const Header = () => {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    headerContainer: {
      padding: 15,
      backgroundColor: theme.colors.primary,
    },
    headerTitle: {
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold',
    },
    searchBox: {
      marginTop: 10,
      backgroundColor: theme.colors.background,
      borderRadius: 5,
      padding: 10,
    },
  });

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>Frenos</Text>
      <TextInput style={styles.searchBox} placeholder="Search" />
    </View>
  );
};


export default Header;
