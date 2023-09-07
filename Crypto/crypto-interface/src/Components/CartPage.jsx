import React from "react";
import { Link } from "react-router-dom";
import "./Style/CartPage.css";

const CartPage = ({ products, onRemoveFromCart }) => {
  return (
    <div>
      <h2>CART PAGE</h2>
      <div className="cart-icon">
        <Link to="/confirm-order">
          <button>Checkout</button>
        </Link>
      </div>
      {products.length === 0 ? ( // Check if the cart is empty
        <img className="cartIsEmpty" src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" alt="EmptyCartImage"/>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id}>
              <img className="image" src={product.image} alt="productImage" />
              <p>{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <button onClick={() => onRemoveFromCart(product)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
