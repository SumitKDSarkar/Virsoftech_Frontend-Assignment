import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import CataloguePage from "./Components/CataloguePage";
import CartPage from "./Components/CartPage";
import products from "./Components/assets/products.json";
import ConfirmOrderPage from "./Components/ConfirmOrderPage";

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  // State to track whether the "Add to Cart" button is disabled
  const [isAddToCartDisabled, setIsAddToCartDisabled] = useState(false);

  const handleRemoveFromCart = (productToRemove) => {
    const updatedCart = cartProducts.filter(
      (product) => product.id !== productToRemove.id
    );
    setCartProducts(updatedCart);
  };

  const handleAddToCart = (product, quantity) => {
    // Disable the "Add to Cart" button to prevent multiple clicks
    setIsAddToCartDisabled(true);
  
    // Check if the product is already in the cart
    const existingProduct = cartProducts.find((p) => p.id === product.id);
  
    if (existingProduct) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cartProducts.map((p) =>
        p.id === existingProduct.id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      );
      setCartProducts(updatedCart);
    } else {
      // If the product is not in the cart, add it with the given quantity
      const newProduct = { ...product, quantity };
      setCartProducts([...cartProducts, newProduct]);
    }
  
    setTimeout(() => {
      setIsAddToCartDisabled(false);
    }, 1000);
  };
  

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <CataloguePage
                products={products}
                onAddToCart={handleAddToCart}
                isAddToCartDisabled={isAddToCartDisabled}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                products={cartProducts}
                onRemoveFromCart={handleRemoveFromCart}
              />
            }
          />
          <Route
            path="/confirm-order"
            element={<ConfirmOrderPage products={cartProducts} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
