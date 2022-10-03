import './App.css';
import { Header } from './components';
import { ItemDetailConteiner } from './components/itemdetailcontainer';
import { ItemListContainer } from './components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:category' element={<ItemListContainer />}/>
        <Route path='/contacto' element={<div>Contacto</div>}/>
        <Route path='/detail/:id' element={<ItemDetailConteiner />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
