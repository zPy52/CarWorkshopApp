import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
  title: string;
  color?: string;
  backgroundColor?: string;
}

export default function HomeCard({ title, backgroundColor }: Props) {
  return (
    <View style={[styles.container, backgroundColor != null ? { backgroundColor: backgroundColor } : {}]}>
      <View style={[styles.box, { top: 10, right: 15 }, { zIndex: 1 }]}>
        <Text style={styles.text} numberOfLines={1}>
          { title }
        </Text>
      </View>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.25)', 'rgba(0, 0, 0, 0.0)']}
        style={[{ flex: 1 }, { height: '100%' }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
  },
  container: {
    height: '60%',
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',       // Align items in a row
    justifyContent: 'flex-end', // Push items to the right
    alignItems: 'flex-start',       // Center items vertically
    borderWidth: 1,
    borderColor: '#d4a',
  },
  text: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
