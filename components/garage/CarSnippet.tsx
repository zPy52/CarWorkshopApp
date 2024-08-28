import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    useWindowDimensions,
} from "react-native";
import { useTheme } from "../../hooks/theme";
import { Ionicons } from "@expo/vector-icons";
import Insets from "../../constants/insets";


export default function CarSnippet({item, selectedCar, setSelectedCar}) {
    const { theme } = useTheme();
    const { width } = useWindowDimensions();

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

    return (
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
                    {item.name}{item.descr && ` - ${item.descr}`}
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
                            <Text style={[styles.carSecondaryText, { marginRight: Insets.small }]}>
                                {item.specs.cilindrada}
                            </Text>
                            <Text style={[styles.carSecondaryText]}>
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
    );
}