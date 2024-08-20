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
      maxWidth: Dimensions.get('window').width - 43,
      overflow: 'hidden',
      backgroundColor: theme.colors.background, // Ajusta según el tema para modo light
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 102, 255, 0.1)', // Yellowish overlay
    },
    imageContainer: {
      margin: Insets.small,
      borderRadius: Insets.small,
      overflow: 'hidden',
      width: 100, // Ajusta el tamaño del contenedor de la imagen
      height: 90, // Hace que la altura sea igual a la del botón
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
      color: theme.colors.onBackground, // Ajuste para modo light
    },
    subtitle: {
      fontSize: 13,
      marginTop: Insets.small,
      color: theme.colors.onSurface, // Ajuste para modo light
    },
  });

  return (
    <Clickable onPress={() => router.navigate(navigateTo)}>
      <View style={[styles.container, style]}>
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
