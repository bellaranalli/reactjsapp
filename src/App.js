import React from "react";
import "./Style.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Items/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/Views/ItemDetail/ItemDetailContainer";
import Cart from "./components/Views/Cart/Cart";
import { CartContextProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <CartContextProvider>
      <div>
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoria" element={<ItemListContainer />}/>
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </CartContextProvider>
  );
};

export default App;
