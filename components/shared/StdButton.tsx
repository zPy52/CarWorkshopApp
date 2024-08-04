import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import Clickable from "../shared/Clickable";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import { useRef } from "react";

type Props = {
  text: string;
  onPress: () => void;
  enabled?: boolean;
};

export default function StdButton({ text, onPress, enabled = true }: Props) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const styles = useRef(
    StyleSheet.create({
      continueButton: {
        height: Insets.layoutSmall,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: Insets.medium,
        width: width - 2 * Insets.screenMarginMedium,
      },
    })
  ).current;

  return (
    <Clickable onPress={onPress}>
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
            { color: theme.colors.onPrimary },
          ]}
        >
          {text}
        </Text>
      </View>
    </Clickable>
  );
}
