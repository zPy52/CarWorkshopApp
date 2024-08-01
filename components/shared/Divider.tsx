import React from "react";
import { DimensionValue, View } from "react-native";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";

type Props = {
  height?: DimensionValue;
  color?: undefined | null | string;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
};

export default function Divider({
  height = 0.5,
  color = null,
  marginTop = Insets.small,
  marginBottom = Insets.medium,
  marginHorizontal = Insets.screenMarginMedium,
}: Props) {
  const { theme } = useTheme();

  return (
    <View
      style={{
        height,
        backgroundColor: color == null ? theme.colors.outline : color,
        marginTop,
        marginBottom,
        marginHorizontal
      }}
    />
  );
}
