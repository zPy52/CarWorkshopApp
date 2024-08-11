import React, { useMemo, useRef } from "react";
import { View, Text, StyleSheet, FlatList, Button, Dimensions, TouchableOpacity, Image } from 'react-native';
import { useBasket } from './BasketContext';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import EmptyBasket from '../../components/basket/EmptyBasket';
import Insets from "../../constants/insets";
import StdButton from "../../components/shared/StdButton";
import { router } from "expo-router";
import BottomBar from "../home/BottomBar";

const Basket = () => {
  const { basket, removeFromBasket, getTotal } = useBasket();

  const screenWidth = Dimensions.get("window").width;
  const { theme, toggleTheme } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        mainContainer: {
          backgroundColor: theme.colors.background,
          paddingHorizontal: Insets.screenMarginLarge,
          flex: 1,
        },
        //----------------------------------------
        totalContainer: {
          marginBottom: 20,
          borderColor: theme.colors.background,
          backgroundColor: theme.colors.background,
          paddingHorizontal: Insets.screenMarginLarge,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        },
        totalText: {
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 10,
          marginBottom: 10,
          color: theme.colors.onBackground,
        },
        //----------------------------------------
        secondaryContainer: {
          flex: 1,
          marginBottom: Insets.layoutLarge * 1.25,
        },
        //----------------------------------------
        confirmButtonContainer: {
          paddingHorizontal: Insets.screenMarginLarge,
          marginBottom: 20,
          alignItems: 'center',
          height: Insets.layoutSmall,
        },
        /*confirmButton: {
          width: screenWidth - Insets.screenMarginLarge * 2.1,
          height: 60,
          borderRadius: Insets.large,
          margin: Insets.large,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors.primary,
        },
        confirmButtonText: {
          color: theme.colors.onPrimary,
          fontWeight: 'bold',
        }, */
        //----------------------------------------
        SwipeButton: {
          width: screenWidth - Insets.screenMarginMedium * 2,
          height: Insets.layoutLarge*1.25
        },
        //----------------------------------------
        removeButton: {
          //backgroundColor: theme.colors.onPrimaryContainer,
          padding: 5,
          borderRadius: 4,
        },
        removeButtonText: {
          color: theme.colors.errorContainer,
          fontWeight: 'bold',
        },
        //-----------------------------------------
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
        item: {
          padding: 10,
          borderBottomWidth: 1,
          borderColor: theme.colors.outlineVariant,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        itemDetails: {
          flex: 1,
          flexWrap: 'wrap',
          flexDirection: 'row',
        },
        itemName: {
          fontWeight: "bold",
          color: theme.colors.onBackground,
        },
        itemPrice: {
          color: theme.colors.onBackground,
        },
        itemDescription: {
          marginRight: 30,
          color: theme.colors.onBackground,
          fontStyle: 'italic',
        },
        //------------------------------------------
      }),
    [theme.colors.background, theme.colors.onBackground, theme.colors.tertiary, theme.colors.primary, screenWidth]
  );


  if (basket.length === 0) {
    return <EmptyBasket />;
  }


  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={[theme.text.headlineMedium, styles.PrimaryText]}>Presupuesto</Text>
      <Text style={[theme.text.titleMedium, styles.SecondaryText]}>Comprueba que todo esté en orden</Text>
      <View style={styles.secondaryContainer}>
        <FlatList
          data={basket}
          keyExtractor={(item) => item.uniqueKey}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={styles.itemDetails}>
                <Text style={[ theme.text.bodyLarge, styles.itemName ]}>{item.name}</Text>
                <Text style={ styles.itemDescription }>{item.description }</Text>
                <Text style={[ theme.text.bodyLarge, styles.itemDescription] }>${item.price}</Text>
              </View>
              <TouchableOpacity style={styles.removeButton} onPress={() => removeFromBasket(item.uniqueKey)}>
                <Text style={styles.removeButtonText}>Quitar</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Coste total: ${getTotal()}</Text>
        <View style={styles.confirmButtonContainer}>
          <StdButton text="Confirmar" onPress={() => router.navigate('/home')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Basket;
