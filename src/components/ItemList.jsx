import React from 'react'
import Item from "./Item";
import { Container } from '@chakra-ui/react'

const ItemList = ({productos}) => {
  return (
  <>
      <Container maxW='container.sm' bg='green.400' color='#262626'>
        {productos?.map((producto) => (
          <Item
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          stock={producto.stock}
          />
        ))}
      </Container>
  </>
  );
};

export default ItemList