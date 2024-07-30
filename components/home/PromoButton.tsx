import { Dimensions, Image, ImageSourcePropType, StyleSheet, StyleProp, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { useRouter } from "expo-router";
import React, { useState, useEffect, useRef } from "react";
import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";
import { FlatList } from "react-native-gesture-handler";

interface SwipeData {
    id: string;
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
            height: 133,
            marginTop: 10,
            padding: Insets.submedium,
            borderRadius: Insets.small,
        },
        image: {
            height: '100%',
            width: '100%',
            resizeMode: 'contain',
            borderRadius: 10,
            backgroundColor: theme.colors.background,
        },
        paginationContainer: {
            flexDirection: 'row',
            position: 'absolute',
            bottom: -Insets.screenMarginMedium,
            alignSelf: 'center',
        },
        paginationDot: {
            height: 10,
            width: 10,
            borderRadius: 5,
            backgroundColor: theme.colors.onBackground,
            margin: 5,
        },
    });

    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;
                if (nextIndex >= data.length) {
                    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
                    return 0;
                }
                flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
                return nextIndex;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [data.length]);

    const handlePromotionPress = (item: SwipeData) => {
        // Lógica al pulsar una promoción
        alert(`Promoción seleccionada: ${item.text}`);
        router.navigate(navigateTo);
    };

    const renderPagination = () => (
        <View style={styles.paginationContainer}>
            {data.map((_, index) => (
                <View
                    key={index}
                    style={[
                        styles.paginationDot,
                        { opacity: index === currentIndex ? 1 : 0.3 },
                    ]}
                />
            ))}
        </View>
    );

    const renderItem = ({ item }: { item: SwipeData }) => (
        <TouchableOpacity style={styles.container} onPress={() => handlePromotionPress(item)}>
            <Image style={styles.image} source={item.ImageURL} />
        </TouchableOpacity>
    );

    return (
        <View style={{marginBottom: Insets.screenMarginMedium}}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
                ref={flatListRef}
                renderItem={renderItem}
                onMomentumScrollEnd={(e) => {
                    const newIndex = Math.round(e.nativeEvent.contentOffset.x / screenWidth);
                    setCurrentIndex(newIndex);
                }}
            />
            {renderPagination()}
        </View>
    );
}


// const styles = StyleSheet.create({
//   promoContainer: {
//     width,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   promoTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   promoDescription: {
//     fontSize: 16,
//     color: '#888',
//   },
// });

// export default PromoCarousel;
