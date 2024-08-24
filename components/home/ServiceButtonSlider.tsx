import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useTheme } from "../../hooks/theme";
import { router } from "expo-router";
import { Theme } from "../../styles/theme";

export default function ServiceButtons({ data }) {
  const { theme } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
    button: {
      width: 140,
      height: 140,
      borderRadius: 10,
      overflow: "hidden",
      alignItems: "center",
      justifyContent: "flex-end", // Aligns the text at the bottom
      paddingBottom: 10, // Adds some padding at the bottom for the text
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 102, 255, 0.15)',
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.button}
          onPress={() => router.navigate(item.navigateTo)}
        >
          <Image source={item.ImageURL} style={styles.image} />
          <View style={styles.overlay} />
          <Text style={[styles.text, { color: theme.colors.onBackground }]}>
            {item.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

