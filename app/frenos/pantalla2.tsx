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
  const [traslado, setTraslado] = useState(false); // Estado para la opción de "Sí" o "No"
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

  // Función para manejar el cambio en el selector de frenos con funcionalidad de toggle
  const handleBrakeTypeChange = (value) => {
    if (value === brakeType) {
      // Si se presiona el mismo valor, deselecciona
      setBrakeType('');
      setChecked(prevChecked => ({
        ...prevChecked,
        frontBrakes: false,
        rearBrakes: false,
      }));
    } else {
      // Si se selecciona un nuevo valor, actualiza el estado
      setBrakeType(value);
      if (value !== 'both') {
        // Si no es "Ambos", desmarcar ambos checkboxes
        setChecked(prevChecked => ({ ...prevChecked, frontBrakes: false, rearBrakes: false }));
      } else {
        // Si es "Ambos", inicializar los checkboxes desmarcados
        setChecked(prevChecked => ({ ...prevChecked, frontBrakes: false, rearBrakes: false }));
      }
    }
  };

  // Función para manejar el cambio en el selector de pastillas de freno con funcionalidad de toggle
  const handleBrakePadTypeChange = (value) => {
    if (value === brakePadType) {
      // Si se presiona el mismo valor, deselecciona
      setBrakePadType('');
      setChecked(prevChecked => ({
        ...prevChecked,
        frontPads: false,
        rearPads: false,
      }));
    } else {
      // Si se selecciona un nuevo valor, actualiza el estado
      setBrakePadType(value);
      if (value !== 'both') {
        // Si no es "Ambos", desmarcar ambos checkboxes
        setChecked(prevChecked => ({ ...prevChecked, frontPads: false, rearPads: false }));
      } else {
        // Si es "Ambos", inicializar los checkboxes desmarcados
        setChecked(prevChecked => ({ ...prevChecked, frontPads: false, rearPads: false }));
      }
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
    justPadding: {
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
      paddingVertical: 1,
      paddingHorizontal: 15,
      width: '20%',
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
      width: '80%',
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
    labelDiscosFrenos: {
      fontSize: 16,
      marginBottom: 8,
      fontWeight: 'bold',
      marginTop: 20,
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
    radioGroup: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    radio: {
      flex: 1,
      borderWidth: 1,
      borderColor: theme.colors.surface,
      backgroundColor: theme.colors.background,
      padding: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      borderRadius:10,
    },
    radioSelected: {
      borderRadius:10,
      flex: 1,
      borderWidth: 1,
      borderColor: '#000',
      backgroundColor: theme.colors.primaryContainer,
      padding: 10,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    radioText: {
      fontSize: 16,
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
          <View style={[styles.line, styles.NoactiveStep]} />
           <View style={[styles.step, styles.NoactiveStep]}>
             <Text style={styles.stepText}>4</Text>
           </View>
        </View>

        <View style={styles.justPadding}>

          <Text style={styles.sectionTitle}>Datos de las piezas</Text>

          <Text style={styles.seleccionCoche}>Seleccione el coche en el que desea aplicar el servicio*</Text>
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


          <Text style={styles.labelDiscosFrenos}>¿Te gustaría que cambiasemos además
            los discos de freno?*</Text>

          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={traslado ? styles.radioSelected : styles.radio}
              onPress={() => setTraslado(true)}
            >
              <Text style={styles.radioText}>Sí</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={!traslado ? styles.radioSelected : styles.radio}
              onPress={() => setTraslado(false)}
            >
              <Text style={styles.radioText}>No</Text>
            </TouchableOpacity>
          </View>

          {/* Mostrar opciones para pastillas de freno si la casilla está marcada */}
          {traslado && (
            <>
              <Text style={styles.header}>Seleccione posición de los discos de freno</Text>
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
                    label="Deseo elegir el disco delantero"
                    checked={checked.frontPads}
                    onChange={() => handleCheckboxChange('frontPads')}
                  />
                  <View style={styles.checkboxContainerBothMid}></View>
                  <Checkbox
                    label="Deseo elegir el disco trasero"
                    checked={checked.rearPads}
                    onChange={() => handleCheckboxChange('rearPads')}
                  />
                </View>
              )}
              {brakePadType === 'front' && (
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    label="Deseo elegir el disco"
                    checked={checked.frontPads}
                    onChange={() => handleCheckboxChange('frontPads')}
                  />
                </View>
              )}
              {brakePadType === 'rear' && (
                <View style={styles.checkboxContainer}>
                  <Checkbox
                    label="Deseo elegir el disco"
                    checked={checked.rearPads}
                    onChange={() => handleCheckboxChange('rearPads')}
                  />
                </View>
              )}
            </>
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
