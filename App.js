import React from 'react';
import { CartProvider } from './CartContext';
import CartPage from './Cartpage';

function App() {
  return (
    <CartProvider>
      <CartPage />
    </CartProvider>
  );
}

export default App;