import { StyleSheet, View, Text } from "react-native";
import Clickable from "./Clickable";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import { useMemo } from "react";

type Props = {
  text: string;
  onPress: () => void;
  autoWidth?: boolean | undefined;
  autoHeight?: boolean | undefined;
  borderRadius?: number | undefined;
  borderWidth?: number | undefined;
  borderColor?: string | undefined;
  enabled?: boolean;
  backgroundColor?: string | undefined;
  textColor?: string | undefined;
  fontWeight?: "bold" | "semibold" | "regular" | null | undefined;
};

export default function StdButton({
  text,
  onPress,
  autoWidth,
  autoHeight,
  borderRadius,
  borderWidth,
  borderColor,
  enabled = true,
  backgroundColor,
  textColor,
  fontWeight = "bold",
}: Props) {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        continueButton: {
          height: autoHeight == null ? "100%" : "auto",
          width: autoWidth == null ? "100%" : "auto",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: borderRadius == null ? Insets.medium : borderRadius,
          borderWidth: borderWidth == null ? 0 : borderWidth,
          borderColor:
            borderColor == null ? theme.colors.transparent : borderColor,
          backgroundColor: enabled
            ? backgroundColor == null
              ? theme.colors.primary
              : backgroundColor
            : theme.colors.surfaceVariant,
        },
        buttonText: {
          ...theme.text.titleMedium,
          fontWeight: fontWeight,
          textAlign: "center",
          color: textColor == null ? theme.colors.onPrimary : textColor,
          paddingHorizontal: Insets.medium,
        },
      }),
    [
      theme,
      autoHeight,
      autoWidth,
      borderRadius,
      borderWidth,
      borderColor,
      enabled,
      backgroundColor,
      textColor,
      fontWeight,
    ]
  );

  return (
    <Clickable onPress={onPress}>
      <View style={styles.continueButton}>
        <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
          {text}
        </Text>
      </View>
    </Clickable>
  );
}
