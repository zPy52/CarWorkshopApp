import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  SafeAreaView,
  Animated,
  TouchableOpacity, // Importa TouchableOpacity para hacer la flecha clicable
} from 'react-native';
import { useTheme } from '../../hooks/theme';
import Insets from '../../constants/insets';
import StdButton from '../shared/StdButton';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import StaticImages from '../../constants/static_images';
import { useNavigation } from '@react-navigation/native'; // Importa useNavigation de React Navigation

const App = () => {
  const { theme } = useTheme();
  const [scrollY] = useState(new Animated.Value(0)); // Estado para controlar la posición del scroll
  const navigation = useNavigation(); // Usa el hook useNavigation para la navegación

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    contentContainer: {
      padding: Insets.screenMarginMedium,
    },
    stickyHeader: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.colors.background,
      zIndex: 1,
      padding: 12,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.outlineVariant,
      alignItems: 'center',
      flexDirection: 'row', // Alinea elementos en una fila
      justifyContent: 'center', // Centra el contenido horizontalmente
    },
    goBackBottom:{
      marginTop: 20,
      right:90,
    },
    header: {
      marginBottom: 5,
    },
    title: {
      marginTop: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    duration: {
      fontSize: 16,
      color: theme.colors.outlineFocus,
      marginLeft: 7.5,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconSpacing: {
      marginRight: 10,
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
    divider: {
      height: 1,
      backgroundColor: theme.colors.outlineVariant, // Cambia a un color más claro
      marginVertical: 10,
    },
    asegurador: {
      padding: Insets.screenMarginMedium,
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      borderColor: theme.colors.onSurface,
      borderWidth: 1,
      marginBottom: 10,
    },
    cancelacion: {
      marginTop: 10,
      fontSize: 11,
      textAlign: 'center',
      color: theme.colors.surfaceVariant,
      marginBottom: 10,
    },
    buttonContainer: {
      marginTop: 15,
    },
    image: {
      width: 60,
      height: 60,
      marginRight: 10,
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackBottom}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.onBackground} />
        </TouchableOpacity>
        <Text style={styles.title}>Pre-ITV + ITV</Text>
      </Animated.View>

      <ScrollView
        contentContainerStyle={styles.contentContainer}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
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
            El servicio clave para mantener tu coche en perfecto estado de
            seguridad y funcionamiento.
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
            <Text style={styles.definition}>
              Lo trasladaremos al taller para confirmar que está listo para la
              ITV
            </Text>
          </View>
          <View style={styles.step}>
            <Ionicons
              name="document-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.surfaceVariant}
              style={styles.iconSpacing}
            />
            <Text style={styles.definition}>
              Con todo en orden, procederemos a realizar la ITV
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
              Te devolvemos tu vehículo con la ITV superada
            </Text>
          </View>
        </View>

        {/* Sección de seguro */}
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

        {/* Sección de requisitos */}
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

        {/* divider */}
        <View style={styles.divider} />

        {/* Sección de cancelación */}
        <View>
          <Text style={styles.cancelacion}>
            Podrás cancelar la reserva de manera gratuita si cancelas antes de
            las 2 horas previas al servicio, a partir de ese momento se te
            cobrará el 100% del coste. Para más información consulte nuestra
            política de servicios.
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
    </SafeAreaView>
  );
};

export default App;
