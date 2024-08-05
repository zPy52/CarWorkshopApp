import { StyleSheet, View, Text, TextComponent } from "react-native";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../constants/insets";
import Clickable from "../shared/Clickable";

type Props = {
  icon: React.ReactNode;
  title: string;
  description?: undefined | null | string;
  onPress: () => void;
};

export default function ProfileSection({
  icon,
  title,
  description,
  onPress,
}: Props) {
  const { theme } = useTheme();

  return (
    <Clickable onPress={onPress}>
      <View style={styles.mainColumn}>
        <View style={styles.mainRow}>
          <View
            style={[styles.subRow, description && { alignItems: "flex-start" }]}
          >
            <View style={description && { paddingTop: Insets.dwarf }}>
              {icon}
            </View>
            <View style={{ paddingLeft: Insets.submedium }}>
              <Text style={theme.text.titleMedium}>{title}</Text>
              {description && (
                <Text
                  style={[
                    theme.text.bodyLarge,
                    { color: theme.colors.surfaceVariant },
                  ]}
                >
                  {description}
                </Text>
              )}
            </View>
          </View>

          <View style={{ paddingTop: Insets.small }}>
            <Ionicons
              name="chevron-forward"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceContainerHighest}
            />
          </View>
        </View>

        {
          //<Divider marginTop={Insets.medium} />
        }
      </View>
    </Clickable>
  );
}

const styles = StyleSheet.create({
  mainColumn: {
    width: "100%",
    marginBottom: Insets.large,
  },
  mainRow: {
    height: "auto",
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: Insets.screenMarginMedium,
  },
  subRow: {
    flexShrink: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "flex-start",
    paddingRight: Insets.icon,
  },
});
