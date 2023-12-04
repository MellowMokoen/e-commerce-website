import React from "react";

const BagReview = ({ cartItems }) => (
  <div className="cart">
    <h2>Cart bab</h2>
    <ul>
      {cartItems && cartItems.map((item, index) => (
        <li key={index}>
          <div>
            <img src={item.image} alt={item.name} className="cart-item-image" />
          </div>
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rating: {item.rating}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default BagReview;