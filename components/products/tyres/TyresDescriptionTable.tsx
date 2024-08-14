import { useTheme } from "../../../hooks/theme";
import WrapView from "../../../components/shared/WrapView";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { useMemo } from "react";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../../constants/insets";

type DataProps = {
  iconName: string;
  title: string;
  data: any;
};

type Props = {
  horizontalPadding?: number | undefined;
  horizontalSpacing?: number | undefined;
  verticalSpacing?: number | undefined;
  data: DataProps[];
};

export default function TyresDescriptionTable({
  data,
  horizontalSpacing,
  horizontalPadding,
  verticalSpacing,
}: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          width: width / 2 - Insets.screenMarginMedium * 2.75,
          flexDirection: "row",
          alignItems: "center",
        },
        descriptionContainer: {
          paddingLeft: Insets.dwarf,
        },
        title: {
          ...theme.text.bodyMedium,
          fontWeight: "bold",
        },
        data: {
          ...theme.text.bodyMedium,
        },
      }),
    [theme, width]
  );

  return (
    <WrapView
      style={{
        paddingHorizontal:
          horizontalPadding == null
            ? Insets.screenMarginMedium
            : horizontalPadding,
      }}
      horizontalSpacing={
        horizontalSpacing == null ? Insets.screenMarginLarge : horizontalSpacing
      }
      verticalSpacing={verticalSpacing == null ? Insets.large : verticalSpacing}
      data={data}
      keyExtractor={(item, index) => `${item.title}-${item.data}-${index}`}
      renderItem={(item) => (
        <View style={styles.container}>
          <Ionicons
            name={item.iconName as any}
            size={Insets.screenMarginLarge}
            color={theme.colors.onBackground}
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
              {item.title}
            </Text>
            <Text style={styles.data} numberOfLines={1} ellipsizeMode="tail">
              {`${item.data}`}
            </Text>
          </View>
        </View>
      )}
    />
  );
}
