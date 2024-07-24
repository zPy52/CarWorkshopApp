import { router } from "expo-router";
import { View, Image, StyleSheet, Text } from "react-native"; // Import the 'Image' component, 'StyleSheet' module, and 'Text' component from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

const MATRICULA = '1234ABC'; // CAMBIAR POR EL NÚMERO DE MATRÍCULA

export default function TitleBar() { // Capitalize the function name
    const handleCarButtonClick = () => {router.navigate('/')}; // CAMBIAR RUTAS
    const handleAccButtonClick = () => {router.navigate('/')}; // CAMBIAR RUTAS

    return (
        <View style={styles.container}>
            <Text></Text>
            <Image style={styles.image} />
            <Text>{MATRICULA}</Text>

            <TouchableOpacity onPress={handleCarButtonClick} style={styles.button}>
                <Image style={styles.Icon}></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleAccButtonClick} style={styles.button}>
                <Image style={styles.Icon}></Image>
            </TouchableOpacity>

        </View>
    )
};

// TODO: Styles
const styles = StyleSheet.create({
    container: {backgroundColor: "blue"},
    image: {},
    title: {}, // Add the 'title' style
    //matricula: {}, // Add the 'matricula' style
    button: {}, // Add the 'buttonText' style
    PrimaryText: {},
    SecondaryText: {},
    Icon: {},
})