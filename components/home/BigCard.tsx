import { Image, ImageSourcePropType, StyleProp, View, Text, ViewStyle, Dimensions, StyleSheet } from "react-native";
import { useTheme } from "../../hooks/theme";
import Clickable from "../shared/Clickable";
import { router } from "expo-router";
import Insets from "../../constants/insets";
import React from "react";
import { LinearGradient } from "expo-linear-gradient"; // Add this import statement

interface Props {
  style?: StyleProp<ViewStyle>;
  navigateTo: string;
  title: string;
  imageSource: ImageSourcePropType;
}

export default function HomeCard({ style, navigateTo, title, imageSource }: Props) {
  const { theme } = useTheme();

  return (
    <Clickable onPress={() => router.navigate(navigateTo)}>
      <View style={[styles.container, style]}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.overlay}/>
                <View style={styles.textContainer}>
                    <Text style={[styles.title, { color: theme.colors.onTertiary }]}>
                        {title}
                    </Text>
                    <Text style={[styles.subtitle, { color: theme.colors.onTertiary }]}>
                        Lorem ipsum dolor sit amet.
                    </Text>
                </View>
        </View>
    </Clickable>
  );
}

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
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Yellowish overlay
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
  },
  subtitle: {
    fontSize: 12,
    marginLeft: Insets.small,
    marginTop: Insets.small,
  },
});