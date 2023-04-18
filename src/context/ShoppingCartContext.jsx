import { createContext, useState} from "react";
import {CounterContext} from "./counterContext";


const ShoppingCartContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);
  return 
    <CartContext.Provider value={{ cart, setCart }}>
      {children} </CartContext.Provider>;
};

export default ShoppingCartContextProvider