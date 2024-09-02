import { useMemo } from "react";
import Insets from "../../../constants/insets";
import { useTheme } from "../../../hooks/theme";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Clickable from "../../shared/Clickable";

type AddAddressSnippetProps = {
  sizeMultiplier?: number;
};

export default function AddAddressSnippet({ sizeMultiplier = 2 }: AddAddressSnippetProps) {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        main: {
          height: Insets.layoutLarge,
          width: width - Insets.screenMarginMedium * sizeMultiplier,
          borderWidth: Insets.pixel,
          borderStyle: 'dashed',
          borderRadius: Insets.large,
          borderColor: theme.colors.outline,
          marginHorizontal: Insets.screenMarginMedium,
          alignItems: "center",
          justifyContent: "center",
        },
      }),
    [theme, sizeMultiplier, width]
  );

  return (
    <Clickable onPress={() => {}}>
      <View style={styles.main}>
        <Ionicons name="add-circle" size={Insets.layoutSmall} color={theme.colors.surfaceContainerHigh} />
        <Text style={theme.text.titleMedium}>Añadir dirección</Text>
      </View>
    </Clickable>
  );
}
