import React, { useMemo, useRef, useState } from "react";
import { View, Text, TextInput, StyleSheet, ScrollView, Platform, Dimensions, KeyboardAvoidingView, Image, Switch } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../hooks/theme";
import Insets from "../../constants/insets";
import StdButton from "../../components/shared/StdButton";
import { router } from "expo-router";
import BottomBar from "../home/BottomBar";
import DateTimePicker from '@react-native-community/datetimepicker';
import Clickable from '../shared/Clickable';

const Delivery = () => {

    const scrollViewRef = useRef<ScrollView>(null);
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
          //----------------------------------------
          input: {
            borderWidth: 1,
            borderColor: theme.colors.outline,
            padding: 10,
            borderRadius: 5,
          },
          //----------------------------------------
          SwipeButton: {
            width: screenWidth - Insets.screenMarginMedium * 2,
            height: Insets.layoutLarge*1.25
          },
          //----------------------------------------
          confirmButtonContainer: {
            marginBottom: 20,
            height: Insets.layoutSmall,
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
          text: {
            color: theme.colors.onSurface,
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: Insets.medium,
            marginTop: Insets.medium,
          },
          selectText: {
            color: theme.colors.onSurface,
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: Insets.large,
            marginTop: Insets.medium,
          },
          //------------------------------------------
          selectDateButton: {
            padding: 10,
            alignItems: 'center',
            borderColor: theme.colors.primary,
            marginLeft: Insets.small,
            backgroundColor: theme.colors.background,
            borderRadius: Insets.small,
            borderWidth: 1,
          },
          selectTimeButton: {
            padding: 10,
            alignItems: 'center',
            borderColor: theme.colors.outline,
            marginLeft: Insets.small,
            backgroundColor: theme.colors.outline,
            borderRadius: Insets.small,
          },
          //------------------------------------------
          emptyContainer: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            paddingHorizontal: Insets.screenMarginLarge,
            paddingBottom: 0,
          },
          calendarContainer: {
            justifyContent: 'center',
            paddingTop: 50,
            paddingHorizontal: Insets.medium,
          },
          secondaryContainer: {
            flex: 1,
            marginBottom: Insets.layoutLarge * 1.25,
          },
          timeSlots: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingHorizontal: Insets.medium,
          },
          selectContainer: {
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: -20,
            paddingHorizontal: Insets.medium,
          },
          //----------------------------------------
          deliveryToggle: {
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 10,
            marginBottom: -25,
            paddingHorizontal: Insets.medium,
            flex: 1,
          },
          //----------------------------------------

        }),
      [theme.colors.background, theme.colors.onBackground, theme.colors.tertiary, theme.colors.primary, screenWidth]
    );  


    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [isDelivery, setIsDelivery] = useState<boolean>(false);
    const [address, setAddress] = useState<string>('');

    const onChangeDate = (event: any, date?: Date) => {
        setShowDatePicker(false); 
        if (date) {
          setSelectedDate(date);
        }
    };

    const handleTimeChange = (time: string) => {
        setSelectedTime(time);
    };

    const toggleDelivery = () => {
        setIsDelivery(!isDelivery);
    };

    const handleAddressChange = (text: string) => {
        setAddress(text);
    };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={[theme.text.headlineMedium, styles.PrimaryText]}>Reserva</Text>
      <Text style={[theme.text.titleMedium, styles.SecondaryText]}>
        ¡Hay que reservar con 48h de antelacion!
        </Text>  
      <KeyboardAvoidingView 
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={120}
      >
      <ScrollView>
      <View style={styles.secondaryContainer}>  

        
        <View style={styles.calendarContainer}>
            <Text style={styles.selectText}>Selecciona un dia:</Text>
            <Clickable
            style={styles.selectDateButton}
            onPress={() => setShowDatePicker(true)}
            >
              <Text style={styles.text}>
                  {selectedDate ? ` ${selectedDate.toDateString()}` : 'Select Date'}
              </Text>
            </Clickable>
            {showDatePicker && (
            <DateTimePicker
                value={selectedDate || new Date()}
                mode="date"
                display="default"
                onChange={onChangeDate}
            />
            )}
        </View>
        <View style={styles.selectContainer}>
          <Text style={styles.selectText}>Selecciona una hora:</Text>
        </View>    
        
        <View style={styles.timeSlots}>
          <Clickable
            style={[
              styles.selectTimeButton,
              selectedTime === '09:00' && { backgroundColor: theme.colors.primary },
            ]}
            onPress={() => handleTimeChange('09:00')}
          >
            <Text style={[styles.text, selectedTime === '09:00' && { color: '#fff' }]}>
              09:00
            </Text>
          </Clickable>
          <Clickable
            style={[
              styles.selectTimeButton,
              selectedTime === '11:00' && { backgroundColor: theme.colors.primary },
            ]}
            onPress={() => handleTimeChange('11:00')}
          >
            <Text style={[styles.text, selectedTime === '11:00' && { color: '#fff' }]}>
              11:00
            </Text>
          </Clickable>
          <Clickable
            style={[
              styles.selectTimeButton,
              selectedTime === '13:00' && { backgroundColor: theme.colors.primary },
            ]}
            onPress={() => handleTimeChange('13:00')}
          >
            <Text style={[styles.text, selectedTime === '13:00' && { color: '#fff' }]}>
              13:00
            </Text>
          </Clickable>
        </View>
            

        {/* Delivery Toggle */}
        <View style={styles.selectContainer}>
          <Text style={styles.selectText}>¿Servicio de recogida y entrega?</Text>
        </View>
        <View style={styles.deliveryToggle}>
            <Switch
            value={isDelivery}
            onValueChange={toggleDelivery}
            />
        </View>

        {/* Address Input */}
        {isDelivery && (
            <View style={styles.selectContainer}>
              <Text style={styles.selectText}>Direccion de recogida y entrega:</Text>
              <TextInput
                  style={styles.input}
                  value={address}
                  onChangeText={handleAddressChange}
                  placeholder="Introduzce la direccion"
                  onFocus={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
              />
            </View>
        )}
        
      </View>  
      </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.totalContainer}>
        <View style={styles.confirmButtonContainer}>
          <StdButton text="Confirmar" onPress={() => router.navigate('../../basket/Delivery')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Delivery;
