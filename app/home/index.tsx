import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import BottomBar from "../../components/home/BottomBar";
import HomeCard from "../../components/home/HomeCard";
import WrapView from "../../components/shared/WrapView";
import BigCard from "../../components/home/BigCard";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";
import {
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import ModalHelp from "../../components/home/modalHelp";
import Header from "../../components/home/HeaderComp";
import { bigCardMantenimiento, homeCardData } from "../../constants/exampleDynamicData";
import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";

export default function HomeStation() {


  const { selectedCar } = useGlobalSearchParams();
  const car = selectedCar ? JSON.parse(selectedCar as string) : null;
  const [modalVisible, setModalVisible] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowDimensions();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        mainContainer: {
          flex: 1,
          backgroundColor: theme.colors.background,
          paddingHorizontal: Insets.screenMarginMedium,
          paddingTop: -27,
        },
        scrollViewContent: {
          paddingBottom: Insets.layoutLarge,
          backgroundColor: theme.colors.background,
        },
        text: {
          ...theme.text.titleMedium,
          color: theme.colors.onSurface,
          marginBottom: Insets.screenMarginMedium,
          marginTop: Insets.medium,
        },
        element: {
          width: width * 0.46 - Insets.screenMarginMedium,
          height: Insets.layoutMedium,
          borderRadius: Insets.small,
        },
        secondaryElement: {
          width: width - Insets.screenMarginMedium * 1.5,
          backgroundColor : theme.colors.background,
        },
        helpContainer: {
          alignItems: 'center',
          justifyContent: 'center',
          margin: Insets.large,
          padding: Insets.small,

          marginLeft: Insets.medium,
          borderRadius: Insets.small,
          backgroundColor: theme.colors.primaryContainerSoft,
        },
        helpImage: {
          width: '100%',
          height: 120,
          resizeMode: 'cover',
          borderRadius: Insets.small,
          opacity: 0.9,
        },
        helpText: {
          color: theme.colors.onSurface,
          fontSize: 16,
          margin: Insets.submedium, // Separación del texto con la imagen
          textAlign: 'center', // Centrar el texto
        },
      }),
    [theme.colors, width]
  );

  const otherServicesData = [
    {
      id : "asas",
      text: "Aceite y Filtros",
      ImageURL: StaticImages.kitImages.aceite,
      navigateTo: "../../basket",
    },
    {
      id : "asasvsda2",
      text: "Neumáticos",
      ImageURL: StaticImages.kitImages.neumaticos,
      navigateTo: "../../copy",
    }
  ];

  // Data for HomeCard components
  const homeCardData = [
    {
      key: "k1",
      navigateTo: "../../basket",
      title: "Neumaticos",
      imageSource: StaticImages.detailedIcons.tyre,
      style: styles.element,
    },
    {
      key: "k2",
      navigateTo: "../../frenos",
      title: "Frenos",
      imageSource: StaticImages.detailedIcons.brake,
      style: styles.element,
    },
    {
      key: "k3",
      navigateTo: "../../basket",
      title: "Aceite",
      imageSource: StaticImages.detailedIcons.oil,
      style: styles.element,
    },
    {
      key: "k4",
      navigateTo: "../../embragues",
      title: "Embrague",
      imageSource: StaticImages.detailedIcons.engine,
      style: styles.element,
    },
    {
      key: "k5",
      navigateTo: "../../basket",
      title: "Amortiguador",
      imageSource: StaticImages.detailedIcons.shockAbsorber,
      style: styles.element,
    },
    {
      key: "k6",
      navigateTo: "../../basket/ProductList",
      title: "Correas",
      imageSource: StaticImages.detailedIcons.timingBelt,
      style: styles.element,
    },
  ];

  // Data for BigCard components
  // const bigCardData = [
  //   {
  //     key: "bc2",
  //     navigateTo: "../../basket",
  //     title: "Kit de Distribución",
  //     imageSource: StaticImages.kitImages.distrIm,
  //     style: styles.secondaryElement,
  //     subtitle:
  //       "Todo lo que necesitas para el cambio de la correa de distribución.",
  //   },
  //   {
  //     key: "bc3",
  //     navigateTo: "../../basket",
  //     title: "Kit de Frenos",
  //     imageSource: StaticImages.kitImages.brakeIm,
  //     style: styles.secondaryElement,
  //     subtitle: "Renueva los frenos de tu coche con nuestro completo kit.",
  //   },
  // ];

    // Data for BigCard components
    const bigCardMantenimiento = [
      {
        key: "bc1c",
        navigateTo: "../../preITV+ITV",
        title: "PreITV + ITV",
        imageSource: StaticImages.kitImages.ITVIm,
        style: styles.secondaryElement,
        subtitle:
          "Este pack incluye una revisión previa y la gestión completa de tu ITV.",
      },
      {
        key: "bc2c",
        navigateTo: "../../basket",
        title: "Diagnosis",
        imageSource: StaticImages.kitImages.diagnosis,
        style: styles.secondaryElement,
        subtitle:
          "Realizamos un diagnóstico de las averías y un presupuesto de reparación.",
      },
      {
        key: "bc3c",
        navigateTo: "../../pintura",
        title: "Pintura del coche",
        imageSource: StaticImages.kitImages.pintura,
        style: styles.secondaryElement,
        subtitle: "Pintamos los rayones o partes completas de tu coche.",
      },
    ];

    return (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <Header selectedCar={car}/>

        <SafeAreaView style={styles.mainContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            <Text
              style={[ styles.text, { marginBottom: Insets.screenMarginLarge } ]}
            >
              Encuentra y Reemplaza tus Piezas
            </Text>

            <WrapView
              horizontalSpacing={Insets.large}
              verticalSpacing={Insets.layoutSmall}
              data={homeCardData}
              keyExtractor={(item) => item.key}
              renderItem={(item) => (
                <HomeCard
                  navigateTo={item.navigateTo}
                  title={item.title}
                  imageSource={item.imageSource}
                  style={styles.element}
                />
              )}
            />

            <Text
              style={[styles.text, { marginTop: Insets.layoutSmall}]}
            >
              Packs de Mantenimiento
            </Text>

            <WrapView
              horizontalSpacing={0}
              verticalSpacing={0}
              data={bigCardMantenimiento}
              keyExtractor={(item) => item.key}
              renderItem={(item) => (
                <BigCard
                  navigateTo={item.navigateTo}
                  title={item.title}
                  imageSource={item.imageSource}
                  style={styles.secondaryElement}
                  subtitle={item.subtitle}
                />
              )}
            />

            <Text
              style={[styles.text, {marginTop: Insets.screenMarginMedium, marginBottom: Insets.medium}]}
            >
              ¿Necesita Asesoramiento?
            </Text>

            <TouchableOpacity
              style={styles.helpContainer}
              onPress={() => setModalVisible(true)}
            >
              <Image
                source={StaticImages.real.callCenter2}
                style={styles.helpImage}
              />
              <Text style={styles.helpText}>
                Contáctanos y te ayudaremos a encontrar la pieza perfecta.
              </Text>
            </TouchableOpacity>
          </ScrollView>
          <ModalHelp modalVisible={modalVisible} setModalVisible={setModalVisible}/>
          <BottomBar currentScreen="home" />
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }

function useParams(): { selectedCar: any; } {
  throw new Error("Function not implemented.");
}
