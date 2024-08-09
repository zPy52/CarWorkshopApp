import React from 'react';
import Basket from '../../components/basket/Basket';
import { useBasket } from '../../components/basket/BasketContext';
import { router } from 'expo-router';

export default function BasketScreen() {

  const { basket, removeFromBasket, getTotal } = useBasket();
  return <Basket />;
}
