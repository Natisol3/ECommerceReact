import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import {Button, Flex, Heading, MenuButton, Spacer, Container} from "@chakra-ui/react";


const NavBar = () => {
return (
    <div>
        <Container maxW='md' bg='blue.600' color='white'>
  
        <Flex>
    <Box>
    <Menu>
        <Link to ={"/productos"}>
    <MenuButton as={Button}
    size="md"
    variant="outline"
    colorScheme="blue"
    m="6" >
        Productos
    </MenuButton>
    </Link>  
    </Menu>
  </Box>
  <Spacer />
  <Box p='8' w="200" h="100">
    <Heading size="md">
        <Link to={"/CartWidget"}> 
        <CartWidget/>
        </Link>
    </Heading>
  </Box>
</Flex>
</Container>
        <CartWidget/>
                
    </div>
)
}

export default NavBar