import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StyleProp, ViewStyle, ImageSourcePropType, Dimensions } from "react-native";
import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";

interface SwipeData {
    Text: string;
    ImageURL: ImageSourcePropType;
}

interface Props {
    style?: StyleProp<ViewStyle>;
    navigateTo: string;
    data: SwipeData[];
}

export default function SwipeButton({ style, navigateTo, data }: Props) {
    const [i, setI] = useState(0);
      const { theme } = useTheme()
    const [swipeData, setSwipeData] = useState(data[0]);

    useEffect(() => {
        // El Botón cambia cada 5 segundos
        const interval = setInterval(() => {
            setI(prev => {
                const newIndex = prev < data.length - 1 ? prev + 1 : 0;
                setSwipeData(data[newIndex]);
                return newIndex;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [data.length]);

    const screenWidth = Dimensions.get("window").width;

    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            flexDirection: 'column',
            width: screenWidth - Insets.screenMarginMedium * 1.75,
            height: 240,
            marginTop: 10,
            padding: Insets.submedium,
            borderRadius: Insets.small,

        },
        pagination: {
            flexDirection: 'row',
            backgroundColor: 'theme.colors.onBackground', // Replace 'theme.colors.onBackground' with the desired color value
        },
        dot: {
            width: 8,
            height: 5,
            borderRadius: 5,
            margin: 5,
        },
    });

    return (
        <TouchableOpacity style={[styles.container, style]} onPress={() => router.navigate(navigateTo)}>
            <Image style={[{ height: '100%', width: '100%', resizeMode: 'contain', borderRadius: 10, backgroundColor:theme.colors.onBackground}]} source={swipeData.ImageURL} />
            <Text>{swipeData.Text}</Text>
            <View style={[styles.pagination, { position: 'relative', bottom: 33, left: 0, right: 0, alignSelf: 'center' }]}>
                {data.map((_, index) => (
                    <View key={index}
                        style={[styles.dot, { backgroundColor: index === i ? theme.colors.primary : theme.colors.surface }]}
                    />
                ))}
            </View>
        </TouchableOpacity>
    );
}
