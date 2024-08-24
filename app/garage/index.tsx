import React, { useMemo, useState } from "react";
import {
    StyleSheet,
    Dimensions,
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
import Clickable from "../../components/shared/Clickable";
import ChevronBack from "../../components/shared/ChevronBack";

export default function Garage() {
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

    const cars = useMemo(() => [
        { name: "Mercedes-Benz GLC Coupe 253 2.220 d 4-matic 4x4", specs:{ matricula: "2434 LKM",caja: "Automática", combustible: "Diésel", potencia: "194 CV", cilindrada: "2L" }},
        { name: "BMW X5 G05 3.0 30d MHEV xDrive", specs:{ matricula: "5261 MNB", caja: "Automática", combustible: "Diésel MHEV", potencia: "286 CV", cilindrada: "3L" }},
        { name: "Audi Q7 4M 50 TDI Quattro Tiptronic", specs:{ matricula: "9123 KJF", caja: "Automática", combustible: "Diésel", potencia: "286 CV", cilindrada: "3L" }},
        { name: "Porsche Cayenne E-Hybrid Coupe 3.0 V6", specs:{ matricula: "3452 ZXY", caja: "Automática", combustible: "Híbrido", potencia: "462 CV", cilindrada: "3L" }},
        { name: "Range Rover Sport L494 2.0 PHEV 400e 4WD", specs:{ matricula: "7890 CDE", caja: "Automática", combustible: "Híbrido Enchufable", potencia: "404 CV", cilindrada: "2L" }},
    ], []);


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
                    <TouchableOpacity
                        key={item.name}
                        style={[
                            styles.car,
                            selectedCar === item && styles.carSelected,
                            selectedCar === item && { borderColor: theme.colors.primary }
                        ]}
                        onPress={() => setSelectedCar(item === selectedCar ? null : item)}
                    >
                        <View style={styles.carDataContainer}>
                            <View style={styles.carDataHeader}>
                                <View style={styles.carImage}>
                                    <Ionicons
                                        name="car-sport-outline"
                                        size={Insets.screenMarginLarge}
                                        color={selectedCar === item ? theme.colors.primary : theme.colors.onBackground}
                                    />
                                </View>
                                <Text style={[styles.carPrimaryText, selectedCar === item && { fontWeight: 'bold' }]}>
                                    {item.name}
                                </Text>
                            </View>
                            <View style={styles.carDataSpecs}>
                                {selectedCar === item && (
                                    <>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.carSecondaryText]}>
                                                {item.specs.matricula
                                                }
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.carSecondaryText, { marginRight: Insets.small }]}>
                                                Caja de cambios
                                            </Text>
                                            <Text style={[styles.carSecondaryText]}>
                                                {item.specs.caja}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>

                                            <Text style={[styles.carSecondaryText]}>
                                                {item.specs.combustible}
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.carSecondaryText, { marginRight: Insets.small }]}>
                                                {item.specs.potencia}
                                            </Text>
                                            <Text style={[styles.carSecondaryText]}>
                                                de potencia
                                            </Text>
                                        </View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={[styles.carSecondaryText]}>
                                                {item.specs.cilindrada}
                                            </Text>
                                            <Text style={[styles.carSecondaryText, { marginRight: Insets.small }]}>
                                                de Cilindrada
                                            </Text>
                                        </View>
                                    </>
                                )}
                            </View>
                        </View>
                        {selectedCar === item && (
                            <TouchableOpacity
                                onPress={() => console.log("Borrando coche")}
                                style={styles.carTrashOption}
                            >
                                <Ionicons
                                    name="trash-outline"
                                    size={Insets.icon}
                                    color={theme.colors.surfaceContainerHigh}
                                />
                            </TouchableOpacity>
                        )}

                    </TouchableOpacity>
                ))}
            </ScrollView>
            <View style={styles.containerBottom}>
                <StdButton text={ selectedCar === null ? "introducir nueva matricula" : "Continuar con este vehículo"} onPress={() => console.log("Continuar con este vehículo")} borderRadius={Insets.small} enabled={selectedCar === null ? false: true} />
            </View>
        </SafeAreaView>
    );
}
