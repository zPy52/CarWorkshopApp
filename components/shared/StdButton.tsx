import { StyleSheet, View, Text } from "react-native";
import Clickable from "./Clickable";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import { useMemo } from "react";

type Props = {
  text: string;
  onPress: () => void;
  borderRadius?: number | undefined;
  enabled?: boolean;
  backgroundColor?: string | undefined;
  textColor?: string | undefined;
};

export default function StdButton({
  text,
  onPress,
  borderRadius,
  enabled = true,
  backgroundColor,
  textColor,
}: Props) {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        continueButton: {
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: borderRadius == null ? Insets.medium : borderRadius,
          backgroundColor: enabled
            ? backgroundColor == null
              ? theme.colors.primary
              : backgroundColor
            : theme.colors.surfaceVariant,
        },
        buttonText: {
          ...theme.text.titleMedium,
          fontWeight: "bold",
          textAlign: "center",
          color: textColor == null ? theme.colors.onPrimary : textColor,
          paddingHorizontal: Insets.medium,
        },
      }),
    [theme, borderRadius, enabled, backgroundColor, textColor]
  );

  return (
    <Clickable onPress={onPress}>
<<<<<<< HEAD
      <View style={styles.continueButton}>
        <Text style={styles.buttonText} numberOfLines={1} ellipsizeMode="tail">
=======
      <View
        style={[
          styles.continueButton,
          {
            backgroundColor: enabled
              ? theme.colors.primary
              : theme.colors.surfaceVariant,
          },
        ]}
      >
        <Text
          style={[
            theme.text.titleMedium,
            { fontWeight: "bold", textAlign: "center" },
            { color: theme.colors.background },
          ]}
        >
>>>>>>> RamaAlvaro
          {text}
        </Text>
      </View>
    </Clickable>
  );
}
