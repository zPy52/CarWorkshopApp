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
};

export default function StdButton({
  text,
  onPress,
  borderRadius,
  enabled = true,
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
            ? theme.colors.primary
            : theme.colors.surfaceVariant,
        },
        buttonText: {
          ...theme.text.titleMedium,
          fontWeight: "bold",
          textAlign: "center",
          color: theme.colors.onPrimary,
          paddingHorizontal: Insets.medium,
        },
      }),
    [theme, borderRadius, enabled]
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
