import React, { useMemo, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Button, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useBasket } from '../../components/basket/BasketContext';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import StdButton from "../../components/shared/StdButton";
import { router } from 'expo-router';
import BottomBar from "../shared/BottomBar";

const EmptyBasket = () => {

    const screenWidth = Dimensions.get("window").width;
    const { theme, toggleTheme } = useTheme();
    const styles = useMemo(
      () =>
        StyleSheet.create({
          mainContainer: {
            backgroundColor: theme.colors.background,
            flex: 1,
          },
          //----------------------------------------
          secondaryContainer: {
            flex: 1,
            marginBottom: Insets.layoutLarge * 1.25,
          },
          //----------------------------------------
          PrimaryText: {
            fontWeight: "900",
            marginTop: Insets.screenMarginMedium,
            alignSelf: 'center',
          },
          SecondaryText: {
            alignSelf: 'center',
            marginBottom: 10,
            textAlign: 'center',
          },
          TertiaryText: {
            alignSelf: 'center',
            marginLeft: Insets.medium,
            color: theme.colors.primaryVariant,
          },
          //------------------------------------------
          emptyContainer: {
            justifyContent: 'center',
            alignItems: 'stretch',
            flex: 1,
            paddingBottom: Insets.layoutMedium,
          },
          emptyImgContainer: {
            alignItems: 'center',
            justifyContent: 'center',
          },
          emptyImage: {
            width: 100,
            height: 100,
          },
          emptyButtonContainer: {
            marginTop: Insets.layoutLarge,
            height: Insets.layoutSmall,
            alignSelf: 'center',
            width: '80%',
          },
          //------------------------------------------

        }),
      [theme.colors.background, theme.colors.onBackground, theme.colors.tertiary, theme.colors.primary, screenWidth]
    );

  return (
    <SafeAreaView style={styles.mainContainer}>
        <Text style={[theme.text.headlineMedium, styles.PrimaryText]}>Presupuesto</Text>
        <Text style={[theme.text.titleMedium, styles.SecondaryText]}>Comprueba que todo esté en orden</Text>
        <View style={styles.emptyContainer}>
            <View style={styles.emptyImgContainer}>
              <Image style={styles.emptyImage} source={require('../../assets/images/basket/shopping-cart.png')} />
            </View>
            <Text style={[theme.text.headlineMedium, styles.PrimaryText]}>Su cesta esta vacia</Text>
            <Text style={[theme.text.titleMedium, styles.SecondaryText]}>No tiene productos seleccionados</Text>
            <View style={styles.emptyButtonContainer}>
             <StdButton text="Lista de Productos" onPress={() => router.navigate('../../basket')} />
            </View>
        </View>
    <BottomBar currentScreen="cesta" />
    </SafeAreaView>
  );
};

export default EmptyBasket;
