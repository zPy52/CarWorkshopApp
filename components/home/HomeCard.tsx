import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../hooks/theme';
import Clickable from '../shared/Clickable';

interface Props {
  title: string;
  imageSource: ImageSourcePropType;
  color?: string;
  backgroundColor?: string;
}

export default function HomeCard({ title, imageSource, color, backgroundColor }: Props) {
  const { theme } = useTheme();

  return (
    <Clickable onPress={() => {console.log("verga");}} style={styles.full}>
      <View style={[
          styles.container, 
          { borderRadius: theme.insets.medium },
          backgroundColor && { backgroundColor }
        ]}>
        <View style={[
            styles.box, 
            { zIndex: 3, left: 0, top: theme.insets.medium },
            { width: '100%' }, 
          ]}>
          <Text style={[
              theme.text.titleLarge, 
              { paddingHorizontal: theme.insets.large }, 
              { fontWeight: 'bold' },
              color && { color }
            ]} >
            { title }
          </Text>
        </View>
        
        <View style={[
            styles.box, 
            { bottom: -theme.insets.layoutSmall, right: -theme.insets.layoutSmall }, 
            { zIndex: 2 }
          ]}>
          <Image source={ imageSource } style={[
            { height: theme.insets.layoutLarge, width: theme.insets.layoutLarge }
          ]} />
        </View>
        
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.25)', 'rgba(0, 0, 0, 0.0)']}
          style={[
            styles.box, 
            { zIndex: 1, left: 0, top: 0 }, 
            { width: '100%', height: '100%' }
          ]}
        />
      </View>
    </Clickable>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
  },
  full: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    flexDirection: 'row',       // Align items in a row
    justifyContent: 'flex-end', // Push items to the right
    alignItems: 'flex-start',   // Center items vertically
  },
});
