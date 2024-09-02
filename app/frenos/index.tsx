import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Insets from '../../constants/insets';
import { useTheme } from "../../hooks/theme";
import StdButton from '../shared/StdButton';
import ChevronBack from '../../components/shared/ChevronBack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StaticImages from '../../constants/static_images';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';


const HomeScreen = ({ onBack }) => {

  const { theme } = useTheme();
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [faqOpen, setFaqOpen] = useState(false);
  const [showServiceRequest, setShowServiceRequest] = useState(false);
  const navigation = useNavigation();
  const router = useRouter();

  const handleChevronBackPress = () => {
    if (selectedPart) {
      setSelectedPart(null);
    } else if (selectedSection) {
      setSelectedSection(null);
    }
  };

  const handleSelectQuestion = (id) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  const handleToggleFAQ = () => {
    setFaqOpen(!faqOpen);
    if (faqOpen) {
      setSelectedQuestion(null);
    }
  };

  const handleRequestQuote = () => {
    router.push('./pantalla2');
  };


  const questions = [
    { id: 1, question: "¿Cuánto tiempo dura el servicio?", answer: "El servicio dura entre 3 y 6 horas, dependiendo del tipo de freno y la disponibilidad del recambio." },
    { id: 2, question: "¿Qué tipos de frenos o pastillas se ofrecen?", answer: "Ofrecemos frenos de disco, frenos de tambor, y frenos ABS, entre otros." },
    { id: 3, question: "¿Qué pasa si necesito cancelar?", answer: "Puedes cancelar el servicio hasta 24 horas antes sin penalización. Después de eso, aplican cargos por cancelación." },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      flex: 1,
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
      marginBottom: 10,
    },
    containerTitleBotom: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 5,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    description: {
      fontSize: 14,
      color: theme.colors.outlineFocus,
      marginTop: 5,
      marginBottom: 5,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.outlineVariant,
      marginVertical: 10,
    },
    centeredButton: {
      marginVertical: 20,
      alignItems: 'center',
    },
    buttonPresupuesto: {
      marginBottom: 10,
      marginTop:10,
      height: Insets.layoutSmall,
      width: '100%',
    },
    footer: {
      borderColor: theme.colors.surface,
      borderWidth:1,
    },
    scrollViewContent: {
      flexGrow: 1,
      padding: Insets.screenMarginMedium,
    },
    cancelacion: {
      marginTop: 5,
      fontSize: 11,
      textAlign: 'center',
      color: theme.colors.surfaceContainerLow,
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
      backgroundColor: theme.colors.surfaceContainerLowest,
      borderRadius: 10,
      padding: Insets.screenMarginMedium,
      marginBottom: 10,
    },
    sectionTitle: {
      fontSize: 18,
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
      marginRight: 10,
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
    faqContainer: {
      marginVertical: 10,
      backgroundColor: theme.colors.surfaceContainerLowest,
      borderRadius: 10,
    },
    dropdownHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      textAlign: 'center',
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: theme.colors.surfaceContainerLowest,
      borderRadius: 10,
    },
    faqTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    dropdownBody: {
      marginTop: 10,
      paddingHorizontal: 15,
    },
    questionContainer: {
      marginBottom: 10,
    },
    questionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
    },
    partText: {
      fontSize: 16,
      color: theme.colors.onBackground,
    },
    answerText: {
      marginTop: 5,
      fontSize: 14,
      color: theme.colors.outlineFocus,
      paddingLeft: 20,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.containerTitleBotom}>
              <TouchableOpacity
                onPress={handleChevronBackPress}
                style={{ position: 'absolute', left: -25, top: -13 }}
              >
                <ChevronBack />
              </TouchableOpacity>
              <Text style={styles.title}>Servicio de frenos</Text>
            </View>

            <Text style={styles.description}>
            En ElTallerDeTuAmigo nos adaptamos a tus necesidades ofreciendote las mejores ofertas.
            Consulte a nuestro equipo de profesionales para cualquier duda.</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>¿Cómo funciona?</Text>
            <View style={styles.step}>
              <MaterialCommunityIcons
                name="car-brake-abs"
                size={Insets.screenMarginMedium}
                color={theme.colors.onBackground}
                style={styles.iconSpacing}
              />
              <Text style={styles.definition}>Elige tus frenos y completa el resto de datos</Text>
            </View>
            <View style={styles.step}>
              <Ionicons
                name="calendar-outline"
                size={Insets.screenMarginMedium}
                color={theme.colors.onBackground}
                style={styles.iconSpacing}
              />
              <Text style={styles.definition}>Selecciona lugar, día y hora de la recogida</Text>
            </View>
            <View style={styles.step}>
              <Ionicons
                name="car-outline"
                size={Insets.screenMarginMedium}
                color={theme.colors.onBackground}
                style={styles.iconSpacing}
              />
              <Text style={styles.definition}>Un asistente recogerá tu coche en el lugar y día seleccionados</Text>
            </View>
            <View style={styles.step}>
              <MaterialCommunityIcons
                name="wrench-outline"
                size={Insets.screenMarginMedium}
                color={theme.colors.onBackground}
                style={styles.iconSpacing}
              />
              <Text style={styles.definition}>Lo trasladaremos al taller para realizar el recambio seleccionado</Text>
            </View>
            <View style={styles.step}>
              <Ionicons
                name="checkmark-outline"
                size={Insets.screenMarginMedium}
                color={theme.colors.onBackground}
                style={styles.iconSpacing}
              />
              <Text style={styles.definition}>Cuando esté listo te devolvemos tu vehículo con los frenos nuevos montados</Text>
            </View>
          </View>

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

          <View style={styles.section2}>
            <Text style={styles.sectionTitle}>Requisitos para solicitar el servicio</Text>
            <View style={styles.step}>
              <Ionicons
                name="document-outline"
                size={Insets.screenMarginMedium}
                color={theme.colors.onBackground}
                style={styles.iconSpacing}
              />
              <Text style={styles.definition}>Permiso de circulación</Text>
            </View>
            <View style={styles.step}>
              <Ionicons
                name="document-text-outline"
                size={Insets.screenMarginMedium}
                color={theme.colors.onBackground}
                style={styles.iconSpacing}
              />
              <Text style={styles.definition}>Ficha técnica</Text>
            </View>
            <View style={styles.step}>
              <Ionicons
                name="shield-outline"
                size={Insets.screenMarginMedium}
                color={theme.colors.onBackground}
                style={styles.iconSpacing}
              />
              <Text style={styles.definition}>Póliza de seguro vigente</Text>
            </View>
            <View style={styles.step}>
              <MaterialCommunityIcons
                name="gas-station-outline"
                size={Insets.screenMarginMedium}
                color={theme.colors.onBackground}
                style={styles.iconSpacing}
              />
              <Text style={styles.definition}>Mínimo un cuarto de depósito</Text>
            </View>
          </View>

          <View style={styles.faqContainer}>
            <TouchableOpacity style={styles.dropdownHeader} onPress={handleToggleFAQ}>
              <Text style={styles.faqTitle}>Preguntas Frecuentes</Text>
              <Ionicons
                name={faqOpen ? "chevron-up" : "chevron-down"}
                size={24}
                color={theme.colors.onBackground}
              />
            </TouchableOpacity>

            {faqOpen && (
              <View style={styles.dropdownBody}>
                {questions.map((item) => (
                  <View key={item.id} style={styles.questionContainer}>
                    <TouchableOpacity
                      style={styles.questionHeader}
                      onPress={() => handleSelectQuestion(item.id)}
                    >
                      <Text style={styles.partText}>{item.question}</Text>
                      <Ionicons
                        name={selectedQuestion === item.id ? "chevron-up" : "chevron-down"}
                        size={24}
                        color={theme.colors.onBackground}
                      />
                    </TouchableOpacity>
                    {selectedQuestion === item.id && (
                      <Text style={styles.answerText}>{item.answer}</Text>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>


        <Text style={styles.cancelacion}>
          Los frenos y discos de frenos serán enviados al centro y en caso de cambio o cancelación,
          tendrá una penalización. Para más información consulte nuestra política de servicios.
        </Text>

      </ScrollView>

      <View style={styles.footer}>

        <View style={styles.buttonPresupuesto}>
          <StdButton
            text="Solicitar servicio"
            onPress={handleRequestQuote}
            enabled={true}
            />
        </View>
      </View>

    </View>
  );
};

export default HomeScreen;
