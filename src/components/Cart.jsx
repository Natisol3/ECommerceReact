import { useState, usecontext } from "react"
import { CartContext } from "../context/ShoppingCartContext";


const Cart = () => {
    const { cart, setCart} = useContext(CartContext);
    console.log(cart);

  return (
    <div>Cart</div>
  )
}

export default Cart