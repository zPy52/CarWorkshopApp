import { router } from "expo-router";
import { View, Image, StyleSheet, Text} from "react-native"; // Import the 'Image' component, 'StyleSheet' module, 'Text' component, and 'useTheme' hook from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import StaticImages from "../../constants/static_images";
import Insets from "../../constants/insets";
import { useTheme } from "../../hooks/theme";


const MATRICULA = '1234ABC'; // CAMBIAR POR EL NÚMERO DE MATRÍCULA

export default function TitleBar() { // Capitalize the function name
    // const handleCarButtonClick = () => {router.navigate('/')}; // CAMBIAR RUTAS
    const handleAccButtonClick = () => {router.navigate('/')}; // CAMBIAR RUTAS
    // Cambiar
    const { theme } = useTheme();

    // {[
//     { height: '100%', width: '100%' },
//     { padding: Insets.submedium },
//     { backgroundColor: theme.colors.onBackground },
//     { borderRadius: Insets.small },
//     { alignContent: 'center', alignItems: 'center', justifyContent: 'center' },
//     style
//   ]}

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            padding: Insets.submedium,
            backgroundColor: theme.colors.onBackground,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: Insets.small
        },
        image: {
            height: 25,
            width: 25,
            margin: 10,
        },
        button: {}, // Add the 'buttonText' style
        primaryText: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        secondaryText: {
            color: 'grey',
            fontWeight: 'bold',
        },
        icon: {
            height: 25,
            width: 25,
        },

    })
    return (

        <View style={styles.container}>
        <Image style={styles.image} source={StaticImages.carTypes.car}/>

            <View style={{flex: 1}}>
                <Text style={styles.secondaryText}>Your Car</Text>
                    <Text  style={styles.primaryText}>{MATRICULA}</Text>
            </View>

            <TouchableOpacity onPress={handleAccButtonClick} style={styles.button}>
                <Image style={styles.icon} source={StaticImages.icons.user}></Image>
            </TouchableOpacity>
        </View>
    )
};



// TODO: Styles
