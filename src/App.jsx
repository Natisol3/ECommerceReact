import './App.css'
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import { useState } from 'react';




const App = () => {

  const [contador, setContador] = useState(0);

  const sumar = () => {setContador(contador + 1);}
  return (
  <>
      <NavBar />

    <ItemListContainer greeting= "Bienvenidos" />

    <p>{contador}</p>
    <button onClick={sumar}>Sumar</button>
    <button onClick={()=>{setContador(contador - 1);}}>Restar</button>
    <button onClick={()=>{setContador(0);}}>Limpiar</button>

    
  </>

  )
};

export default App
