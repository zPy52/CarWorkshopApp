import React, { useCallback, useMemo } from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '../../hooks/theme';
import Clickable from '../shared/Clickable';
import Insets from '../../constants/insets';
import { router } from 'expo-router';
import adjustOpacity from '../../styles/utils';

interface Props {
  key?: React.Key,
  style?: StyleProp<ViewStyle>;
  navigateTo: string;
  title: string;
  imageSource: ImageSourcePropType;
  color?: string;
  backgroundColor?: string;
  mode?: 'normal' | 'secondary' | 'primary'  
}

const imageSizeMap = {
  normal: Insets.layoutLarge,
  secondary: Insets.layoutMedium * 2,
  primary: Insets.layoutLarge + Insets.layoutMedium,
};

export default function HomeCard({ 
  key, 
  navigateTo,
  title, 
  imageSource, 
  color, 
  backgroundColor, 
  style = {}, 
  mode = 'normal',
}: Props) {
  const { theme } = useTheme();

  const onPress = useCallback(() => {
    router.navigate(navigateTo);
  }, [navigateTo]);
  
  const imageSize = useMemo(() => imageSizeMap[mode] || 0.0, [mode]);

  const styles = StyleSheet.create({
    box: {
      position: 'absolute',
    },
    full: {
      height: '100%',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    fullHeight: {
      height: '100%',
    },
    border: {
      borderRadius: Insets.medium,
      borderWidth: 0.5,
      borderColor: adjustOpacity(theme.colors.onBackground, 0.5),
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
  

  return (
    <Clickable key={key} onPress={onPress} style={[styles.full, styles.border, style]}>
      <View style={[
          styles.container, 
          { borderRadius: Insets.medium },
          backgroundColor && { backgroundColor }
        ]}>
        <View style={[
            styles.box, 
            { zIndex: 3, left: 0, top: Insets.medium },
            styles.fullWidth, 
          ]}>
          <Text style={[
              theme.text.titleLarge, 
              { paddingHorizontal: Insets.large }, 
              { fontWeight: 'bold' },
              color && { color }
            ]} >
            { title }
          </Text>
        </View>
        
        <View style={[
            styles.box, 
            { bottom: -Insets.layoutSmall, right: -Insets.layoutSmall }, 
            { zIndex: 2 }
          ]}>
          <Image source={ imageSource } style={[
            { height: imageSize, width: imageSize }
          ]} />
        </View>
        
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.5)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.0)']}
          style={[
            styles.box, 
            { zIndex: 1, left: 0, top: 0 }, 
            styles.full
          ]}
        />
      </View>
    </Clickable>
  );
}