// pantalla 3

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import StdButton from '../shared/StdButton';
import Insets from '../../constants/insets';
import { useTheme } from "../../hooks/theme";
import ChevronBack from '../../components/shared/ChevronBack';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import AddAddressSnippet from '../../components/profile/addresses/AddAddressSnippet';

const ServicioForm = () => {
  const [traslado, setTraslado] = useState(true); // Estado para la opción de "Sí" o "No"
  const [direccion, setDireccion] = useState('');
  const [piso, setPiso] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [franjaHoraria, setFranjaHoraria] = useState('Mañana');
  const [matricula, setMatricula] = useState('');
  const [instrucciones, setInstrucciones] = useState('');
  const { theme } = useTheme();
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const router = useRouter(); // Usa el hook useRouter para obtener la función push

  const handleRequestQuote = () => {
    router.push('./pantalla4');
  };

  const handleChevronBackPress = () => {
      if (selectedPart) {
        setSelectedPart(null);
      } else if (selectedSection) {
        setSelectedSection(null);
      }
    };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      marginTop: 10,
    },
    justPadding: {
      padding:20
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
      marginBottom: 20,
     },
    scrollViewContent: {
      flexGrow: 1,
      padding: Insets.screenMarginMedium,
    },
    label: {
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
    note: {
      fontSize: 14,
    },
    alternateNote: {
      fontSize: 14,
      color: '#999',
      marginBottom: 16,
      backgroundColor: '#F7F7F7',
      padding: 10,
      borderRadius: 5,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      marginTop: 8,
      borderWidth: 1,
      paddingLeft: 8,
    },
    textArea: {
      height: 80,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    picker: {
      flex: 1,
      height: 40,
      marginRight: 8,
      backgroundColor:theme.colors.surface,
      borderWidth: 1,
    },
    footer: {
      borderColor: theme.colors.surface,
      borderWidth: 1,
    },
    buttonPresupuesto: {
      marginBottom: 10,
      marginTop: 10,
      height: Insets.layoutSmall,
      width: '100%',
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
    warning: {
       marginTop: 10,
       flexDirection: 'row',
       alignItems: 'center',
       padding: 8,
       fontSize: 12,
       backgroundColor: theme.colors.tertiaryContainer,
       marginBottom: 16,
       borderRadius: 5,
    },
    selecionarOpciones: {
    marginTop: 10,
    marginBottom: 20,
    },
    stepText: {
      textAlign: 'center',
    },
    NoactiveStep: {
      backgroundColor: theme.colors.surface, // color del paso inactivo
    },
    activeStep: {
      backgroundColor: theme.colors.onSuccessContainer, // color del paso activo
    },
    activatedStep: {
      backgroundColor: theme.colors.success, // color del paso activo
    },
    line: {
      height: 2,
      flex: 1,
      backgroundColor: theme.colors.surface, // color de la línea
    },
    title: {
      fontSize: 20,
      marginTop: 10,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.outlineVariant,
      marginVertical: 10,
    },
    containerTitleBotom: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 5,
    },
    iconSpacing: {
      marginRight: 10,
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

         {/* containers de pasos: frenos, pastillas, datos del servicio, etc... */}
         <View style={styles.topContainer}>
           <View style={[styles.step, styles.activatedStep]}>
             <Text style={styles.stepText}>1</Text>
           </View>
           <View style={[styles.line, styles.activatedStep]} />
           <View style={[styles.step, styles.activeStep]}>
             <Text style={styles.stepText}>2</Text>
           </View>
           <View style={styles.line} />
           <View style={[styles.step, styles.NoactiveStep]}>
             <Text style={styles.stepText}>3</Text>
           </View>
         </View>

         <View style={styles.justPadding}>

         <Text style={styles.sectionTitle}>Datos del servicio</Text>

      <Text style={styles.label}>¿Te gustaría que nos encargáramos del traslado de tu
      vehículo al taller y la entrega a tu domicilio?*</Text>

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

      <View style={styles.warning}>
        <Ionicons
              name="warning-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.onBackground}
              style={styles.iconSpacing}
            />
            <Text style={styles.note}>Esta opción solo está disponible en Madrid.</Text>
      </View>

       {/* si es SI muestra una cosa, sino, otra */}
      {traslado ? (
        <>
        <Text style={styles.label}>Dirección de recogida y entrega*</Text>

        <View style={styles.selecionarOpciones}>
        <AddAddressSnippet sizeMultiplier={4} />
        </View>

        <Text style={styles.label}>Indícanos el día y la franja horaria de recogida*</Text>
        <View style={styles.selecionarOpciones}>
        <Text style={styles.radioText}>AQUI VA EL CALENDARIO PARA ELEGIR EL DIA, ES DECIR, EN VEZ DE PONER AÑADIR DIRECCION PONDRA ELEGIR DÍA</Text>
        <AddAddressSnippet sizeMultiplier={4} />
        </View>
        <View style={styles.radioGroup}>
        <TouchableOpacity
            style={franjaHoraria === 'Mañana' ? styles.radioSelected : styles.radio}
            onPress={() => setFranjaHoraria('Mañana')}
        >
            <Text style={styles.radioText}>Mañana</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={franjaHoraria === 'Tarde' ? styles.radioSelected : styles.radio}
            onPress={() => setFranjaHoraria('Tarde')}
        >
            <Text style={styles.radioText}>Tarde</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={franjaHoraria === 'Me adapto' ? styles.radioSelected : styles.radio}
            onPress={() => setFranjaHoraria('Me adapto')}
        >
            <Text style={styles.radioText}>Me adapto</Text>
        </TouchableOpacity>
        </View>
</>
      ) : (
        <Text style={styles.alternateNote}>
          Te contactaremos para acordar una cita con el taller.
        </Text>
      )}

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="¿Necesitamos alguna instrucción adicional?"
        value={instrucciones}
        onChangeText={setInstrucciones}
        multiline={true}
        numberOfLines={4}
      />

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




export default ServicioForm;
