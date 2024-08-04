import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Insets from '../../constants/insets';
import { useTheme } from "../../hooks/theme";
import StdButton from '../shared/StdButton'; // Asegúrate de que la ruta sea correcta

const BrakeSelector = () => {
  const [brakeType, setBrakeType] = useState(''); // Estado para el selector de frenos
  const [padChangeOption, setPadChangeOption] = useState(''); // Estado para el selector de recambio de pastillas
  const [additionalBrakePadChange, setAdditionalBrakePadChange] = useState(''); // Estado para el selector de opciones adicionales
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      marginLeft: 20,
      marginRight: 20,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    headerContainer: {
      marginTop: Insets.screenMarginLarge,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    button: {
      flex: 1,
      paddingVertical: 10,
      marginHorizontal: 5,
      borderRadius: 10,
      backgroundColor: theme.colors.surfaceContainerLow,
      alignItems: 'center',
      justifyContent: 'center',
    },
    selectedButton: {
      backgroundColor: theme.colors.primary,
    },
    buttonText: {
      fontSize: 16,
      color: theme.colors.onBackground,
    },
    selectedButtonText: {
      color: theme.colors.background,
    },
    title: {
      fontSize: 20,
      marginTop: Insets.screenMarginLarge,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    duration: {
      fontSize: 16,
      color: theme.colors.outlineFocus,
      marginLeft: 7.5,
    },
    description: {
      fontSize: 14,
      color: theme.colors.outlineFocus,
      marginTop: 5,
      marginBottom: 5
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.outlineVariant,
      marginVertical: 10,
    },
    // Estilo para centrar el botón
    centeredButton: {
      marginVertical: 20,
      alignItems: 'center',
    },
  });

  const renderBrakeButtons = (options, selectedValue, onSelect) => (
    <View style={styles.buttonContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={[
            styles.button,
            selectedValue === option.value && styles.selectedButton,
          ]}
          onPress={() => onSelect(option.value)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedValue === option.value && styles.selectedButtonText,
            ]}
          >
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const handleRequestQuote = () => {
    // Lógica para manejar la solicitud de presupuesto
    console.log("Solicitando presupuesto...");
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Servicio de recambio de frenos</Text>
        <View style={styles.row}>
          <Ionicons
            name="timer"
            size={Insets.screenMarginMedium}
            color={theme.colors.surfaceVariant}
          />
          <Text style={styles.duration}>3h-6h</Text>
        </View>
        <Text style={styles.description}>
          El servicio esencial para asegurar que los frenos de tu coche funcionen de manera óptima y segura.
        </Text>
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Selector de frenos */}
      <Text style={styles.header}>Seleccione una opción de recambio</Text>
      {renderBrakeButtons(
        [
          { label: 'Delanteros', value: 'front' },
          { label: 'Traseros', value: 'rear' },
          { label: 'Delanteros y Traseros', value: 'both' },
        ],
        brakeType,
        setBrakeType
      )}

      {/* Selector de recambio de pastillas */}
      <Text style={styles.header}>¿Desea además un recambio de pastillas?</Text>
      {renderBrakeButtons(
        [
          { label: 'Sí', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
        padChangeOption,
        setPadChangeOption
      )}

      {/* Condicional para mostrar los botones adicionales */}
      {padChangeOption === 'yes' && (
        <>
          <Text style={styles.header}>Selecciona la opción de recambio de pastillas</Text>
          {renderBrakeButtons(
            [
              { label: 'Delanteros', value: 'frontPads' },
              { label: 'Traseros', value: 'rearPads' },
              { label: 'Delanteros y Traseros', value: 'bothPads' },
            ],
            additionalBrakePadChange,
            setAdditionalBrakePadChange
          )}
        </>
      )}

      {/* Botón para solicitar el servicio
      <View style={styles.centeredButton}>
        <StdButton
          text="Pedir presupuesto"
          onPress={handleRequestQuote}
          enabled={true} // Puedes cambiar esto a una condición si necesitas deshabilitar el botón
        />
      </View> */}
    </View>
  );
};

export default BrakeSelector;
