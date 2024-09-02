import React from "react";
import { Image, ImageSourcePropType, StyleProp, View, Text, ViewStyle, Dimensions, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/theme";
import Clickable from "../shared/Clickable";
import { router } from "expo-router";
import Insets from "../../constants/insets";

interface Props {
  style?: StyleProp<ViewStyle>;
  navigateTo: string;
  title: string;
  imageSource: ImageSourcePropType;
  subtitle: string;
}

export default function BigCard({ style, navigateTo, title, imageSource, subtitle }: Props) {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: Insets.submedium,
      paddingLeft: 0,
      maxWidth: Dimensions.get('window').width - 43,
      overflow: 'hidden',
      backgroundColor: theme.colors.background, 
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
    },
    imageContainer: {
      margin: Insets.medium,
      borderRadius: Insets.small,
      overflow: 'hidden',
      width: 100, 
      height: 90, 
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    textContainer: {
      flex: 1,
      marginLeft: Insets.small,
      margin: Insets.small,
    },
    title: {
      fontSize: 17,
      fontWeight: '700',
      color: theme.colors.onBackground, 
    },
    subtitle: {
      fontSize: 13,
      marginTop: Insets.small,
      color: theme.colors.onSurface, 
    },
  });

  return (
    <Clickable onPress={() => router.navigate(navigateTo)} style={[style]}>
      <View style={[styles.container]}>
        <View style={styles.imageContainer}>
          <Image source={imageSource} style={styles.image} />
          <View style={styles.overlay} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </Clickable>
  );
}
