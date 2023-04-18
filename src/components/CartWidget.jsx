import { Button } from '@chakra-ui/react'
import {useContext} from "react";
import {CartContext} from "../context/ShoppingCartContext";

const CartWidget = () => {
    const [cart, setCart] =useContext(CartContext);
    const quantity =cart.reduce ((acc, curr) => {
        return acc + curr.quantity;
    }, 0);
return (
<>
    <div className='carrito'>
    <Button colorScheme='teal' size='xs'>
    <span>{quantity}</span>
    <img src="../src/assets/carrito.png" alt="carrito" class="carrito"></img>
    </Button>
    </div>
</>    
)
}

export default CartWidget