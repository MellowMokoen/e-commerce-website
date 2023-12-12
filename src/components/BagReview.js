// BagReview.js
import React from 'react';
import { useSelector } from 'react-redux';
import "../styles/BagReview.css";
import { selectCartItems } from './selectCartItems';


const BagReview = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map((item, index) => (
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
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default BagReview;




/*
import React from "react";
import "../styles/BagReview.css";

const BagReview = ({ cartItems }) => (
  <div className="cart">
    <h2>Cart</h2>
    {cartItems && cartItems.length > 0 ? (
      cartItems.map((item, index) => (
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
          </div>
        </div>
      ))
    ) : (
      <p>Your cart is empty</p>
    )}
  </div>
);

export default BagReview;
*/
