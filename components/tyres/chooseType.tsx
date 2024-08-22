import React, { useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList, Button, Dimensions, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import { router } from "expo-router";
import BottomBar from "../home/BottomBar";
import Insets from "../../constants/insets";
import { ScrollView } from "react-native-gesture-handler";
import StdButton from "../../components/shared/StdButton";
import Clickable from "../shared/Clickable";
import { Picker } from '@react-native-picker/picker';
import StaticImages from "../../constants/static_images";
import BigCard from "../home/BigCard";
import WrapView from "../shared/WrapView";


const TyreOption = () => {
  const [selectedTyreSize, setSelectedTyreSize] = useState<string>("225");

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
          paddingHorizontal: Insets.small,
        },
        totalTextContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginTop: 10,
          marginBottom: 10,
        },
        //----------------------------------------
        secondaryContainer: {
          flex: 1,
          marginBottom: Insets.layoutLarge * 1.25,
        },
        //----------------------------------------
        confirmButtonContainer: {
          marginBottom: 20,
          height: Insets.layoutSmall,
        },
        //----------------------------------------
        SwipeButton: {
          width: screenWidth - Insets.screenMarginMedium * 2,
          height: Insets.layoutLarge*1.25
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
        imageStyle: {
          width: 250,
          height: 250,
          alignSelf: 'center',
          resizeMode: 'contain',
        },
        measureContainer: {
          paddingTop: 50,
          paddingHorizontal: Insets.medium,
        },
        dropdownContainer: {
          marginBottom: Insets.large,
          borderWidth: 1,
          borderColor: theme.colors.outline,
          borderRadius: Insets.small,
          backgroundColor: theme.colors.primaryContainerSoft,
        },
        picker: {
          height: 50,
          width: screenWidth - Insets.screenMarginLarge * 2,
          alignSelf: 'center',
          alignItems: 'center',
        },
        cameraButton: {
          backgroundColor: theme.colors.primary,
          padding: 15,
          borderRadius: Insets.small,
          alignItems: 'center',
          marginHorizontal: Insets.screenMarginLarge,
        },
        cameraButtonText: {
          color: theme.colors.onPrimary,
          fontWeight: 'bold',
        },
        imageContainer: {
          alignSelf: 'center',
          marginVertical: 20,
          overflow: 'hidden',
          width: screenWidth - Insets.screenMarginMedium * 4.5,
          height: Insets.layoutLarge * 1.15,
          alignContent: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
          backgroundColor : "#fff",
          borderRadius: Insets.small,
        },
        selectText: {
          color: theme.colors.onSurface,
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: Insets.large,
          marginTop: Insets.medium,
        },
        secondaryElement: {
          height: Insets.layoutMedium * 1.5,
          alignContent: 'center',
          backgroundColor : theme.colors.primaryContainer,
          borderRadius: Insets.small,
          alignSelf: 'center',
          marginVertical: 30,
          overflow: 'hidden',
          width: screenWidth - Insets.screenMarginMedium * 4.5,
          flexDirection: 'row',
        },
      }),
    [theme.colors.background, theme.colors.onBackground, theme.colors.tertiary, theme.colors.primary, screenWidth]
  );

    const bigCardData = [
      {
        key: "n1",
        navigateTo: "../../basket",
        title: "Haz una foto a tu neumático",
        imageSource: StaticImages.icons.camera,
        style: styles.secondaryElement,
        subtitle:
          "Haz click aqui, toma la foto y lo comprobamos por ti!",
      },
    ];    



  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={[theme.text.headlineMedium, styles.PrimaryText]}>Neumáticos</Text>
      <Text style={[theme.text.titleMedium, styles.SecondaryText]}>
        Introduzce las medidas de tu neumático
      </Text>
      
      <View style={styles.secondaryContainer}>  
        <View style={styles.measureContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/real/MedidasRueda.png')}
              style={styles.imageStyle}
            />
          </View>

          <Text style={styles.selectText}>Selecciona la medida:</Text>
          <View style={styles.dropdownContainer}>
            <Picker
              selectedValue={selectedTyreSize}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedTyreSize(itemValue)}
            >
              <Picker.Item label="225/05 R16 91W" value="225/05 R16 91W" />
              <Picker.Item label="255/05 R16 91W" value="255/05 R16 91W" />
            </Picker>
          </View>  
          
          <WrapView
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
          />
        </View>
      </View>
      <View style={styles.totalContainer}>
        <View style={styles.confirmButtonContainer}>
          <StdButton text="Confirmar" onPress={() => router.navigate('../../basket')} />
        </View>
      </View>
    </SafeAreaView>
  );
};


export default TyreOption;
