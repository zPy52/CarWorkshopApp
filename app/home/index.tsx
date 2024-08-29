import React, { useMemo, useState } from "react";
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import BottomBar from "../../components/home/BottomBar";
import HomeCard from "../../components/home/HomeCard";
import WrapView from "../../components/shared/WrapView";
import BigCard from "../../components/home/BigCard";
import Insets from "../../constants/insets";
import StaticImages from "../../constants/static_images";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

export default function HomeStation() {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const translateY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  const styles = useMemo(
    () =>
      StyleSheet.create({
        header: {
          paddingTop: Insets.screenMarginMedium,
          backgroundColor: theme.colors.background,

        },
        title: {
          textAlign: "left",
          alignSelf: "flex-start",
          paddingTop: Insets.screenMarginLarge,
          paddingHorizontal: Insets.screenMarginMedium,
          paddingBottom: Insets.large,
        },
        secondaryTitle: {
          textAlign: "left",
          alignSelf: "flex-start",
          paddingTop: Insets.medium,
        },
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
        headerCarInfo: {
          flexDirection: "row",
          alignItems: "center",
          borderBottomColor: theme.colors.surfaceContainerLowest,
          borderBottomWidth:1,
          paddingHorizontal: Insets.screenMarginMedium,
          paddingBottom: Insets.large,
        },
        headerIconCarContainer: {
          flexGrow: 0,
          flexShrink: 1,
          marginRight: Insets.medium,
          paddingTop: Insets.medium,
          alignContent: 'space-around',
        },
        headerSecondaryContainer: {},
        headerMatriculaButton: {
          flexGrow: 0,
          flexShrink: 1,
          paddingTop: Insets.medium,
          marginLeft: "auto",

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
          justifyContent: 'center', // Centra los elementos en la dirección vertical
          margin: Insets.large,
          padding: Insets.small,

          marginLeft: Insets.medium,
          borderRadius: Insets.small,
          backgroundColor: theme.colors.primaryContainerSoft,
        },
        helpImage: {
    // Ajusta según el tamaño necesario, dejando espacio para el texto
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
        modalContainer: {
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        modalContent: {
          backgroundColor: theme.colors.background,
          padding: Insets.large,
          borderTopLeftRadius: Insets.large,
          borderTopRightRadius: Insets.large,
        },
        modalHeader: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: Insets.medium,
          borderBottomColor: theme.colors.onBackground,
          borderBottomWidth: 1,
        },
        modalHeaderText: {
          ...theme.text.titleLarge,
          color: theme.colors.onBackground,
          fontWeight: "bold",
          marginLeft: Insets.small,
        },
        modalCloseButton: {
          padding: Insets.small,
        },
        modalOptionContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: Insets.medium,
          marginLeft: Insets.small,
        },
        modalOptionButton: {
          marginLeft: Insets.small,
          backgroundColor: "green",
          borderRadius: Insets.small,
        },
        modalOptionButtonSecondary: {
          marginLeft: Insets.small,
          backgroundColor: theme.colors.surfaceContainerLow,
          borderRadius: Insets.small,
          opacity: 0.6,
        },
        modalOptionText: {
          color: theme.colors.onBackground,
          fontSize: 18,
          fontWeight: "bold",
        },
        modalOptionTextSecondary: {
          color: theme.colors.onBackground,
          fontSize: 18,
        },
        modalOptionSecondaryText: {
          color: theme.colors.onSurface,
          fontSize: 14,
        },
        modalOptionIcon: {
          margin: Insets.submedium,
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
      navigateTo: "../../basket",
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
      navigateTo: "../../basket",
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
        navigateTo: "../../basket",
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
        navigateTo: "../../basket",
        title: "Pintura del coche",
        imageSource: StaticImages.kitImages.pintura,
        style: styles.secondaryElement,
        subtitle: "Pintamos los rayones o partes completas de tu coche.",
      },
    ];

    return (
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <View style={styles.header}>
        <Text style={[theme.text.headlineLarge, styles.title]}>
          Nuestros Servicios
        </Text>
        <View style={styles.headerCarInfo}>
            <View style={styles.headerIconCarContainer}>
              <Ionicons
                name="car-sport-outline"
                size={Insets.screenMarginLarge}
                color={theme.colors.primary}
              />
            </View>
            <View style={styles.headerSecondaryContainer}>
              <Text style={[theme.text.titleLarge, styles.secondaryTitle]}>
                Tu coche:
              </Text>
                <Text style={[theme.text.titleMedium, {fontWeight:'bold'}]}>Mercedes-Benz GLC Coupe</Text>
            </View>
            <TouchableOpacity style={styles.headerMatriculaButton} onPress={function (): void {
                router.navigate("/garage");
              }}>
            <Ionicons
                name="chevron-forward"
                size={Insets.icon}
                color={theme.colors.onBackground}
              />
            </TouchableOpacity>
          </View>
        </View>

        <SafeAreaView style={styles.mainContainer}>
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            showsVerticalScrollIndicator={false}
          >
            <Text
              style={[
                styles.text,
                {
                  marginBottom: Insets.screenMarginLarge,
                },
              ]}
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
                  style={item.style}
                />
              )}
            />

            {/* <Text
              style={[styles.text, { marginTop: Insets.screenMarginLarge }]}
            >
              Kits de Reparación
            </Text>
            <WrapView
              horizontalSpacing={0}
              verticalSpacing={0}
              data={bigCardData}
              keyExtractor={(item) => item.key}
              renderItem={(item) => (
                <BigCard
                  navigateTo={item.navigateTo}
                  title={item.title}
                  imageSource={item.imageSource}
                  style={item.style}
                  subtitle={item.subtitle}
                />
              )}
            /> */}
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
                  style={item.style}
                  subtitle={item.subtitle}
                />
              )}
            />

            <Text
              style={[
                styles.text,
                {
                  marginTop: Insets.screenMarginMedium,
                  marginBottom: Insets.medium,
                },
              ]}
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

          <Modal
            visible={modalVisible}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
                <Animated.View style={[styles.modalContent, animatedStyle]}>
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalHeaderText}>Servicio al Cliente</Text>
                    <TouchableOpacity
                      onPress={() => setModalVisible(false)}
                      style={styles.modalCloseButton}
                    >
                      <Ionicons
                        name="close"
                        size={24}
                        color={theme.colors.onBackground}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalOptionContainer}>
                    <View>
                      <Text style={styles.modalOptionText}>
                        Contacto de Whatsapp
                      </Text>
                      <Text style={styles.modalOptionSecondaryText}>
                        De lunes a viernes
                      </Text>
                      <Text style={styles.modalOptionSecondaryText}>
                        9h - 19h
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => router.navigate("/help")}
                      style={styles.modalOptionButton}
                    >
                      <Ionicons
                        name="logo-whatsapp"
                        size={30}
                        color="white"
                        style={styles.modalOptionIcon}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.modalOptionContainer}>
                    <View>
                      <Text style={styles.modalOptionTextSecondary}>
                        911 98 68 40
                      </Text>
                      <Text style={styles.modalOptionSecondaryText}>
                        De lunes a viernes
                      </Text>
                      <Text style={styles.modalOptionSecondaryText}>
                        9h - 19h
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => router.navigate("/help")}
                      style={styles.modalOptionButtonSecondary}
                    >
                      <Ionicons
                        name="call-outline"
                        size={30}
                        color={theme.colors.onBackground}
                        style={styles.modalOptionIcon}
                      />
                    </TouchableOpacity>
                  </View>
                </Animated.View>
            </View>
          </Modal>

          <BottomBar currentScreen="home" />
        </SafeAreaView>
      </GestureHandlerRootView>
    );
  }
