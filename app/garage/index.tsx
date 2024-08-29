import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../constants/insets";
import StdButton from "../../components/shared/StdButton";
import ChevronBack from "../../components/shared/ChevronBack";
import { router, useRouter } from "expo-router";
import { cars } from "../../constants/exampleDynamicData";
import CarSnippet from "../../components/garage/CarSnippet";

export default function Garage() {
    const router = useRouter();
    const { theme } = useTheme();
    const { width } = useWindowDimensions();
    const [selectedCar, setSelectedCar] = useState(null);

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.colors.background,
        },
        car: {
            width: width - Insets.screenMarginLarge + Insets.small,
            height: Insets.layoutLarge - Insets.small,
            padding: Insets.medium,
            marginHorizontal: Insets.large,
            marginVertical: Insets.submedium,
            borderRadius: Insets.large,
            borderWidth: Insets.pixel / 2,
            borderColor: theme.colors.outline,
            backgroundColor: theme.colors.background,
            justifyContent: 'space-around',
        },
        carSelected: {
            height: Insets.layoutLarge * 2.3, // Agranda el botón si está seleccionado
        },
        carDataContainer: {
            flexDirection: 'column',
            alignItems: 'center',
            maxWidth: width - 9 * Insets.medium,
            padding: Insets.medium,
        },
        carDataHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            maxWidth: width - 9 * Insets.medium,
            padding: Insets.medium,
        },
        carImage: {
            marginRight: Insets.medium,
        },
        carPrimaryText: {
            ...theme.text.titleMedium,
            color: theme.colors.onBackground,
            marginTop: Insets.small,
            fontWeight: 'bold',
        },
        carDataSpecs: {
            alignContent: 'flex-start',
            alignItems: 'flex-start',
            alignSelf: 'flex-start',
            maxWidth: width - 9 * Insets.medium,
            paddingBottom: Insets.screenMarginMedium,
        },
        carSecondaryText: {
            ...theme.text.bodyLarge,
            textAlign: 'left',
            marginVertical: Insets.small,
            color: theme.colors.onBackground,
        },
        carTrashOption: {
            position: 'absolute',
            bottom: Insets.small,
            right: Insets.small,
            borderWidth: Insets.pixel / 2,
            borderColor: theme.colors.surfaceContainerLowest,
            borderRadius: Insets.large,
            padding: Insets.small
        },
        containerBottom: {
            position: 'absolute',
            bottom: 0,
            width: width,
            height: Insets.layoutMedium,
            paddingHorizontal: Insets.screenMarginLarge,
            justifyContent: 'space-around',
            backgroundColor: theme.colors.background,
            paddingVertical: 10,
            borderTopWidth: 1,
            borderTopColor: theme.colors.surface,
            },
        title: {
            textAlign: "left",
            alignSelf: "flex-start",
            paddingTop: Insets.screenMarginLarge,
            paddingHorizontal: Insets.screenMarginMedium,
            paddingBottom: Insets.large,
            },
        newSearch: {
            height: Insets.layoutLarge,
            width: width - Insets.screenMarginMedium * 2,
            borderWidth: Insets.pixel,
            borderStyle: 'dashed',
            borderRadius: Insets.large,
            borderColor: theme.colors.outline,
            marginHorizontal: Insets.screenMarginMedium,
            alignItems: "center",
            justifyContent:"center",
        },

    });


    const handleContinue = () => {
        if (selectedCar) {
            // Send selectedCar to the header object
            router.push({
                pathname: "/home",
                params: { selectedCar: JSON.stringify(selectedCar) }
            });
            // Change the screen according to the car data
        }
        else {
            router.navigate("/home");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ChevronBack />
            <Text style={[theme.text.headlineLarge, styles.title]}>
                Tu Garaje
            </Text>
            <ScrollView
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', paddingBottom: Insets.layoutMedium }}
                style={{ width: '100%' }}
                showsVerticalScrollIndicator={false}
            >
                {cars.map((item) => (
                    <CarSnippet item={item} selectedCar={selectedCar} setSelectedCar={setSelectedCar} />
                ))}
            </ScrollView>
            <View style={styles.containerBottom}>
                <StdButton
                    text={selectedCar === null ? "introducir nueva matricula" : "Continuar con este vehículo"}
                    onPress={handleContinue}
                    enabled={selectedCar === null ? false : true}
                />
            </View>
        </SafeAreaView>
    );
}
