import React, { useMemo, useState } from "react";
import { StyleSheet, Dimensions, Text, View, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import ChevronBack from "../../components/shared/ChevronBack";
import ProfileSection from "../../components/profile/Section";
import { router } from "expo-router";
import { bigCardAyuda } from "../../constants/exampleDynamicData";
import WrapView from "../../components/shared/WrapView";
import NewCard from "../../components/home/NewCard";
import StdButton from "../../components/shared/StdButton";
import ModalHelp from "../../components/shared/modalHelp";

const HelpStation = () => {
  const { theme } = useTheme();
  const { width } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.colors.background,
          justifyContent: 'center',
          alignItems: 'center',
        },
        title: {
          flex: 0,
          textAlign: "left",
          alignSelf: "flex-start",
          paddingTop: Insets.large,
          marginLeft: Insets.screenMarginMedium,
          fontWeight: '600',
        },
        scrollViewContent: {
        },
        secondaryContainer: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: Insets.screenMarginMedium,
        },
        buttonContainer: {
          marginTop: Insets.screenMarginLarge,
          alignItems: "center",
        },
        button: {
          flexDirection: "row",
          width: width - Insets.screenMarginLarge - Insets.screenMarginMedium,
          height: Insets.layoutSmall,
          borderColor: theme.colors.outline,
          borderWidth: 1,
          borderRadius: Insets.screenMarginLarge,
          margin: Insets.screenMarginMedium,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.colors.onPrimary,
        },
        buttonIcon: {
          color: theme.colors.onPrimary,
          marginRight: Insets.submedium,
        },
        primaryText: {
          fontWeight: "900",
          color: theme.colors.onBackground,
        },
        secondaryText: {
          alignSelf: "center",
          marginTop: Insets.screenMarginMedium,
          paddingHorizontal: Insets.medium,
          color: theme.colors.background,
        },
        tertiaryText: {
          marginLeft: Insets.medium,
          color: theme.colors.onBackground,
          fontWeight: "700",
        },
        secondaryElement: {
          width: width - Insets.screenMarginMedium * 1.5,
          backgroundColor: theme.colors.onBackground,
          marginLeft: Insets.screenMarginMedium,
          borderRadius: Insets.large,
        },
      }),
    [theme.colors.background, theme.colors.onBackground, theme.colors.primary]
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', paddingBottom: Insets.layoutMedium }}
        style={{ width: '100%' }}
        showsVerticalScrollIndicator={false}
      >
        <ChevronBack />
        <Text style={[theme.text.displaySmall, styles.title, { marginBottom: Insets.screenMarginMedium }]}>
          Hola, José Ancizar
        </Text>
        <Text style={[theme.text.titleLarge, { flex: 0, fontWeight: '700', marginLeft: Insets.screenMarginMedium }]}>
          ¿Cómo podemos ayudar?
        </Text>

        <TouchableOpacity style={styles.button}>
          <View style={styles.buttonIcon}>
            <Ionicons
              name="ticket-outline"
              size={Insets.icon}
              color={theme.colors.primary}
            />
          </View>
          <Text style={[theme.text.labelMedium, styles.primaryText]}>
            Envía tu consulta
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            theme.text.titleLarge,
            {
              textAlign: 'left',
              flex: 1,
              alignSelf: 'flex-start',
              paddingTop: Insets.screenMarginMedium,
              paddingHorizontal: Insets.screenMarginMedium,
              paddingBottom: Insets.large,
              marginBottom: Insets.medium,
              fontWeight: '700',
            },
          ]}
        >
          Guías para dar los primeros pasos
        </Text>
        <ProfileSection
          icon={
            <Ionicons
              name="medal-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.onBackground}
            />
          }
          title="Primeros pasos en la App"
          style={{ marginVertical: Insets.submedium }}
          onPress={() => {
            router.navigate('/help');
          }}
        />
        <ProfileSection
          icon={
            <Ionicons
              name="search-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.onBackground}
            />
          }
          title="Cómo encontrar el producto ideal"
          style={{ marginVertical: Insets.submedium }}
          onPress={() => {
            router.navigate('/help');
          }}
        />
        <ProfileSection
          icon={
            <Ionicons
              name="card-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.onBackground}
            />
          }
          title="Cómo pagar tu reserva"
          style={{ marginVertical: Insets.submedium }}
          onPress={() => {
            router.navigate('/help');
          }}
        />
        <ProfileSection
          icon={
            <Ionicons
              name="star-outline"
              size={Insets.screenMarginMedium}
              color={theme.colors.onBackground}
            />
          }
          title="Seguridad en tus compras"
          description="Conoce cómo protegemos tus compras y reservas si surge algún problema."
          style={{ marginVertical: Insets.submedium }}
          onPress={() => {
            router.navigate('/help');
          }}
        />

        <View
          style={{
            backgroundColor: theme.colors.onBackground,
            height: 550,
            width: width,
          }}
        >
          <Text
            style={[
              theme.text.titleLarge,
              {
                textAlign: 'left',
                alignSelf: 'flex-start',
                paddingTop: Insets.screenMarginLarge,
                paddingHorizontal: Insets.screenMarginMedium,
                paddingBottom: Insets.large,
                fontWeight: '700',
                color: theme.colors.background,
              },
            ]}
          >
            Sigue explorando
          </Text>
          <View>
            <WrapView
              horizontalSpacing={0}
              verticalSpacing={0}
              data={bigCardAyuda}
              keyExtractor={(item) => item.key}
              renderItem={(item) => (
                <NewCard
                  navigateTo={item.navigateTo}
                  title={item.title}
                  imageSource={item.imageSource}
                  style={styles.secondaryElement}
                  subtitle={item.subtitle}
                />
              )}
            />
          </View>

          <Text
            style={[
              theme.text.titleMedium,
              {
                textAlign: 'left',
                alignSelf: 'flex-start',
                paddingTop: Insets.screenMarginLarge,
                paddingHorizontal: Insets.screenMarginMedium,
                paddingBottom: Insets.large,
                color: theme.colors.background,
              },
            ]}
          >
            ¿Necesitas contactar con Nosotros?
          </Text>
          <Text
            style={[
              theme.text.titleSmall,
              {
                textAlign: 'left',
                alignSelf: 'flex-start',
                paddingHorizontal: Insets.screenMarginMedium,
                paddingBottom: Insets.large,
                marginBottom: Insets.medium,
                color: theme.colors.background,
              },
            ]}
          >
            Nuestros agentes están disponibles para ayudarte de{" "}<Text style={{ color: theme.colors.onSecondary }}>lunes a viernes de 9:00 a 19:00 horas.</Text>
          </Text>
          <TouchableOpacity style={[styles.button, { borderRadius: Insets.small, borderWidth: 0, marginTop: Insets.small, backgroundColor: theme.colors.background }]} onPress={() => setModalVisible(true) }>
            <Text style={[theme.text.titleMedium, styles.tertiaryText]}>
              Contacta con nosotros
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <ModalHelp modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </SafeAreaView>
  );
};

export default HelpStation;
