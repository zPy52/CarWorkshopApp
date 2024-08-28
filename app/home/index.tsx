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
import Header from "../../components/home/Header";
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
