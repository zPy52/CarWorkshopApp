import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";
import StdButton from "../shared/StdButton";
import ChevronBack from '../../components/shared/ChevronBack';

const carPartsBySection = {
  "Parte delantera": [
    { id: 4, part: "Capó" },
  ],
  "Parte trasera": [
    { id: 3, part: "Maletero" },
  ],
  "Lateral izquierdo": [
    { id: 1, part: "Puerta delantera izquierda" },
    { id: 8, part: "Puerta trasera izquierda" },
    { id: 5, part: "Retrovisor izquierdo" },
  ],
  "Lateral derecho": [
    { id: 2, part: "Puerta delantera derecha" },
    { id: 9, part: "Puerta trasera derecha" },
    { id: 6, part: "Retrovisor derecho" },
  ],
};

const CarPartSelector = () => {
  const { theme } = useTheme();
  const [scrollY] = useState(new Animated.Value(0));
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectSection = (section) => {
    setSelectedSection(section === selectedSection ? null : section);
    setSelectedPart(null);
  };

  const handleSelectPart = (part) => {
    setSelectedPart(part);
  };

  const handleSelectAction = (action) => {
    if (selectedPart) {
      const optionExists = selectedOptions.some(
        (option) => option.part.id === selectedPart.id && option.action === action
      );

      if (!optionExists) {
        const updatedOptions = [...selectedOptions, { part: selectedPart, action }];
        setSelectedOptions(updatedOptions);
      }

      setSelectedPart(null); 
    }
  };

  const handleRemoveOption = (index) => {
    const updatedOptions = selectedOptions.filter((_, i) => i !== index);
    setSelectedOptions(updatedOptions);
  };

  const handleRequestQuote = () => {
    console.log("Presupuesto solicitado para:", selectedOptions);
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
    },
    headerContainer: {
      marginTop: 5,
    },
    containerTitleBotom:{
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 5,
    },
    title: {
      marginTop:10,
      fontSize: 20,
      marginBottom: 5,
      fontWeight: "bold",
      color: theme.colors.onBackground,
    },
    title_seleccionadas: {
      fontSize: 20,
      marginTop: 10,
      marginBottom: 10,
      fontWeight: "bold",
      color: theme.colors.onBackground,
      textAlign: "center",
    },
    stickyHeader: {
      position: 'absolute',
      top: 10,
      left: 0,
      right: 0,
      backgroundColor: theme.colors.background,
      zIndex: 1,
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outlineVariant,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    sectionContainer: {
      marginVertical: 10,
      padding: 10,
      borderRadius: 10,
      backgroundColor: theme.colors.surfaceContainerLowest,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    partContainer: {
      marginTop: 5,
      marginBottom: 5,
      padding: 10,
      borderRadius: 10,
      backgroundColor: theme.colors.surfaceContainerLowest,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },//////////////////////////////////////////////////
    selectedPartContainer: {
      backgroundColor: theme.colors.surfaceVariant,
    },
    partText: {
      fontSize: 16,
      color: theme.colors.onBackground,
      flex: 3,
    },
    selectedPartText: {
      color: theme.colors.background,
    },
    actionButtonsContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginLeft: 10,
    },
    actionButton: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 8,
      backgroundColor: theme.colors.surfaceContainerLowest,
      alignItems: "center",
      justifyContent: "center",
      minWidth: 10,
    },//////////////////////////////////////////////////
    selectedActionButton: {
      backgroundColor: theme.colors.onSurface,
      marginLeft: 5
    },
    actionButtonText: {
      fontSize: 14,
      color: theme.colors.onBackground,
      textAlign: "center",
    },
    selectedActionButtonText: {
      color: theme.colors.background,
    },
    selectedOptionsContainer: {
      marginTop: 20,
      marginBottom: 0,
      padding: 10,
      backgroundColor: theme.colors.surfaceContainerLowest,
      borderRadius: 10,
    },
    selectedOption: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      alignItems: 'center',
    },
    footerContainer: {

    },
    centeredButton: {
      marginTop: Insets.screenMarginMedium,
      height: Insets.layoutSmall,
      width: '100%',
    },
    cancelacion: {
      marginTop: 5,
      fontSize: 11,
      textAlign: 'center',
      color: theme.colors.surfaceVariant,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.outlineVariant,
      marginVertical: 10,
      marginTop: 10,
    },
    dropdown: {
      padding: 10,
      backgroundColor: theme.colors.surface,
      borderRadius: 10,
      marginTop: 10,
      marginBottom:10,
    },
    dropdownHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    dropdownBody: {
      marginTop: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    duration: {
      fontSize: 16,
      color: theme.colors.outlineFocus,
      marginLeft: 5,
    },
    description: {
      fontSize: 14,
      color: theme.colors.outlineFocus,
      marginTop: 5,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.stickyHeader,
          {
            opacity: scrollY.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      >
        <TouchableOpacity
          onPress={handleChevronBackPress}
          style={{ position: 'absolute', left: 0, top:0 }}
        >
          <ChevronBack />
        </TouchableOpacity>
        <Text style={styles.title}>Servicio de pintura</Text>
      </Animated.View>

      <ScrollView
        contentContainerStyle={{ padding: Insets.screenMarginMedium }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.headerContainer}>
          <View style={styles.containerTitleBotom}>
            <TouchableOpacity
              onPress={handleChevronBackPress}
              style={{ position: 'absolute', left: -25, top:-13}}
            >
              <ChevronBack />
            </TouchableOpacity>
            <Text style={styles.title}>Servicio de pintura</Text>
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
          El servicio esencial para mantener la esencia de tu coche,
          reparando rayajos y devolviendo el brillo original a la pintura.
          </Text>

          <View style={styles.divider}/>

        </View>

        {Object.keys(carPartsBySection).map((section) => (
          <View key={section} style={styles.dropdown}>
            <TouchableOpacity
              style={styles.dropdownHeader}
              onPress={() => handleSelectSection(section)}
            >
              <Text style={styles.partText}>{section}</Text>
              <Ionicons
                name={selectedSection === section ? "chevron-up" : "chevron-down"}
                size={24}
                color={theme.colors.onBackground}
              />
            </TouchableOpacity>

            {selectedSection === section && (
              <View style={styles.dropdownBody}>
                {carPartsBySection[section].map((part) => (
                  <View
                    key={part.id}
                    style={[
                      styles.partContainer,
                      selectedPart && selectedPart.id === part.id && styles.selectedPartContainer,
                    ]}
                  >
                    <TouchableOpacity
                      onPress={() => handleSelectPart(part)}
                      style={{ flex: 3 }}
                    >
                      <Text
                        style={[
                          styles.partText,
                          selectedPart && selectedPart.id === part.id && styles.selectedPartText,
                        ]}
                      >
                        {part.part}
                      </Text>
                    </TouchableOpacity>
                    {selectedPart && selectedPart.id === part.id && (
                      <View style={styles.actionButtonsContainer}>
                        <TouchableOpacity
                          style={[
                            styles.actionButton,
                            selectedPart && selectedPart.id === part.id && styles.selectedActionButton,
                          ]}
                          onPress={() => handleSelectAction("Pintar")}
                        >
                          <Text
                            style={[
                              styles.actionButtonText,
                              selectedPart && selectedPart.id === part.id && styles.selectedActionButtonText,
                            ]}
                          >
                            Pintar
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={[
                            styles.actionButton,
                            selectedPart && selectedPart.id === part.id && styles.selectedActionButton,
                          ]}
                          onPress={() => handleSelectAction("Arreglar rayajo")}
                        >
                          <Text
                            style={[
                              styles.actionButtonText,
                              selectedPart && selectedPart.id === part.id && styles.selectedActionButtonText,
                            ]}
                          >
                            Arreglar rayajo
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}

        {selectedOptions.length > 0 && (
          <View style={styles.selectedOptionsContainer}>
            <Text style={styles.title_seleccionadas}>Opciones seleccionadas</Text>
            {selectedOptions.map((option, index) => (
              <View key={index} style={styles.selectedOption}>
                <Text>{option.part.part} - {option.action}</Text>
                <TouchableOpacity
                  style={{marginBottom:5, marginTop:5}}
                  onPress={() => handleRemoveOption(index)}
                >
                  <Ionicons
                    name="trash-outline"
                    size={Insets.screenMarginMedium}
                    color={theme.colors.onSurface}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        <View style={styles.footerContainer}>
          <View style={styles.divider} />
          <Text style={styles.cancelacion}>
            Podrás cancelar la reserva de manera gratuita si cancelas antes de
            las 2 horas previas al servicio, a partir de ese momento se te
            cobrará el 100% del coste. Para más información consulte nuestra
            política de servicios.
          </Text>

          <View style={styles.centeredButton}>
            <StdButton
              text="Pedir presupuesto"
              onPress={handleRequestQuote}
              enabled={selectedOptions.length > 0}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CarPartSelector;