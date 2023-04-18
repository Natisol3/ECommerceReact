import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import { useState } from 'react';
import Cart from './components/Cart';
import ShoppingCartContextProvider from './context/ShoppingCartContext';



const App = () => {

  const [contador, setContador] = useState(0);

  const sumar = () => {setContador(contador + 1);}
  return (
  <>
    <ShoppingCartContextProvider>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/productos" element={<ItemDetailContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        <Route exact path="/Cart" element={<Cart/>} />
        

    <p>{contador}</p>
    <button onClick={sumar}>Sumar</button>
    <button onClick={()=>{setContador(contador - 1);}}>Restar</button>
    <button onClick={()=>{setContador(0);}}>Limpiar</button>
    </Routes>
    </BrowserRouter>
    </ShoppingCartContextProvider>
  </>

  )
};

export default App
