import React from 'react';
import { Stack } from 'expo-router';
import { ThemeProvider } from '../../styles/provider/provider';
import { BasketProvider } from '../../components/basket/BasketContext';

const Layout = () => {
  return (
    <ThemeProvider>
      <BasketProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </BasketProvider>
    </ThemeProvider>
  );
};

export default Layout;
