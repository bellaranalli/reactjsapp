import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './navbar/Navbar'
import Home from './routes/home/Home';
import Vinos from './routes/vinos/Vinos';
import VinosId from './routes/vinosid/VinosId';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/vinos" element={<Vinos />} />
        <Route exact path="/vinos/:id" element={<VinosId />} />
      </Routes>
    </BrowserRouter>
  );
}
