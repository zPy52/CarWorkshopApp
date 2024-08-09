import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';

interface ProductScreenProps {
    id: number;
    title: string;
    thumbnail: string;
    description: string;
    price: number;
    rating: number;
    stock: number;
}

export default function ProductScreen() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { id, title, thumbnail, description, price, rating, stock } = params as unknown as ProductScreenProps;
    console.log(params);
    return (
        <View>
            <Text testID="detalle" style={styles.tituloProducto}>{title}</Text>
            <Image source={{ uri: thumbnail }} style={styles.imagenProducto} />
            <Text style={styles.descProducto}>Description: {description}.</Text>
            <Text style={styles.infoProducto}>Price: {price}€</Text>
            <Text style={styles.infoProducto}>Rating: {rating}</Text>
            <Text style={styles.infoProducto}>Stock: {stock}</Text>

            <TouchableHighlight
                testID="volver"
                style={styles.botonVolver}
                onPress={() => router.back()}
            >
                <Text style={{ color: 'white', fontSize: 17 }}>Volver</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    botonVolver: {
        backgroundColor: '#3e4144',
        color: 'white',
        width: '25%',
        alignSelf: 'center',
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 25
    },
    descProducto: {
        fontSize: 15,
        marginBottom: 20,
        marginTop: 6,
        marginHorizontal: 10,
        textAlign: 'justify'
    },
    infoProducto: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'serif'
    },
    tituloProducto: {
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        fontFamily: 'serif',
        letterSpacing: 2,
        marginBottom: 10
    },
    imagenProducto: {
        alignSelf: 'center',
        marginBottom: 5,
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        width: 350,
        height: 160,
        borderRadius: 15,
        borderColor: '#3e4144'
    },
});
