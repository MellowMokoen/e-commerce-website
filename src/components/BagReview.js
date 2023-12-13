import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { removeItem, increaseQuantity, decreaseQuantity } from '../cartSlice';
import '../styles/BagReview.css';

// BagReview component displays the items in the shopping cart
const BagReview = () => {
  // Redux hooks for dispatching actions and accessing state
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    // Container for displaying the shopping cart
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        // Render cart items if the cart is not empty
        <>
          {cartItems.map((item, index) => (
            // Display details for each item in the cart
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
                {/* Buttons to remove, increase, and decrease quantity of the item */}
                <button onClick={() => dispatch(removeItem(item))}>Remove</button>
                <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
              </div>
            </div>
          ))}
          {/* Display total amount and link to the shipping page */}
          <div className="total-amount">
            <p>Total Amount: {totalAmount}</p>
          </div>
          <Link to="/shipping">
            <button className="checkout-button">Checkout</button>
          </Link>
        </>
      ) : (
        // Display a message if the cart is empty
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default BagReview;
