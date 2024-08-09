import { Text, View, StyleSheet, Image } from 'react-native';
import StaticImages from '../../constants/static_images';

export default function Header(props) {
    return (
        <View testID="cabecera" style={styles.container}>
            <Text testID="mensaje" style={styles.mensaje}>Bienvenido a CWA</Text>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        width: 400,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212121',
    },

    mensaje: {
        color: '#E0E0E0',
        fontWeight: 'bold',
        fontSize: 15,
    },

    logo: {
        width: 50,
        height: 50
    }
})