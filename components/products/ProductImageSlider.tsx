import React, { useCallback, useMemo, useState } from "react";
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import ChevronBack from "../shared/ChevronBack";

type Props = {
  images: string[];
};

export default function ProductImageSlider({ images }: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const styles = StyleSheet.create({
    container: {
      height: "auto",
      width: width,
      position: "relative",
    },
    imageContainer: {
      width: width,
      paddingHorizontal: Insets.screenMarginLarge,
      paddingBottom: Insets.screenMarginLarge,
    },
    image: {
      height: Insets.layoutLarge * 2,
      resizeMode: "contain",
    },
    pagination: {
      position: "absolute",
      bottom: Insets.medium,
      right: Insets.medium,
      backgroundColor: theme.colors.surfaceContainerHighest,
      borderRadius: Insets.medium,
      paddingHorizontal: Insets.submedium,
      paddingVertical: Insets.small,
    },
    paginationText: {
      ...theme.text.bodyMedium,
      color: theme.colors.surface,
    },
    backButton: {
      position: "absolute",
      top: 0,
      left: Insets.medium,
    },
  });

  const onScrollEnd = useCallback(
    (event: { nativeEvent: { contentOffset: { x: any } } }) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x;
      const newIndex = Math.round(contentOffsetX / width);
      setActiveIndex(newIndex);
    },
    []
  );

  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(index) => `img-prod-sld-${index}`}
        horizontal
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onScrollEnd}
      />
      <View style={styles.pagination}>
        <Text style={styles.paginationText}>{`${activeIndex + 1} / ${
          images.length
        }`}</Text>
      </View>
      <View style={styles.backButton}>
        <ChevronBack />
      </View>
    </View>
  );
}
