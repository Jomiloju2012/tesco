import { createContext, useState } from 'react';
import { CartContext } from './context';





export const CartProvider = ({children}) => {

  const [cartItems, setCartItems] = useState([]);

  const clearCart = () => {
    setCartItems([]);
  };
  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};