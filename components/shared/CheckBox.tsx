import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Clickable from './Clickable';

export default function Checkbox({ label, checked, onChange }) {
  return (
    <View style={styles.container}>
      <Clickable onPress={() => onChange(!checked)}>
        <View style={[styles.checkbox, checked && styles.checked]}>
          {checked && (
            <Ionicons name="checkmark" size={16} color="#fff" />
          )}
        </View>
      </Clickable>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    backgroundColor: '#000',
  },
  label: {
    fontSize: 16,
  },
});
