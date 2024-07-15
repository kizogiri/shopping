import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState(0);

  function addToCartHandler(product) {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setNumber((prevNumber) => prevNumber + 1);
  }

  function removeFromCartHandler(index) {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
      } else {
        updatedCart.splice(index, 1);
      }
      return updatedCart;
    });
    setNumber((prevNumber) => prevNumber - 1);
  }

  return (
    <>
      <Navigation number={number} />
      <Routes>
        <Route path="/" element={<Hero addToCart={addToCartHandler} />} />
        <Route
          path="/products"
          element={<ProductsList addToCart={addToCartHandler} />}
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCartHandler} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
