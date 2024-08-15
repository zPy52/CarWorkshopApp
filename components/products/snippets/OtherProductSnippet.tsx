import { useTheme } from "../../../hooks/theme";
import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Insets from "../../../constants/insets";
import { Ionicons } from "@expo/vector-icons";
import PriceComponent from "../Price";
import TyreTag from "../tyres/TyreTag";

type Props = {
  imageUri: string;
  productName: string;
  description: string;
  tags?: string[];
};

export default function ProductSnippet({
  imageUri,
  productName,
  description,
  tags = [],
}: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      width: width / 1.5 - Insets.screenMarginMedium * 2, 
      borderRadius: Insets.small,
      borderColor: theme.colors.outlineVariant,
      borderWidth: Insets.pixel / 2
    },
    imageContainer: {
      backgroundColor: theme.colors.surface,

    },
    image: {
      width: "100%",
      aspectRatio: 1,
      resizeMode: "contain",
    },
    textContainer: {
      padding: Insets.medium,
    },
    title: {
      ...theme.text.titleMedium,
      fontWeight: "bold",
      marginBottom: Insets.dwarf,
    },
    description: {
      ...theme.text.bodyMedium,
      color: theme.colors.surfaceContainerHighest,
      marginBottom: Insets.small,
    },
    reviewsContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: Insets.small,
    },
    reviewCount: {
      marginRight: Insets.small,
      ...theme.text.bodyMedium,
      fontWeight: "bold",
    },
    tagContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
    tag: {
      backgroundColor: theme.colors.primary,
      color: theme.colors.onPrimary,
      borderRadius: Insets.small,
      padding: Insets.small,
      marginRight: Insets.small,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
          {productName}
        </Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </Text>
        <View style={styles.reviewsContainer}>
          <Text style={styles.reviewCount}>4,5</Text>
          <Ionicons
            name="star"
            size={Insets.large}
            color={theme.colors.tertiary}
          />
          <Ionicons
            name="star"
            size={Insets.large}
            color={theme.colors.tertiary}
          />
          <Ionicons
            name="star"
            size={Insets.large}
            color={theme.colors.tertiary}
          />
          <Ionicons
            name="star"
            size={Insets.large}
            color={theme.colors.tertiary}
          />
          <Ionicons
            name="star-outline"
            size={Insets.large}
            color={theme.colors.tertiary}
          />
        </View>
        <PriceComponent price={24.31} />
        <View style={{height: Insets.large}}/>
        {tags.length > 0 && (
          <View style={styles.tagContainer}>
            {tags.map((tag, _) => (
              <TyreTag tag={tag}/>
            ))}
          </View>
        )}
      </View>
    </View>
  );
}
