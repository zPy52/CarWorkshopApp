import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from "../../hooks/theme";
import ChevronBack from '../../components/shared/ChevronBack';
import Insets from '../../constants/insets';
import StdButton from '../shared/StdButton';
import Checkbox from '../../components/shared/CheckBox';
import { useRouter } from 'expo-router';
import AddAddressSnippet from '../../components/profile/addresses/AddAddressSnippet';

const BrakeSelector = ({ onBack }) => {
  const { theme } = useTheme();
  const [brakeType, setBrakeType] = useState(''); // Estado para el selector de frenos
  const [brakePadType, setBrakePadType] = useState(''); // Estado para el selector de pastillas de freno
  const [checked, setChecked] = useState({
    frontBrakes: false,
    rearBrakes: false,
    frontPads: false,
    rearPads: false,
    includeBrakePads: false,
  });
  const router = useRouter();

  // Función para manejar el cambio en el selector de frenos
  const handleBrakeTypeChange = (value) => {
    setBrakeType(value);
    if (value !== 'both') {
      // Si no es "Ambos", asegúrate de desmarcar ambos checkboxes
      setChecked(prevChecked => ({ ...prevChecked, frontBrakes: false, rearBrakes: false }));
    } else {
      // Si es "Ambos", desmarcar ambos checkboxes de front y rear inicialmente
      setChecked(prevChecked => ({ ...prevChecked, frontBrakes: false, rearBrakes: false }));
    }
  };

  // Función para manejar el cambio en el selector de pastillas de freno
  const handleBrakePadTypeChange = (value) => {
    setBrakePadType(value);
    if (value !== 'both') {
      // Si no es "Ambos", asegúrate de desmarcar ambos checkboxes
      setChecked(prevChecked => ({ ...prevChecked, frontPads: false, rearPads: false }));
    } else {
      // Si es "Ambos", desmarcar ambos checkboxes de front y rear inicialmente
      setChecked(prevChecked => ({ ...prevChecked, frontPads: false, rearPads: false }));
    }
  };

  // Función para manejar el cambio en las casillas de verificación
  const handleCheckboxChange = (key) => {
    setChecked(prevChecked => ({ ...prevChecked, [key]: !prevChecked[key] }));
  };

  // Renderiza los botones de selección
  const renderButtons = (options, selectedValue, onSelect) => (
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
    router.push('./pantalla3');
  };

  const handleChevronBackPress = () => {
    if (brakePadType) {
      setBrakePadType('');
    } else if (brakeType) {
      setBrakeType('');
    } else {
      onBack();
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      marginTop: 10,
    },
    content: {
      padding: 10,
    },
    header: {
      marginTop: 10,
      marginBottom: 10,
      fontSize: 18,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    containerTitleBotom: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 5,
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
    buttonPresupuesto: {
      marginBottom: 10,
      marginTop: 10,
      height: Insets.layoutSmall,
      width: '100%',
    },
    scrollViewContent: {
      flexGrow: 1,
      padding: Insets.screenMarginMedium,
    },
    topContainer: {
      marginTop: 10,
      marginBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    step: {
      borderRadius: 20,
      paddingVertical: 5,
      paddingHorizontal: 15,
    },
    stepText: {
      textAlign: 'center',
    },
    NoactiveStep: {
      backgroundColor: theme.colors.surface,
    },
    activeStep: {
      backgroundColor: theme.colors.onSuccessContainer,
    },
    line: {
      height: 2,
      flex: 1,
      backgroundColor: theme.colors.surface,
    },
    footer: {
      borderColor: theme.colors.surface,
      borderWidth: 1,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      flexWrap: 'wrap',
    },
    checkboxContainerBoth: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%',
      marginTop: 20,
    },
    checkboxContainerBothMid: {
      marginTop: 15,
    },
    label: {
      marginLeft: 8,
    },
    productItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
      marginBottom: 20,
    },
    selecionarOpciones: {
      marginTop: 10,
      marginBottom: 20,
    },
    seleccionCoche: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.containerTitleBotom}>
          <TouchableOpacity
            onPress={handleChevronBackPress}
            style={{ position: 'absolute', left: -25, top: -13 }}
          >
            <ChevronBack />
          </TouchableOpacity>
          <Text style={styles.title}>Servicio de frenos</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.topContainer}>
          <View style={[styles.step, styles.activeStep]}>
            <Text style={styles.stepText}>1</Text>
          </View>
          <View style={[styles.line, styles.activeStep]} />
          <View style={[styles.step, styles.NoactiveStep]}>
            <Text style={styles.stepText}>2</Text>
          </View>
          <View style={styles.line} />
          <View style={[styles.step, styles.NoactiveStep]}>
            <Text style={styles.stepText}>3</Text>
          </View>
        </View>

        <View style={styles.content}>

          <Text style={styles.sectionTitle}>Datos de las piezas</Text>

          <Text style={styles.seleccionCoche}>Seleccione el coche en el que desea aplicar el servicio*</Text>
          <Text style={styles.label}>AQUI VA EL SELECIONADOR DE VEHICULO, ES DECIR, EN VEZ DE PONER AÑADIR DIRECCION PONDRA SELECIONE UN VEHICULO</Text>
          <View style={styles.selecionarOpciones}>
            <AddAddressSnippet sizeMultiplier={4} />
          </View>

          {/* Selector de frenos */}
          <Text style={styles.header}>Seleccione posición de los frenos</Text>
          {renderButtons(
            [
              { label: 'Delanteros', value: 'front' },
              { label: 'Traseros', value: 'rear' },
              { label: 'Ambos', value: 'both' },
            ],
            brakeType,
            handleBrakeTypeChange
          )}

          {/* Mostrar las casillas de verificación cuando el tipo de freno es "Ambos" */}
          {brakeType === 'both' && (
            <View style={styles.checkboxContainerBoth}>
              <Checkbox
                label="Deseo elegir la pieza delantera"
                checked={checked.frontBrakes}
                onChange={() => handleCheckboxChange('frontBrakes')}
              />
              <View style={styles.checkboxContainerBothMid}></View>
              <Checkbox
                label="Deseo elegir la pieza trasera"
                checked={checked.rearBrakes}
                onChange={() => handleCheckboxChange('rearBrakes')}
              />
            </View>
          )}
          {brakeType === 'front' && (
            <View style={styles.checkboxContainer}>
              <Checkbox
                label="Deseo elegir la pieza"
                checked={checked.frontBrakes}
                onChange={() => handleCheckboxChange('frontBrakes')}
              />
            </View>
          )}
          {brakeType === 'rear' && (
            <View style={styles.checkboxContainer}>
              <Checkbox
                label="Deseo elegir la pieza"
                checked={checked.rearBrakes}
                onChange={() => handleCheckboxChange('rearBrakes')}
              />
            </View>
          )}

          {/* Selector de pastillas de freno */}
          <View style={styles.checkboxContainer}>
            <Checkbox
              label="Deseo elegir pastillas de freno"
              checked={checked.includeBrakePads}
              onChange={() => handleCheckboxChange('includeBrakePads')}
            />
          </View>

          {/* Mostrar opciones para pastillas de freno si la casilla está marcada */}
          {checked.includeBrakePads && (
            <>
              <Text style={styles.header}>Seleccione posición de las pastillas de freno</Text>
              {renderButtons(
                [
                  { label: 'Delanteros', value: 'front' },
                  { label: 'Traseros', value: 'rear' },
                  { label: 'Ambos', value: 'both' },
                ],
                brakePadType,
                handleBrakePadTypeChange
              )}
              {/* Mostrar las casillas de verificación para pastillas de freno */}
              {brakePadType === 'both' && (
                <View style={styles.checkboxContainerBoth}>
                  <Checkbox
                    label="Deseo elegir la pastilla delantera"
                    checked={checked.frontPads}
                    onChange={() => handleCheckboxChange('frontPads')}
                  />
                  <View style={styles.checkboxContainerBothMid}></View>
                  <Checkbox
                    label="Deseo elegir la pastilla trasera"
                    checked={checked.rearPads}
                    onChange={() => handleCheckboxChange('rearPads')}
                  />
                </View>
              )}
              {brakePadType === 'front' && (
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    label="Deseo elegir la pastilla"
                    checked={checked.frontPads}
                    onChange={() => handleCheckboxChange('frontPads')}
                  />
                </View>
              )}
              {brakePadType === 'rear' && (
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    label="Deseo elegir la pastilla"
                    checked={checked.rearPads}
                    onChange={() => handleCheckboxChange('rearPads')}
                  />
                </View>
              )}
            </>
          )}

          {/* Mostrar los textos de catálogo si las casillas están marcadas */}
          {checked.frontBrakes && brakeType === 'both' && (
            <Text style={styles.title}>Aquí se mostrará el catálogo para la pieza delantera de freno</Text>
          )}
          {checked.rearBrakes && brakeType === 'both' && (
            <Text style={styles.title}>Aquí se mostrará el catálogo para la pieza trasera de freno</Text>
          )}
          {checked.frontBrakes && brakeType === 'front' && (
            <Text style={styles.title}>Aquí se mostrará el catálogo para la pieza delantera de freno</Text>
          )}
          {checked.rearBrakes && brakeType === 'rear' && (
            <Text style={styles.title}>Aquí se mostrará el catálogo para la pieza trasera de freno</Text>
          )}
          {checked.frontPads && brakePadType === 'both' && (
            <Text style={styles.title}>Aquí se mostrará el catálogo para la pastilla delantera de freno</Text>
          )}
          {checked.rearPads && brakePadType === 'both' && (
            <Text style={styles.title}>Aquí se mostrará el catálogo para la pastilla trasera de freno</Text>
          )}
          {checked.frontPads && brakePadType === 'front' && (
            <Text style={styles.title}>Aquí se mostrará el catálogo para la pastilla delantera de freno</Text>
          )}
          {checked.rearPads && brakePadType === 'rear' && (
            <Text style={styles.title}>Aquí se mostrará el catálogo para la pastilla trasera de freno</Text>
          )}

        </View>

      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.buttonPresupuesto}>
          <StdButton
            text="Siguiente"
            onPress={handleRequestQuote}
            enabled={true}
          />
        </View>
      </View>

    </View>
  );
};

export default BrakeSelector;
