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
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";
import StdButton from "../shared/StdButton";
import ChevronBack from '../../components/shared/ChevronBack';

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
      marginTop: Insets.screenMarginLarge,
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
      padding: Insets.screenMarginMedium,
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
          <Text style={styles.title}>Servicio de embragues</Text>
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

       {/* <Text style={styles.header}>Seleccione modelo de coche</Text>
        <View style={styles.buttonContainer}>
          {carModels.map((model) => (
            <TouchableOpacity
              key={model}
              style={[
                styles.button,
                selectedModel === model && styles.selectedButton,
              ]}
              onPress={() => setSelectedModel(model)}
            >
              <Text
                style={[
                  styles.buttonText,
                  selectedModel === model && styles.selectedButtonText,
                ]}
              >
                {model}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.divider} /> */}

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
