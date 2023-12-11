import React from "react";
import "../styles/BagReview.css";

const BagReview = ({ cartItems }) => (
  <div className="cart">

    <h2>Cart</h2>

      {cartItems && cartItems.map((item, index) => (
        <div className="cart-item" key={index}>
          <div>
            <img src={item.image} alt={item.name} className="cart-item-image" width="30" />
          </div>
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Rating: {item.rating}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Hey React</p>
          </div>
        </div>
      ))}
  
  </div>
);

export default BagReview;