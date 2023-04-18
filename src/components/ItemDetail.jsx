
import {useState, useEffect} from "react";
import {doc, getDocs, getFirestore} from "firebase/firestore";
const ItemDetail = () => {
  const {id} = useParams();
  console.log(id);

  const [product, setProduct] =useState([]);

  useEffect (() => {
    const db = getFirestore();
    const oneItem = doc(db, "articulos decoracion", 
    "6wbkCagVGES33Lrhdf1D");
    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const docs =snapshot.data();
        setProduct(docs);
        console.log(docs);
      }
    });
  }, []);
  return (
    <div>
      {
        <div>
          <h4>Nombre: {product.nombre}</h4>
          <p>Precio: {product.precio}</p>
          </div>
      } 
      </div>
  )
}

export default ItemDetail