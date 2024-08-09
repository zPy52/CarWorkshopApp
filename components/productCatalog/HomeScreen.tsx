import React from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks/theme';
import { useRouter } from 'expo-router';

const HomeScreen = ({ theproducts }) => {
    const router = useRouter();

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

  const { theme } = useTheme();
  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
        <Text style={styles.discount}>-52%</Text>
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productPrice}>RRP {item.price}€</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigateToProduct(item)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );


  const styles = StyleSheet.create({
    list: {
      paddingHorizontal: 10,
    },
    productContainer: {
      flex: 1,
      margin: 10,
      backgroundColor: '#fff',
      borderRadius: 8,
      overflow: 'hidden',
    },
    imageContainer: {
      position: 'relative',
    },
    productImage: {
      width: '100%',
      height: 150,
    },
    discount: {
      position: 'absolute',
      top: 10,
      left: 10,
      backgroundColor: 'red',
      color: 'white',
      padding: 5,
      borderRadius: 5,
      fontSize: 12,
    },
    productInfo: {
      padding: 10,
    },
    productTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: theme.colors.onBackground,
    },
    productPrice: {
      fontSize: 14,
      color: theme.colors.onSurface,
      marginBottom: 10,
    },
    button: {
      backgroundColor: theme.colors.primary,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: theme.colors.onPrimary,
      fontWeight: 'bold',
    },
  });


  return (
      <FlatList
      data={theproducts}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2} // Establece 2 columnas
      contentContainerStyle={styles.list}
      />
    );
};
export default HomeScreen;
