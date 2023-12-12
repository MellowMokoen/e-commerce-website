import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity } from '../cartSlice';
import '../styles/BagReview.css';

const BagReview = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        <>
          {cartItems.map((item, index) => (
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
                <button onClick={() => dispatch(removeItem(item))}>Remove</button>
                <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
              </div>
            </div>
          ))}
          <div className="total-amount">
            <p>Total Amount: {totalAmount}</p>
          </div>
        </>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default BagReview;
