import { createContext, useState} from "react";
import {CounterContext} from "./counterContext";
export const CartContext =createContext(null);

const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
  return 
    <CartContext.Provider value={{ cart, setCart }}>
      {children} </CartContext.Provider>;
};

export default ShoppingCartContextProvider