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
  const [brakeType, setBrakeType] = useState(''); // Estado para el selector de frenos
  const [padChangeOption, setPadChangeOption] = useState(''); // Estado para el selector de recambio de pastillas
  const [additionalBrakePadChange, setAdditionalBrakePadChange] = useState(''); // Estado para el selector de opciones adicionales
  const { theme } = useTheme();
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleChevronBackPress = () => {
    if (selectedPart) {
      setSelectedPart(null);
    } else if (selectedSection) {
      setSelectedSection(null);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1, // Asegura que el contenedor ocupe todo el espacio disponible
      backgroundColor: theme.colors.background,
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
      marginBottom: 10,
    },
    headerContainer: {
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
    title: {
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    containerTitleBotom:{
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 5,
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
    buttonPresupuesto: {
      marginTop: 10,
      height: Insets.layoutSmall,
      width: '100%',
    },
    scrollViewContent: {
      flexGrow: 1,
      justifyContent: 'space-between', // Espacia el contenido
      padding:Insets.screenMarginLarge,
    },
    cancelacion: {
      marginTop: 5,
      fontSize: 11,
      textAlign: 'center',
      color: theme.colors.surfaceVariant,
    },
    footerContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.colors.background,
      padding: Insets.screenMarginMedium,
    },
    section: {
      marginTop: 10,
      borderRadius: 10,
      borderColor: theme.colors.surface,
      borderWidth: 1,
      padding: Insets.screenMarginMedium,
      marginBottom: Insets.screenMarginMedium,
    },
    section2: {
      marginTop: 10,
      backgroundColor: theme.colors.surface,
      borderRadius: 10,
      padding: Insets.screenMarginMedium,
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    step: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    definition: {
      fontSize: 16,
      color: theme.colors.onBackground,
    },
    iconSpacing: {
      marginRight: 10,
    },
    image: {
      width: 60,
      height: 60,
      marginRight: 10,
    },
    asegurador: {
      padding: Insets.screenMarginMedium,
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      borderColor: theme.colors.surface,
      borderWidth: 1,
      marginBottom: 10,
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
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View>
          <View style={styles.headerContainer}>
          <View style={styles.containerTitleBotom}>
            <TouchableOpacity
              onPress={handleChevronBackPress}
              style={{ position: 'absolute', left: -25, top:-13}}
            >
              <ChevronBack />
            </TouchableOpacity>
            <Text style={styles.title}>Servicio de frenos</Text>
          </View>
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

          {/* Seccion 1 */}
          <View style={styles.section}>
          <Text style={styles.sectionTitle}>¿Cómo funciona?</Text>
          <View style={styles.step}>
            <Ionicons
              name="calendar-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
              style={styles.iconSpacing}
            />
            <Text style={styles.definition}>Agenda tu cita</Text>
          </View>
          <View style={styles.step}>
            <Ionicons
              name="car-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
              style={styles.iconSpacing}
            />
            <Text style={styles.definition}>Un asistente recogerá tu coche</Text>
          </View>
          <View style={styles.step}>
            <MaterialCommunityIcons
              name="wrench-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
              style={styles.iconSpacing}
            />
            <Text style={styles.definition}>
              Lo trasladaremos al taller para realizar el recambio seleccionado
            </Text>
          </View>
          <View style={styles.step}>
            <Ionicons
              name="checkmark-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
              style={styles.iconSpacing}
            />
            <Text style={styles.definition}>
            Cuando esté listo te devolvemos tu vehículo con el recambio realizado
            </Text>
          </View>
          </View>

          {/* asegurador */}
          <View style={styles.asegurador}>
          <View style={styles.row}>
            <Image source={StaticImages.asegurador.photo} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.sectionTitle}>Asegurador de confianza</Text>
              <Text style={styles.definition}>
                Tu coche con seguro adicional sin coste gracias a David.
              </Text>
            </View>
          </View>
          </View>

          {/* requisitos */}
          <View style={styles.section2}>
          <Text style={styles.sectionTitle}>
            Requisitos para solicitar el servicio
          </Text>
          <View style={styles.step}>
            <Ionicons
              name="document-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
              style={styles.iconSpacing}
            />
            <Text style={styles.definition}>Permiso de circulación</Text>
          </View>
          <View style={styles.step}>
            <Ionicons
              name="document-text-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
              style={styles.iconSpacing}
            />
            <Text style={styles.definition}>Ficha técnica</Text>
          </View>
          <View style={styles.step}>
            <Ionicons
              name="shield-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
              style={styles.iconSpacing}
            />
            <Text style={styles.definition}>Póliza de seguro vigente</Text>
          </View>
          <View style={styles.step}>
            <MaterialCommunityIcons
              name="gas-station-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
              style={styles.iconSpacing}
            />
            <Text style={styles.definition}>Mínimo un cuarto de depósito</Text>
          </View>
          </View>

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
        </View>

        {/* footer */}
        <View style={styles.footerContainer}>

          <View style={styles.divider} />

          <Text style={styles.cancelacion}>
            Podrás cancelar la reserva de manera gratuita si cancelas antes de
            las 2 horas previas al servicio, a partir de ese momento se te
            cobrará el 100% del coste. Para más información consulte nuestra
            política de servicios.
          </Text>

          {/* Botón para solicitar el servicio*/}
          <View style={styles.buttonPresupuesto}>
          <StdButton
            text="Pedir presupuesto"
            onPress={handleRequestQuote}
            enabled={true} // Puedes cambiar esto a una condición si necesitas deshabilitar el botón
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default BrakeSelector;
