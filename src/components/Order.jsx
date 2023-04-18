import {collection, getFirestore, addDoc} from "firebase/firestore";
import {useState} from "react";


const Order = () => {
    const [orderId, setOrderId] =useStae(null);
    const [name, setName] =useState("");
    const [email, setEmail] =useState("");

    const db = getFirestore();

    const handleSubmit =(e) => {
        e_preventDefault();
        addDoc(orderCollection, order).then(({ id})=> setOrderId(id));
    };
    const order = {
        name,
        email,
    }
    const orderCollection =collection(db, "orden");

    
  return (
    <div>
        <form onSubmit= {handleSubmit}>
            <input
            type="text"
            placeholder="Nombre y Apellido"
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Enviar</button>
            </form>
            <p>Orden número: {orderId}</p>
        </div>
  )
}

export default Order