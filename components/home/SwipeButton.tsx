import { Dimensions, Image, ImageSourcePropType, StyleSheet, StyleProp, Text, TouchableOpacity, View, ViewStyle, PanResponder, Animated, PanResponderGestureState } from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";

interface SwipeData {
    text: string;
    ImageURL: ImageSourcePropType;
}

interface Props {
    style?: StyleProp<ViewStyle>;
    navigateTo: string;
    data: SwipeData[];
}

export default function SwipeButton({ style, navigateTo, data }: Props) {
    const { theme } = useTheme();
    const router = useRouter();

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
        image: {
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            borderRadius: 10,
            backgroundColor:theme.colors.onBackground
        },
        pagination: {
            flexDirection: 'row',
            position: 'relative',
            bottom: 14,
            left: 0,
            right: 0,
            alignSelf: 'center'
        },
        dot: {
            width: 8,
            height: 5,
            borderRadius: 5,
            margin: 5,
        },
    });
    // Deberia haber texto?
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swipeData, setSwipeData] = useState(data[currentIndex]);

    const handleSwipe = (gestureState: PanResponderGestureState) => {
        const { dx } = gestureState;
        const swipeThreshold = screenWidth / 3;

        if (dx > swipeThreshold && currentIndex > 0) {
            setCurrentIndex(prevIndex => prevIndex - 1);
        } else if (dx < -swipeThreshold && currentIndex < data.length - 1) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    };

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: new Animated.Value(0) }], { useNativeDriver: false }),
        onPanResponderRelease: (e, gestureState) => {
            handleSwipe(gestureState);
        },
    });

    useEffect(() => {
        setSwipeData(data[currentIndex]);
    }, [currentIndex]);

    // Cambiar -> ERROR
    return (
        <Animated.View style={[styles.container, style, { transform: [{ translateX: new Animated.Value(0) }] }]} {...panResponder.panHandlers}>
            <Image style={styles.image} source={swipeData.ImageURL} />
            <View style={styles.pagination}>
                {data.map((_, index) => (
                    <View key={index} style={[styles.dot, { backgroundColor: index === currentIndex ? theme.colors.primary : theme.colors.surfaceVariant }]} />
                ))}
            </View>
        </Animated.View>
    );
}
