import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomBar from '../../components/home/BottomBar';
import StaticImages from '../../constants/static_images';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { useTheme } from '../../hooks/theme';
import Header from '../../components/home/HeaderComp';
import Insets from '../../constants/insets';

export default function BookStation() {
    const { selectedCar } = useGlobalSearchParams();
    const car = selectedCar ? JSON.parse(selectedCar as string) : null;
    const router = useRouter();
    const { theme } = useTheme();
    const { width } = useWindowDimensions();
    const reservations = [
      {
        id: 23,
        date: 'Jueves, Ago 1',
        time: '4:00pm',
        title: "Cambio de Pastillas de Freno",
        imageUrl: StaticImages.kitImages.brakeIm,
        address: 'Calle Virgen de Aranzazu 1, Madrid',
        contactName: 'Juan',
        contactImage: StaticImages.kitImages.mecanicoJuan,
        status: 'past', // "active" indica la reserva actual, "past" indica las reservas pasadas
      },
      {
        id:4,
        date: 'Viernes, Ago 9',
        time: '13:00pm',
        title: "Cambio de Embrague",
        imageUrl: StaticImages.kitImages.brakeIm,
        address: 'Calle Avenida de los Guerrilleros 1, Madrid',
        contactName: 'Pedro',
        contactImage: StaticImages.kitImages.mecanicoPedro,
        status: 'past', // "active" indica la reserva actual, "past" indica las reservas pasadas
      },
      {
        id: 5,
        date: 'Hoy',
        time: '11:00am',
        title: "Servicio de PreITV + ITV",
        imageUrl: StaticImages.kitImages.brakeIm,
        address: 'Calle Paseo de la Castellana 289, Madrid',
        contactName: 'Luis',
        contactImage: StaticImages.kitImages.mecanicoLuis,
        status: 'active', // "active" indica la reserva actual, "past" indica las reservas pasadas
      },
    {
      id: 2,
      date: 'Martes, Sept 17',
      time: '5:00pm',
      title: "Cambio de Neumáticos Pirelli",
      imageUrl: StaticImages.kitImages.brakeIm,
      address: 'Calle Paseo de la Castellana 289, Madrid',
      contactName: 'Pedro',
      contactImage: StaticImages.kitImages.mecanicoPedro,
      status: 'active', // "past" para reservas anteriores
    },
  ];


  const styles = StyleSheet.create({
    title: {
      textAlign: "left",
      alignSelf: "flex-start",
      marginTop: Insets.screenMarginLarge,
      paddingTop: Insets.screenMarginLarge,
      paddingHorizontal: Insets.screenMarginMedium,
      paddingBottom: Insets.large,
    },
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: theme.colors.background,
    },
    card: {
      flexDirection: 'row',
      marginBottom: 20,
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      overflow: 'hidden',
      elevation: 3, // Sombra para Android
      shadowColor: theme.colors.onBackground, // Sombra para iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
    },
    dateContainer: {
      flex: 1,
      maxWidth: '30%',
      paddingHorizontal: 10,
      justifyContent: 'center',
    },
    dateText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    timeText: {
      fontSize: 14,
      color: theme.colors.surfaceContainer,
    },
    lineIndicator: {
      width: 5,
      backgroundColor: theme.colors.outline,
    },
    activeIndicator: {
      backgroundColor: theme.colors.primary,
    },
    content: {
      flex: 1,
      padding: 10,
    },
    reservationImage: {
      width: '100%',
      height: 100,
      borderRadius: 10,
    },
    textContent: {
      marginVertical: 10,
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    addressText: {
      fontSize: 14,
      color: theme.colors.surfaceContainer,
      marginTop: 5,
    },
    contactInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
    },
    contactImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    contactName: {
      fontSize: 16,
      color: theme.colors.onBackground,
    },
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Text style={[theme.text.headlineLarge, styles.title]}>
            Tus reservas
        </Text>
        <ScrollView style={styles.container}>
            {reservations.map((reservation) => (
            <TouchableOpacity key={reservation.id} style={styles.card} onPress={() => {/* Lógica para navegar a los detalles */}}>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{reservation.date}</Text>
                    <Text style={styles.timeText}>{reservation.time}</Text>
                </View>
                <View style={[styles.lineIndicator, reservation.status === 'active' && styles.activeIndicator]} />
                    <View style={styles.content}>
                        <Image source={reservation.imageUrl } style={styles.reservationImage} />
                    <View style={styles.textContent}>
                        <Text style={styles.titleText}>{reservation.title}</Text>
                        <Text style={styles.addressText}>{reservation.address}</Text>
                    </View>
                    <View style={styles.contactInfo}>
                        <Image source={reservation.contactImage} style={styles.contactImage} />
                        <Text style={styles.contactName}>{reservation.contactName}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            ))}
        </ScrollView>
        <BottomBar currentScreen="reserva" />
    </SafeAreaView>
  );
}
