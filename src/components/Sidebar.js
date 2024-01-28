import React from "react";
import { useSelector } from "react-redux";
import "../styles/Sidebar.css";
import CartBag from "./CartBag";

const Sidebar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const roundedTotal = Math.round(totalAmount * 100) / 100;

  return (
    <div className="bag-container">
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div className="bag-item" key={index}>
            <img src={item.image} alt={item.name} className="bag-item-image" />
          </div>
        ))
      ) : (
        <p className="cart-empty">Your cart is empty</p>
      )}

      <CartBag totalAmount={roundedTotal} />
    </div>
  );
};

export default Sidebar;
