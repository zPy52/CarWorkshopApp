import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { router } from 'expo-router';
import { useBasket } from './BasketContext';
import BottomBar from '../home/BottomBar';

const products = [
  { id: '1',
    name: '800 neumaticos',
    description: 'Llevandote estos 800 neumaticos sale mas barato vender cosas en el mercado negro',
    price: 300 },

    { id: '2',
    name: 'Kit ITV',
    description: 'Con este kit vas, vienes, haces lo que quieras, hasta te quita multas',
    price: 200 },

    { id: '3',
      name: 'Frenos',
      description: 'Estoy cansado son las 2am me voy a sobar',
      price: 100 },
];

const ProductList = () => {
  const { addToBasket } = useBasket();

  const handleAddToBasket = (product) => {
    addToBasket(product);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products TestMikel</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemtitle}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Price: ${item.price}</Text>
            <Button title="Add to Basket" onPress={() => handleAddToBasket(item)} />
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button title="Go to Basket" onPress={() => router.navigate('../../basket/Basket')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  itemtitle: {
    fontWeight: 'bold',
    fontSize: 15,
    borderColor: '#ddd',
  },
  buttonContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
  },
});

export default ProductList;
