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
    const { theme} = useTheme();

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            padding: Insets.submedium,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: Insets.small
        },
        image: {
            height: 25,
            width: 25,
        },
        button: {}, // Add the 'buttonText' style
        primaryText: {
            color: theme.colors.onBackground,
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: Insets.medium,
        },
        secondaryText: {
            color: theme.colors.onBackground,
            fontWeight: 'bold',
            marginLeft: Insets.medium,
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
                <Text style={styles.secondaryText}>Tu coche</Text>
                    <Text  style={styles.primaryText}>{MATRICULA}</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Image style={styles.icon} source={StaticImages.icons.user}></Image>
            </TouchableOpacity>
        </View>
    )
};



// TODO: Styles
