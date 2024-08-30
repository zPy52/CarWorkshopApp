import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView,Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Insets from '../../constants/insets';
import { useTheme } from "../../hooks/theme";
import StdButton from '../shared/StdButton';
import ChevronBack from '../../components/shared/ChevronBack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StaticImages from '../../constants/static_images';



const BrakeSelector = () => {

    const { theme } = useTheme();
    const [brakeType, setBrakeType] = useState(''); // Estado para el selector de frenos
    const [padChangeOption, setPadChangeOption] = useState(''); // Estado para el selector de recambio de pastillas
    const [additionalBrakePadChange, setAdditionalBrakePadChange] = useState(''); // Estado para el selector de opciones adicionales

    const styles = StyleSheet.create({
          header: {
            marginTop: 10,
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
            backgroundColor: theme.colors.surface,
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
          divider: {
            height: 1,
            backgroundColor: theme.colors.outlineVariant,
            marginVertical: 10,
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


{/* Divider */}
<View style={styles.divider} />

{/* Selector de frenos */}
<Text style={styles.header}>Seleccione los frenos</Text>
{renderBrakeButtons(
  [
    { label: 'Delanteros', value: 'front' },
    { label: 'Traseros', value: 'rear' },
    { label: 'Ambos', value: 'both' },
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
        { label: 'Ambos', value: 'bothPads' },
      ],
      additionalBrakePadChange,
      setAdditionalBrakePadChange
    )}
  </>
)}

};

export default BrakeSelector;