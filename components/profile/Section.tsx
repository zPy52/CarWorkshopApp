import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../constants/insets";
import Clickable from "../shared/Clickable";

type Props = {
  icon: React.ReactNode;
  title: string;
  description?: undefined | null | string;
  style?: any;
  onPress: () => void;
};

export default function ProfileSection({
  icon,
  title,
  description,
  style,
  onPress,
}: Props) {
  const { theme } = useTheme();

  return (
    <Clickable onPress={onPress}>
      <View style={styles.mainColumn}>
        <View style={[styles.mainRow, style]}>
          <View style={[styles.subRow]}>
            <View style={[styles.iconContainer]}>
              {icon}
            </View>
            <View style={styles.textContainer}>
              <Text style={[theme.text.titleMedium, styles.title]} numberOfLines={1}>
                {title}
              </Text>
              {description && (
                <Text
                  style={[
                    theme.text.bodyLarge,
                    styles.description,
                    { color: theme.colors.surfaceVariant },
                  ]}
                >
                  {description}
                </Text>
              )}
            </View>
          </View>
          <View style={styles.iconRightContainer}>
            <Ionicons
              name="chevron-forward"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceContainerHighest}
            />
          </View>
        </View>
      </View>
    </Clickable>
  );
}

const styles = StyleSheet.create({
  mainColumn: {
    width: "100%",
    marginBottom: Insets.large,
    paddingHorizontal: Insets.screenMarginMedium,
  },
  mainRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center", // Alinea verticalmente los elementos
    justifyContent: "space-between",
  },
  subRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexShrink: 1, // Permite que el contenedor de texto se ajuste si es necesario
  },
  iconContainer: {
    paddingTop: Insets.dwarf,
  },
  textContainer: {
    paddingLeft: Insets.submedium,
    flex: 1, // Permite que el texto use el espacio restante
  },
  title: {
    flexShrink: 0, // Evita que el título se redimensione
    width: "90%", // Ocupa todo el ancho disponible para una sola línea
  },
  description: {
    flexShrink: 1, // Permite que la descripción se ajuste según el espacio disponible
    width: "90%", // Usa el 90% del ancho disponible sin mover el icono
  },
  iconRightContainer: {
    marginLeft: -Insets.screenMarginMedium,
    justifyContent: "center", // Centra verticalmente el icono derecho
  },
});
