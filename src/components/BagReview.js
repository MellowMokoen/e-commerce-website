import React from "react";

const BagReview = ({ cartItems }) => (
  <div className="cart">
    <h2>Cart</h2>
    <ul>
      {cartItems.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  </div>
);

export default BagReview;
