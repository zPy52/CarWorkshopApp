import { useTheme } from "../../../hooks/theme";
import { StyleSheet, Text, View } from "react-native";
import { useMemo } from "react";
import Insets from "../../../constants/insets";

type Props = {
  tag: string;
};

export default function TyreTag({ tag }: Props) {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          backgroundColor: theme.colors.surface,
          borderRadius: Insets.small,
          paddingVertical: Insets.small,
          paddingHorizontal: Insets.medium,
          margin: Insets.dwarf,
        },
        text: {
          ...theme.text.bodyMedium,
          fontWeight: "bold",
        },
      }),
    [theme]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{tag}</Text>
    </View>
  );
}
