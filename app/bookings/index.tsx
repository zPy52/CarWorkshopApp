import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, useWindowDimensions } from 'react-native';
import BottomBar from '../../components/shared/BottomBar';
import StaticImages from '../../constants/static_images';
import { useGlobalSearchParams, useRouter } from 'expo-router';
import { useTheme } from '../../hooks/theme';
import Header from '../../components/shared/HeaderComp';
import Insets from '../../constants/insets';
import WrapView from '../../components/shared/WrapView';
import { cars } from '../../constants/exampleDynamicData';

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
        services: {
          "Frenos": StaticImages.servicios.freno,
          "Neumáticos": StaticImages.servicios.neumatico,
          "Aceite": StaticImages.servicios.aceite
        },
        car: cars[0],
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
        services: {
          "Alineación de ruedas": StaticImages.servicios.alineacion,
          "Cambio de bujías": StaticImages.servicios.bujia,
          "Filtro de aire": StaticImages.servicios.filtro,
          "Diagnosis de motor": StaticImages.servicios.diagnosis,
        },
        car: cars[1],
        imageUrl: StaticImages.kitImages.distrIm,
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
        services: {
          "Pintura": StaticImages.servicios.pintura,
          "Pistón": StaticImages.servicios.piston,
          "Polea": StaticImages.servicios.polea,
          "Radiador": StaticImages.servicios.radiador,
          "Suspensión": StaticImages.servicios.suspension,
        },
        car: cars[2],
        imageUrl: StaticImages.kitImages.ITVIm,
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
      services: {
        "Amortiguadores": StaticImages.servicios.amortiguador,
        "Batería": StaticImages.servicios.bateria,
        "Aire acondicionado": StaticImages.servicios.aire,
      },
      car: cars[3],
      imageUrl: StaticImages.kitImages.neumaticos,
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
      width: Insets.pixel,
      backgroundColor: theme.colors.outline,
    },
    activeIndicator: {
      backgroundColor: theme.colors.primary,
    },
    content: {
      flex: 1,
      padding: 10,
    },
    imageContainer: {
      width: '100%',
      height: 100,
      borderRadius: 10,
      overflow: 'hidden',  // Asegura que la superposición siga el borde de la imagen
    },
    reservationImage: {
      width: '100%',
      height: '100%',
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 102, 255, 0.2)',
    },
    textContent: {
      marginVertical: 10,
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.colors.onBackground,
    },
    secondaryText: {
      fontSize: 14,
      color: theme.colors.onBackground,
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

  const ServiceGrid = ({ services }) => {
    const serviceEntries = Object.entries(services); // Convertir el objeto en un array de pares [clave, valor]

    return (
      <View style={gridStyles.container}>
        {serviceEntries.map(([serviceName, serviceIcon], index) => (
          <View key={index} style={gridStyles.item}>
            <Image source={serviceIcon} style={gridStyles.icon} />
            <Text style={gridStyles.text}>{serviceName}</Text>
          </View>
        ))}
      </View>
    );
  };

  const gridStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: Insets.medium,
      paddingLeft: Insets.medium
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '70%', // Dos elementos por fila, con espacio entre ellos
      marginBottom: Insets.small,
    },
    icon: {
      width: 24, // Ajusta el tamaño del icono
      height: 24,
      marginRight: Insets.small,
    },
    text: {
      fontSize: 14, // Tamaño de texto acorde al diseño
      color: theme.colors.surfaceContainer, // Ajusta el color del texto según el tema
    },
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Text style={[theme.text.headlineLarge, styles.title]}>
            Tus reservas
        </Text>
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {reservations.map((reservation) => (
            <TouchableOpacity key={reservation.id} style={styles.card} onPress={() => {/* Lógica para navegar a los detalles */}}>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{reservation.date}</Text>
                    <Text style={styles.timeText}>{reservation.time}</Text>
                </View>
                <View style={[styles.lineIndicator, reservation.status === 'active' && styles.activeIndicator]} />
                    <View style={styles.content}>
                    <View style={styles.textContent}>
                        <Text style={styles.titleText}>{reservation.car.name}</Text>
                        <Text style={styles.secondaryText}>{reservation.address}</Text>
                        <View>
                          <ServiceGrid services={reservation.services}/>
                        </View>
                    </View>

                    {/* <View style={styles.contactInfo}>
                        <Image source={reservation.contactImage} style={styles.contactImage} />
                        <Text style={styles.contactName}>{reservation.contactName}</Text>
                    </View> */}
                </View>
            </TouchableOpacity>
            ))}
        </ScrollView>
        <BottomBar currentScreen="reserva" />
    </SafeAreaView>
  );
}
