import React, { useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'



const ItemListContainer = () => {
    const { productos } = useParams();
    console.log(productos);


    const productofilter = Data.filter((producto) => producto.id ==id);
return (
    <div>
        Productos
        {productos ? <ItemList productos={productofilter} /> : <ItemList productos={Data}/>}   
    </div>

    
)
}


export default ItemListContainer

