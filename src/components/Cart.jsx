import {Center, Card, Heading, CardHeader, CardBody, CardFooter, Container} from "@chakra-ui/react";
import { useState, usecontext } from "react"
import { CartContext } from "../context/ShoppingCartContext";
import Order from "./Order";
import { CardHeader, Heading } from "@chakra-ui/react";


const Cart = () => {
    const [cart, setCart] = usecontext(CartContext);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    console.log(cart);

    return (
    <>
    <Center h="100px" color="blue">
        <Heading as="h2" size="1x1">
        Cart
        </Heading>
        </Center>
        {cart.map((item) => {
        return (
            <Container key={item.Id} className="productos">
            <Card maxW="sm">
            <CardHeader>
            <Heading size="md"> {item.name}</Heading>
            </CardHeader>
            <CardBody>
            <Text as="b"> Quantity: {item.quantity}</Text>
            <Text>Price: ${item.price}</Text>
            </CardBody>
            <CardFooter>
                <Button colorScheme="pink"
                onclick={()=> console.log("Cancelando")}
                >
                    Delete from CartContext
                </Button>
            </CardFooter>
            </Card>
            </Container>
        );
        })}
        <Order/>
        </>
        );
    };
      
export default Cart