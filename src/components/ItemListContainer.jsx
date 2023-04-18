import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore } from "firebase/firestore";

import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] =useState([]);
    const { productos } = useParams();
    console.log(productos);

    useEffect(() => {
        const db = getFirestore();
        const itemsCollection =collection(db, "articulos decoracion");
        getDocs(itemsCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            console.log(docs);
            setProducts(docs);
        });
    }, []); 
    
    return (
        <div>
            {products.map((prod) => (
            <div key= {prod.nombre}> 
            <h4>Nombre: {prod.nombre}</h4>
            <p>$ {prod.precio}</p>
            </div>
            ))}
        </div>
    );

    const productofilter = Data.filter((producto) => producto.id ==id);
return (
    <div>
        Productos
        {productos ? <ItemList productos={productofilter} /> : <ItemList productos={Data}/>}   
    </div>

    
)
}


export default ItemListContainer

