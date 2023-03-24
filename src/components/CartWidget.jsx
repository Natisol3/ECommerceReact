import { Button } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
return (
<>
    <div className='carrito'>
    <Button colorScheme='teal' size='xs'>
    <span>10</span>
    <img src="../src/assets/carrito.png" alt="carrito" class="carrito"></img>
    </Button>
    </div>
</>    
)
}

export default CartWidget