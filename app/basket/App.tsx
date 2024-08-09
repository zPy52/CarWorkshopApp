import React, { useState } from 'react';
import ProductList from './ProductList';
import Basket from './Basket';
import { ThemeProvider } from "../styles/provider/provider";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BasketProvider } from './BasketContext';
import EmptyBasket from './EmptyBasket';



const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <BasketProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="ProductList">
            <Stack.Screen name="ProductList" component={ProductList} />
            <Stack.Screen 
              name="Basket" 
              component={Basket} 
              options={{ headerShown: false }} 
            />
            <Stack.Screen 
              name="EmptyBasket" 
              component={EmptyBasket} 
              options={{ headerShown: false }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BasketProvider>
    </ThemeProvider>
  );
};

export default App;
