import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Animated,
  Image
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";
import StdButton from "../shared/StdButton";
import ChevronBack from '../../components/shared/ChevronBack';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StaticImages from '../../constants/static_images';

// // Datos de prueba, en caso de haber solo 1, solo saldrian productos de ese unico coche
// const clutchData = [
//   { id: 1, model: "Volvo xc 90", price: 200 },
//   { id: 2, model: "Volvo xc 90", price: 300 },
//   { id: 3, model: "Mazda 3", price: 250 },
//   { id: 4, model: "Audi a7", price: 150 },
//   { id: 5, model: "Volvo xc 90", price: 180 },
//   { id: 6, model: "Mazda 3", price: 220 },
//   { id: 7, model: "Audi a7", price: 260 },
//   { id: 8, model: "Volvo xc 90", price: 230 },
//   { id: 9, model: "Mazda 3", price: 210 },
// ];

// se presupone q el usuario ha elegido previamente el coche antes de elegir el produtco
const clutchData = [
  { id: 1, model: "clutch a", price: 200 },
  { id: 2, model: "clutch b", price: 300 },
  { id: 5, model: "clutch c", price: 180 },
  { id: 8, model: "clutch d", price: 230 },
];

const carModels = [...new Set(clutchData.map((clutch) => clutch.model))];

const ClutchSelector = () => {
  const { theme } = useTheme();
  const [scrollY] = useState(new Animated.Value(0));
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedClutch, setSelectedClutch] = useState(null);
  const [selectedPart, setSelectedPart] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleChevronBackPress = () => {
    if (selectedPart) {
      setSelectedPart(null);
    } else if (selectedSection) {
      setSelectedSection(null);
    }
  };

  const [currentPage, setCurrentPage] = useState(0); // Estado para la página actual
  const itemsPerPage = 7; // Máximo de elementos por página

  const filteredClutches = selectedModel
    ? clutchData.filter((clutch) => clutch.model === selectedModel)
    : clutchData;

  const sortedClutches = filteredClutches.sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  // Calcular los embragues a mostrar en la página actual
  const paginatedClutches = sortedClutches.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const totalPages = Math.ceil(sortedClutches.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    header: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
      marginBottom: 10,
    },
    headerContainer: {
      marginTop: 10,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
      marginBottom: 10,
    },
    button: {
      flex: 1,
      paddingVertical: 10,
      marginHorizontal: 5,
      borderRadius: 10,
      backgroundColor: theme.colors.surfaceContainerLowest,
      alignItems: "center",
      justifyContent: "center",
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
      fontWeight: "bold",
      color: theme.colors.onBackground,
    },
    containerTitleBotom:{
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 5,
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
    row: {
      flexDirection: "row",
      alignItems: "center",
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
      marginBottom: 5,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.outlineVariant,
      marginVertical: 10,
    },
    centeredButton: {
      marginTop: Insets.screenMarginMedium,
      height: Insets.layoutSmall,
      width: '100%',
    },
    scrollViewContent: {
      flexGrow: 1,
      padding: Insets.screenMarginLarge,
    },
    productContainer: {
      marginTop: 5,
      marginBottom:5,
      padding: 10,
      borderRadius: 10,
      backgroundColor: theme.colors.surfaceContainerLowest,
    },
    selectedProductContainer: {
      backgroundColor: theme.colors.primary,
    },
    productText: {
      fontSize: 16,
      color: theme.colors.onBackground,
    },
    selectedProductText: {
      color: theme.colors.background,
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
    pickerContainer: {
      marginTop: 10,
      marginBottom:15,
      flexDirection: "row", // Alinear el título y el picker en la misma línea
      alignItems: "center", // Alinear verticalmente en el centro
      justifyContent: "space-between", // Coloca el título a la izquierda y el picker a la derecha
    },
    pickerLabel: {
      fontSize: 16,
      marginBottom: 5,
    },
    pickerWrapper: {
      width: '15%', // Ajusta el tamaño del contenedor del Picker
      height: 30, // Ajusta la altura
      backgroundColor: theme.colors.surfaceContainerLowest, // Color de fondo
      borderRadius: 5, // Bordes redondeados
      justifyContent: "center", // Centra el Picker verticalmente
      overflow: 'hidden', // Asegura que el contenido del Picker respete los bordes redondeados
    },
    picker: {
      width: '100%', // El Picker ocupará todo el ancho del contenedor
      height: '100%', // El Picker ocupará toda la altura del contenedor
    },
    paginationContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 30,
    },
    paginationButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
      backgroundColor: theme.colors.primary,
    },
    paginationButtonText: {
      color: theme.colors.background,
    },
    iconSpacing: {
      marginRight: 10,
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
    asegurador: {
      padding: Insets.screenMarginMedium,
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      borderColor: theme.colors.surface,
      borderWidth: 1,
      marginBottom: 10,
    },
    image: {
      width: 60,
      height: 60,
      marginRight: 10,
    },
  });

  const handleRequestQuote = () => {
    if (selectedClutch) {
      console.log("Presupuesto solicitado para:", selectedClutch);
    } else {
      console.log(
        "Por favor, seleccione un embrague antes de solicitar un presupuesto."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Sticky Header con ChevronBack */}
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
        <View style={{ position: 'absolute', left: 0 }}>
          <ChevronBack />
        </View>
        <Text style={styles.title}>Servicio de embragues</Text>
      </Animated.View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
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
            <Text style={styles.title}>Servicio de embragues</Text>
          </View>
          <View style={styles.row}>
            <Ionicons
              name="timer"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
            />
            <Text style={styles.duration}>3h-5h</Text>
          </View>
          <Text style={styles.description}>
            Encuentra el embrague perfecto para tu coche y asegura un
            funcionamiento suave y eficiente.
          </Text>
        </View>

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

        <View style={styles.pickerContainer}>
          <Text style={styles.header}>Embragues disponibles</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              style={styles.picker}
              selectedValue={sortOrder}
              onValueChange={(itemValue) => setSortOrder(itemValue)}
            >
              <Picker.Item label="Menor a Mayor" value="asc" />
              <Picker.Item label="Mayor a Menor" value="desc" />
            </Picker>
          </View>
        </View>

        {/* Mostrar embragues paginados */}
        {paginatedClutches.map((clutch) => (
          <TouchableOpacity
            key={clutch.id}
            style={[
              styles.productContainer,
              selectedClutch &&
                selectedClutch.id === clutch.id &&
                styles.selectedProductContainer,
            ]}
            onPress={() => setSelectedClutch(clutch)}
          >
            <Text
              style={[
                styles.productText,
                selectedClutch &&
                  selectedClutch.id === clutch.id &&
                  styles.selectedProductText,
              ]}
            >
              {`${clutch.model}, Precio: $${clutch.price}`}
            </Text>
          </TouchableOpacity>
        ))}

        <View style={styles.paginationContainer}>
          <TouchableOpacity
            onPress={handlePreviousPage}
            disabled={currentPage === 0}
            style={styles.paginationButton}
          >
            <Text style={styles.paginationButtonText}>Anterior</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleNextPage}
            disabled={currentPage >= totalPages - 1}
            style={styles.paginationButton}
          >
            <Text style={styles.paginationButtonText}>Siguiente</Text>
          </TouchableOpacity>
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

          <View style={styles.centeredButton}>
            <StdButton
              text="Pedir presupuesto"
              onPress={handleRequestQuote}
              enabled={!!selectedClutch}
              />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default ClutchSelector;
