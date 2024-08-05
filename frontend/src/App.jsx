import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainComponent from "./Components/MainComponent";
import Shop from "./Components/Shop";
import Cart from "./Components/Cart";
import Signup from './Components/Signup'
import Login from "./Components/Login";
import AddProduct from "./Components/AddProduct";
import { CartProvider } from "./Components/CartContext";

function App() {
  return (
    <div>
      <CartProvider>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/product" element={<AddProduct />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </div>
  );
}

export default App;
