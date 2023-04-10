import { CardBody, CardFooter, Heading, Text, Stack, Divider, Button, Image } from '@chakra-ui/react';
import image from "../assets/piñata.png";
import { Link } from 'react-router-dom';

const Item = ({productos}) => {
return (
    <div>
        <div key={productos.id}>
                <center p="1rem">
                    
                < CardBody >
                <Image borderRadius="lg" src= "image"/>
    <Stack mt='6' spacing='3'>
    <Heading size='md'>(producto.name)</Heading>
    <Text color='pink.800' fontSize='xl'>
        Productos : {productos}
        </Text>
    <Text color='blue.600' fontSize='xl'>
        Stock : {productos.stock}
    </Text>
    <Text color='pink.600' fontSize='xl'>
        Precio : $ {productos.precio}
    </Text>
    </Stack>
</CardBody>
<Divider />
<CardFooter>
        <Button variant='solid' colorScheme='blue'>
        <Link to={"/item/${id}"}>Details</Link>
    </Button>
    
</CardFooter>
</center>
</div>
</div>
)
}

export default Item