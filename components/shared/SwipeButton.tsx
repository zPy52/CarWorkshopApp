import { router } from "expo-router";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, StyleProp, ViewStyle, ImageSourcePropType } from "react-native";

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
    const [swipeData, setSwipeData] = useState(data[0]);

    useEffect(() => {
        // El Botón cambia cada 5 segundos
        const interval = setInterval(() => {
            setI(prev => {
                const newIndex = prev < data.length - 1 ? prev + 1 : 0;
                setSwipeData(data[newIndex]);
                return newIndex;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [data.length]);

    return (
        <View style={[styles.container, style]}>
            <TouchableOpacity style={styles.button} onPress={() => router.navigate(navigateTo)}>
                <Text>{swipeData.Text}</Text>
                <Image style={styles.image} source={swipeData.ImageURL} />
            <View style={styles.pagination}>
                {data.map((_, index) => (
                    <View key={index}
                        style={[styles.dot, { backgroundColor: index === i ? 'yellow' : 'gray' }]}
                    />
                ))}
            </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    image: {
        width: 100,
        height: 100,
    },
    pagination: {
        flexDirection: 'row',
        backgroundColor: 'theme.colors.onBackground', // Replace 'theme.colors.onBackground' with the desired color value
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        margin: 5,
    },
});
