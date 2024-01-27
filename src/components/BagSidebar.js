import React from "react";
import { useSelector } from "react-redux";
import "../styles/BagSidebar.css";
import CartBag from "./CartBag";

const BagSidebar = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="bag-container">
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div
            className="bag-item"
            key={index}
            style={{ backgroundColor: "white" }}
          >
            <img src={item.image} alt={item.name} className="bag-item-image" />
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      <CartBag totalAmount={totalAmount} />
    </div>
  );
};

export default BagSidebar;
