import React, { createContext, useContext, useState } from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  uniqueKey: string; // uniqueKey to each product
}

interface BasketContextType {
  basket: Product[];
  addToBasket: (product: Omit<Product, 'uniqueKey'>) => void;
  removeFromBasket: (uniqueKey: string) => void;
  getTotal: () => number;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

let counter = 0; // counter for unique keys

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState<Product[]>([]);

  const addToBasket = (product: Omit<Product, 'uniqueKey'>) => {
    const productWithUniqueKey = { ...product, uniqueKey: `${product.id}-${counter++}` };
    setBasket((prevBasket) => [...prevBasket, productWithUniqueKey]);
  };

  const removeFromBasket = (uniqueKey: string) => {
    setBasket((prevBasket) => prevBasket.filter((product) => product.uniqueKey !== uniqueKey));
  };

  const getTotal = () => {
    return basket.reduce((total, product) => total + product.price, 0);
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, getTotal }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error('useBasket must be used within a BasketProvider');
  }
  return context;
};
