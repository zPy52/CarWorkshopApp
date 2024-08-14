import { useMemo } from "react";
import Insets from "../../../constants/insets";
import { useTheme } from "../../../hooks/theme";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Clickable from "../../shared/Clickable";

type Props = {
  name: string;
  street: string;
  zip: string;
  state: string;
  country: string;
  isDefault?: boolean;
};

export default function AddressSnippet({
  name,
  street,
  zip,
  state,
  country,
  isDefault = false,
}: Props) {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        main: {
          width: "100%",
          borderWidth: isDefault ? 0 : Insets.pixel / 2,
          borderRadius: Insets.large,
          borderColor: isDefault ? null : theme.colors.outline,
          backgroundColor: isDefault ? theme.colors.surface : null,
          padding: Insets.screenMarginMedium,
          alignItems: "flex-start",
        },
        discardView: {
          position: "absolute",
          top: 0,
          right: 0,
          padding: Insets.screenMarginMedium - Insets.medium,
        },
        discardButton: {
          padding: Insets.medium,
        },

        buttonAbsolute: {
          position: "absolute",
          bottom: 0,
          marginLeft: Insets.screenMarginMedium,
          paddingBottom: Insets.screenMarginMedium,
          justifyContent: "flex-end",
        },
        buttons: {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: Insets.large,
        },

        editTextButton: {
          ...theme.text.bodyLarge,
          fontWeight: "bold",
          color: theme.colors.primary,
        },
        setDefaultTextButton: {
          ...theme.text.bodyLarge,
          fontWeight: "bold",
        },
      }),
    [theme, isDefault]
  );

  return (
    <View style={styles.main}>
      <View style={styles.discardView}>
        <Clickable
          onPress={() => {
            // TODO: popup!
          }}
        >
          <View style={styles.discardButton}>
            <Ionicons
              name="close"
              size={Insets.icon}
              color={
                isDefault
                  ? theme.colors.surfaceContainerHighest
                  : theme.colors.surfaceContainerHigh
              }
            />
          </View>
        </Clickable>
      </View>
      <Text style={[theme.text.titleMedium, { fontWeight: "bold" }]}>
        {name}
      </Text>
      <Text style={theme.text.bodyLarge}>
        {street} {/*C/ Erasmo de Rotterdam, 3-5, Puerta D-400*/}
      </Text>
      <Text style={theme.text.bodyLarge}>{zip}</Text>
      <Text style={theme.text.bodyLarge}>{state}</Text>
      <Text style={theme.text.bodyLarge}>{country}</Text>

      <View style={[styles.buttons, isDefault ? styles.buttonAbsolute : {}]}>
        {!isDefault && (
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Clickable
              onPress={() => {
                // TODO: Send to add/edit screen.
              }}
            >
              <Text style={styles.setDefaultTextButton}>
                Establecer como predeterminado
              </Text>
            </Clickable>
          </View>
        )}
        <View style={{ width: Insets.large }} />
        <Clickable
          onPress={() => {
            // TODO: Send to add/edit screen.
          }}
        >
          <Text style={styles.editTextButton}>Editar</Text>
        </Clickable>
      </View>
    </View>
  );
}
