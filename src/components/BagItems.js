import React from "react";

const BagItems = ({ cartItems }) => (
  <div className="cart">
    <h2>Cart</h2>
    <ul>
      {cartItems && cartItems.map((item, index) => (
        <li key={index}>
          {item.name} - Quantity: {item.quantitys}
        </li>
      ))}
    </ul>
  </div>
);

export default BagItems;

