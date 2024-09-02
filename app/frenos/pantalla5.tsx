import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import StdButton from '../shared/StdButton';
import Insets from '../../constants/insets';
import { useTheme } from "../../hooks/theme";
import ChevronBack from '../../components/shared/ChevronBack';
import { useRouter } from 'expo-router';

const ServicioForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameAuto, setNameAuto] = useState('Alvaro');
  const [surnameAuto, setSurnameAuto] = useState('Martinez Gamo');
  const [emailAuto, setEmailAuto] = useState('alva00003@gmail.com');
  const [phoneAuto, setPhoneAuto] = useState('676785968');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const { theme } = useTheme();
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const router = useRouter(); // Usa el hook useRouter para obtener la función push
  const [contacto, seTcontacto] = useState(true); // Estado para la opción de "Sí" o "No"

  const handleRequestQuote = () => {
    router.push('./pantalla5');
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
      marginTop: 16,
      backgroundColor: '#F7F7F7',
      padding: 10,
      borderRadius: 5,
    },
    input: {
      height: 40,
      borderColor: theme.colors.surface,
      borderRadius:10,
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
      paddingVertical: 1,
      paddingHorizontal: 15,
      width: '20%',
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
    titleAlmostThere: {
      fontSize: 14,
      color: theme.colors.onBackground,
      marginBottom: 5,
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
    subtitle: {
      fontSize: 16,
      marginTop: 10,
      marginBottom: 1,
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

         {/* containers de pasos: frenos, pastillas, datos del servicio, etc... */}
         <View style={styles.topContainer}>
           <View style={[styles.step, styles.activatedStep]}>
             <Text style={styles.stepText}>1</Text>
           </View>
           <View style={[styles.line, styles.activatedStep]} />
           <View style={[styles.step, styles.activatedStep]}>
             <Text style={styles.stepText}>2</Text>
           </View>
           <View style={[styles.line, styles.activatedStep]} />
           <View style={[styles.step, styles.activatedStep]}>
             <Text style={styles.stepText}>3</Text>
           </View>
           <View style={[styles.line, styles.activatedStep]} />
           <View style={[styles.step, styles.activeStep]}>
             <Text style={styles.stepText}>4</Text>
           </View>
         </View>


         <View style={styles.justPadding}>

         <Text style={styles.sectionTitle}>Resumen de su compra</Text>


        </View>
       </ScrollView>

      <View style={styles.footer}>
         <View style={styles.buttonPresupuesto}>
           <StdButton
             text="Confirmar servicio"
             onPress={handleRequestQuote}
             enabled={true}
           />
         </View>
       </View>

    </View>
  );
};




export default ServicioForm;
