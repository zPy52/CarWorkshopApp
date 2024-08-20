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

export default function HomeStation() {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);

  const styles = useMemo(
    () =>
      StyleSheet.create({
        mainContainer: {
          flex: 1,
          backgroundColor: theme.colors.background,
          paddingHorizontal: Insets.screenMarginMedium,
        },
        scrollViewContent: {
          paddingBottom: Insets.layoutLarge,
        },
        header: {
          paddingTop: Insets.small,
          flexDirection: "row",
          marginBottom: Insets.medium,
        },
        headerText: {
          color: theme.colors.onBackground,
          fontSize: 30,
          fontWeight: "900",
        },
        headerIcon: {
          marginLeft: "auto",
          alignSelf: "center",
        },
        text: {
          color: theme.colors.onSurface,
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: Insets.screenMarginMedium,
          marginTop: Insets.medium,
        },
        element: {
          width: width * 0.46 - Insets.screenMarginMedium,
          height: Insets.layoutMedium,
          marginLeft: Insets.small,
          borderRadius: Insets.small,
        },
        secondaryElement: {
          width: width - Insets.screenMarginMedium * 1.5,
          height: Insets.layoutLarge - 20,
          alignContent: 'stretch',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor : theme.colors.background,
          borderRadius: Insets.small,

        },
        helpContainer: {
          alignItems: 'center',
          justifyContent: 'center', // Centra los elementos en la dirección vertical
          margin: Insets.large,
          padding: Insets.small,
          borderRadius: Insets.small,
          backgroundColor: theme.colors.surface,
        },
        helpImage: {
    // Ajusta según el tamaño necesario, dejando espacio para el texto
          width: '100%',
          height: 175,
          resizeMode: 'contain',
          borderRadius: Insets.small,
        },
        helpText: {
          color: theme.colors.onSurface,
          fontSize: 16,
          fontWeight: 'bold',
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
          color: theme.colors.onBackground,
          fontSize: 20,
          fontWeight: "bold",
        },
        modalCloseButton: {
          padding: Insets.small,
        },
        modalOptionContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: Insets.medium,
        },
        modalOptionButton: {
          marginLeft: Insets.small,
          backgroundColor: 'green',
          borderRadius: Insets.small,
        },
        modalOptionButtonSecondary: {
          marginLeft: Insets.small,
          backgroundColor: theme.colors.surfaceContainerLow,
          borderRadius: Insets.small,
          opacity: 0.6,
        },
        modalOptionText: {
          color: theme.colors.primary,
          fontSize: 18,
          fontWeight: "bold",
        },
        modalOptionTextSecondary: {
          color: theme.colors.primary,
          fontSize: 18,
          fontWeight: "bold",
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

  // Data for HomeCard components
  const homeCardData = [
    {
      key: "k1",
      navigateTo: "../../basket",
      title: "Neumáticos",
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
  const bigCardData = [
    {
      key: "bc2",
      navigateTo: "../../basket",
      title: "Kit de Distribución",
      imageSource: StaticImages.kitImages.distrIm,
      style: styles.secondaryElement,
      subtitle:
        "Todo lo que necesitas para el cambio de la correa de distribución.",
    },
    {
      key: "bc3",
      navigateTo: "../../basket",
      title: "Kit de Frenos",
      imageSource: StaticImages.kitImages.brakeIm,
      style: styles.secondaryElement,
      subtitle: "Renueva los frenos de tu coche con nuestro completo kit.",
    },
  ];

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
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CWA</Text>
        <TouchableOpacity
          onPress={() => router.navigate("/profile")}
          style={styles.headerIcon}
        >
          <Ionicons
            name="person-circle-outline"
            size={30}
            color={theme.colors.onBackground}
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={[styles.text, { marginBottom: Insets.screenMarginLarge, marginLeft: Insets.large  }]}>Encuentra y reemplaza tus piezas</Text>
        <WrapView
          horizontalSpacing={Insets.large}
          verticalSpacing={Insets.screenMarginLarge}
          data={homeCardData} // Pass the data array
          keyExtractor={(item) => item.key} // Extract the key from each item
          renderItem={(item) => (
            <HomeCard
              navigateTo={item.navigateTo}
              title={item.title}
              imageSource={item.imageSource}
              style={item.style}
            />
          )}
        />

        <Text style={[styles.text, { marginTop: Insets.screenMarginLarge, marginLeft: Insets.large}]}>
          Kits de Reparación
        </Text>
        <WrapView
          horizontalSpacing={Insets.large}
          verticalSpacing={Insets.screenMarginMedium}
          data={bigCardData} // Pass the data array
          keyExtractor={(item) => item.key} // Extract the key from each item
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
        <Text style={[styles.text, { marginTop: Insets.screenMarginLarge, marginLeft: Insets.large}]}>
          Packs de Mantenimiento
        </Text>

        <WrapView
          horizontalSpacing={Insets.large}
          verticalSpacing={Insets.screenMarginMedium}
          data={bigCardMantenimiento} // Pass the data array
          keyExtractor={(item) => item.key} // Extract the key from each item
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

        <Text style={[styles.text, { marginTop: Insets.screenMarginLarge, marginLeft: Insets.large}]}>
          ¿Necesita Asesoramiento?
        </Text>

        <TouchableOpacity
          style={styles.helpContainer}
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={StaticImages.real.callCenter}
            style={styles.helpImage}
          />
          <Text style={styles.helpText}>
            Contáctanos y te ayudaremos a encontrar la pieza perfecta.
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
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
                <Text style={styles.modalOptionText}>Contacto de Whatsapp</Text>
                <Text style={styles.modalOptionSecondaryText}>
                  De lunes a viernes
                </Text>
                <Text style={styles.modalOptionSecondaryText}>9h - 19h</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.navigate("/help")}
                style={styles.modalOptionButton}
              >
                <Ionicons
                  name="logo-whatsapp"
                  size={30}
                  color= 'white'
                  style={styles.modalOptionIcon}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalOptionContainer}>
              <View>
                <Text style={styles.modalOptionTextSecondary}>911 98 68 40</Text>
                <Text style={styles.modalOptionSecondaryText}>
                  De lunes a viernes
                </Text>
                <Text style={styles.modalOptionSecondaryText}>9h - 19h</Text>
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
          </View>
        </View>
      </Modal>

      <BottomBar currentScreen="home"/>
    </SafeAreaView>
  );
}
