import React from "react";
import { Link } from "react-router-dom";
import "../styles/CartBag.css";

const CartBag = ({ totalAmount }) => (
  <>
    <div className="total-amount">
      <p>Total : R {totalAmount}</p>
    </div>
    <Link to="/shipping">
      <button className="checkout-button">Checkout</button>
    </Link>
    <Link to="/cart">
      <button className="review-cart-button">Review Cart</button>
    </Link>
  </>
);

export default CartBag;
