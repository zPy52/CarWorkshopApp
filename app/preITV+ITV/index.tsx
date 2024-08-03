import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useTheme } from "../../hooks/theme";
import Insets from '../../constants/insets';
import StdButton from '../shared/StdButton';
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StaticImages from "../../constants/static_images";

const App = () => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: Insets.screenMarginMedium,
      backgroundColor: theme.colors.background,
    },
    header: {
      marginBottom: 5,
    },
    title: {
      fontSize: 20,
      marginTop: Insets.screenMarginLarge,
      fontWeight: 'bold',
      color: theme.colors.surface,
    },
    duration: {
      fontSize: 16,
      color: theme.colors.outlineFocus,
      marginLeft: 7.5,
    },
    row: {
      flexDirection: 'row', // Alinea los elementos hijos en una fila
      alignItems: 'center', // Alinea verticalmente al centro
    },
    iconSpacing: {
      marginRight: 10, // Espacio a la derecha del ícono
    },
    description: {
      fontSize: 14,
      color: theme.colors.outlineFocus,
      marginTop: 10,
    },
    section: {
      marginTop: 10,
      borderRadius: 10,
      borderColor: theme.colors.onSurface,
      borderWidth: 1,
      padding: Insets.screenMarginMedium,
      marginBottom: Insets.screenMarginMedium
    },
    section2: {
      marginTop: 10,
      backgroundColor: theme.colors.onSurface,
      borderRadius: 10,
      padding: Insets.screenMarginMedium,
      marginBottom: 10

    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.surface,
    },
    step: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    definition:{
        fontSize: 16,
        color: theme.colors.surface,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.onSurface,
      marginVertical: 10
    },
    asegurador: {
      padding: Insets.screenMarginMedium,
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      borderColor: theme.colors.onSurface,
      borderWidth: 1,
      marginBottom: 10
    },
    cancelacion: {
      marginTop: 10,
      fontSize: 11,
      alignItems: 'center',
      color: theme.colors.surfaceVariant,
      marginBottom: 10,
    },
    contentContainer: {
      paddingBottom: 30, // Espacio adicional para evitar cortar el botón
    },
    buttonContainer: {
        marginTop: 20, // Espacio encima del botón
        marginBottom: Insets.screenMarginMedium, // Espacio debajo del botón
        width: '100%', // Asegura que el contenedor del botón ocupe todo el ancho disponible

    },
    image: {
    width: 60,  // Ajusta el tamaño de la imagen
    height: 60, // Ajusta el tamaño de la imagen
    marginRight: 10, // Espacio entre la imagen y el texto
    },
});

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      {/* Encabezado con título y duración */}
      <View style={styles.header}>
        <Text style={styles.title}>Pre-ITV + ITV</Text>
        <View style={styles.row}>
            <Ionicons
                name="timer"
                size={Insets.screenMarginMedium}
                color={theme.colors.surfaceVariant}
            />
            <Text style={styles.duration}>3h-6h</Text>
        </View>
        <Text style={styles.description}>
          El servicio clave para mantener tu coche en perfecto estado de seguridad y funcionamiento.
        </Text>
      </View>

      {/* divider */}
      <View style={styles.divider} />

      {/* Sección de cómo funciona */}
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
          <Text style={styles.definition}>Un chófer recogerá tu coche</Text>
        </View>
        <View style={styles.step}>
            <MaterialCommunityIcons
            name="wrench-outline"
            size={Insets.screenMarginMedium}
            color={theme.colors.surfaceVariant}
            style={styles.iconSpacing}
            />
          <Text style={styles.definition}>Lo trasladaremos al taller para confirmar que está listo para la ITV</Text>
        </View>
        <View style={styles.step}>
          <Ionicons
            name="document-outline"
            size={Insets.screenMarginMedium}
            color={theme.colors.surfaceVariant}
            style={styles.iconSpacing}
          />
          <Text style={styles.definition}>Con todo en orden, procederemos a realizar la ITV</Text>
        </View>
        <View style={styles.step}>
          <Ionicons
            name="checkmark-outline"
            size={Insets.screenMarginMedium}
            color={theme.colors.surfaceVariant}
            style={styles.iconSpacing}
          />
          <Text style={styles.definition}>Te devolvemos tu vehículo con la ITV superada</Text>
        </View>
      </View>

      {/* divider
      <View style={styles.divider} /> */}

      {/* Sección de seguro. Pongo aqui el flex por q queda mas comodo*/}
      <View style={styles.asegurador}>
            <View style={styles.row}>
                <Image
                    source={StaticImages.asegurador.photo} // Asegúrate de que la ruta es correcta
                    style={styles.image}
                />
                <View style={{flex: 1}}>
                    <Text style={styles.sectionTitle}>Asegurador de confianza</Text>
                    <Text style={styles.definition}>Tu coche con seguro adicional sin coste gracias a David.</Text>
            </View>
    </View>
</View>


      {/* Sección de requisitos */}
      <View style={styles.section2}>
        <Text style={styles.sectionTitle}>Requisitos para solicitar el servicio</Text>
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

      {/* divider */}
      <View style={styles.divider} />

      {/* Sección de requisitos */}
      <View>
        <Text style={styles.cancelacion}>
          Podrás cancelar la reserva de manera gratuita si cancelas antes de las 2 horas previas al servicio, a
          partir de ese momento se te cobrará el 100% del coste. Para más información consulte nuestra política
          de servicios.
        </Text>
      </View>

      {/* Botón para solicitar el servicio */}
      <View style={styles.buttonContainer}>
            <StdButton
            text="Pedir presupuesto"
            onPress={() => {}}
            enabled={true}
            />
    </View>
    </ScrollView>
  );
};

export default App;
