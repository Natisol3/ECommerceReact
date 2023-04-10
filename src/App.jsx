import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import { useState } from 'react';




const App = () => {

  const [contador, setContador] = useState(0);

  const sumar = () => {setContador(contador + 1);}
  return (
  <>
      <NavBar />

    <ItemListContainer/>

    <p>{contador}</p>
    <button onClick={sumar}>Sumar</button>
    <button onClick={()=>{setContador(contador - 1);}}>Restar</button>
    <button onClick={()=>{setContador(0);}}>Limpiar</button>

    
  </>

  )
};

export default App
