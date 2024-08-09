import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, Stack } from 'expo-router';
import HomeScreen from '../../components/productCatalog/HomeScreen';
import Header from '../../components/productCatalog/Header';
import { mockdata } from '../../constants/products';

interface Product {
  id: number;
  price: number;
  title: string;
  thumbnail: string;
  description: string;
  rating: number;
  stock: number;
}

interface ProductsData {
  products: Product[];
}

const USE_SERVER = false;
const CONFIG = {
  server_url: 'https://example.com/products',
  loading_timeout_ms: 2000
};

export default function ProductCatalog() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | undefined>(undefined);
  const router = useRouter();

  const download = async () => {
    let downloadedProducts: ProductsData | undefined;

    if (USE_SERVER) {
      try {
        const res = await fetch(CONFIG.server_url);
        downloadedProducts = await res.json();
        setProducts(downloadedProducts?.products);
      } catch (e) {
        alert("No se ha podido recuperar la información.");
      }
    } else {
      setProducts(mockdata.products);
    }
  }

  useEffect(() => {
    async function fetchData() {
      await download();
      setTimeout(() => {
        setIsLoading(false);
      }, CONFIG.loading_timeout_ms);
    }

    fetchData();
  }, []);

  return (
    isLoading ? (
      <View>
        <Image testID="loading" style={styles.loading} />
      </View>
    ) : (
      <SafeAreaView style={{ flex: 1 }}>
        <Header />
        <HomeScreen theproducts={products} />
        <StatusBar />
      </SafeAreaView>
    )
  );
}

const styles = StyleSheet.create({
  loading: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 50,
  }
});
