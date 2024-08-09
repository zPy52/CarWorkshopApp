import { useRouter } from 'expo-router';
import { useState } from 'react';
import React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableHighlight, FlatList, Image, Dimensions, SafeAreaView } from 'react-native';
import Insets from '../../constants/insets';
import { useTheme } from '../../hooks/theme';

export default function SearchPage(props) {
    const theproducts = props.theproducts;
    const { theme } = useTheme();
    const [valueInput, setValueInput] = useState("");
    const [palabra, setPalabra] = useState("");
    const router = useRouter();
    const screenWidth = Dimensions.get("window").width;

    const listProducts = theproducts.filter(item => item.title.toLowerCase().includes(palabra.toLowerCase()));

    const navigateToProduct = (product) => {
        router.push({
            pathname: `/productCatalog/producto/${product.id}`,
            params: {
                id: product.id,
                title: product.title,
                thumbnail: product.thumbnail,
                description: product.description,
                price: product.price,
                rating: product.rating,
                stock: product.stock
            }
        });
    };


        const styles = StyleSheet.create({
            mainContainer: {
                flex: 1, // Asegura que el SafeAreaView ocupe toda la pantalla
                backgroundColor: theme.colors.background,
                paddingHorizontal: Insets.screenMarginMedium,
              },
        catalogo: {
            marginTop: 10,
            alignSelf: 'center',
            fontSize: 30,
            fontWeight: 'bold',
        },
        botonBuscar: {
            backgroundColor: '#3e4144',
            color: 'white',
            width: '25%',
            alignSelf: 'center',
            paddingVertical: 10,
            borderRadius: 10,
            marginBottom: 25
        },
        tarjeta: {
            backgroundColor: '#666f88',
            width: screenWidth * 0.35 - Insets.screenMarginMedium - Insets.medium,
            height: Insets.layoutMedium,
            alignSelf: 'center',
            marginBottom: 20,
            borderRadius: 13,
        },
        imagenProducto: {
            alignSelf: 'center',
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 5,
            marginRight: 5,
            width: 320,
            height: 150
        },
        tituloTarjeta: {
            fontSize: 27,
            alignSelf: 'center',
            marginVertical: 5,
            color: 'white',
            fontWeight: 'bold',
            borderRadius: 5
        },
        botonVer: {
            backgroundColor: '#2196f3',
            color: 'white',
            width: '15%',
            alignSelf: 'center',
            paddingVertical: 10,
            borderRadius: 10,
            marginBottom: 10
        }
        });

    return (
        <SafeAreaView style={{paddingHorizontal: Insets.screenMarginMedium}}>
        <Text testID="catalogo" style={styles.catalogo}>Catálogo</Text>

        <FlatList
            numColumns={2}
            data={listProducts}
            style={{ marginBottom: 50,
                flexDirection: "row",
                flexWrap: "wrap",
                marginHorizontal: -Insets.large / 2,
                marginVertical: -Insets.screenMarginMedium / 2, }}
            renderItem={({ item }) => (
                <TouchableHighlight
                testID={"button_" + item.id}
                style={styles.botonVer}
                onPress={() => navigateToProduct(item)}
                >
                <Text testID={"title_" + item.id} style={styles.tituloTarjeta}>{item.title}</Text>
                </TouchableHighlight>
            )}
        />
        </SafeAreaView>
    );
    }
