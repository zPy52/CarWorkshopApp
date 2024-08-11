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
      padding: Insets.submedium,
      borderRadius: Insets.large,
      alignItems: 'center',
      maxWidth: Dimensions.get('window').width - 43,
      overflow: 'hidden',
      position: 'relative',
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      width: '150%', // Zoom in the image
      height: '150%', // Zoom in the image
      resizeMode: 'cover',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 200, 0.4)'
    },
    textContainer: {
      marginTop: -10,
      margin: 15,
      maxWidth: '100%',
    },
    title: {
      fontSize: 15,
      fontWeight: '700',
      marginLeft: Insets.small,
      color: theme.colors.onTertiary,
    },
    subtitle: {
      fontSize: 12,
      marginLeft: Insets.small,
      marginTop: Insets.small,
      color: theme.colors.onTertiary,
    },
  });

  return (
    <Clickable onPress={() => router.navigate(navigateTo)}>
      <View style={[styles.container, style]}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
    </Clickable>
  );
}
