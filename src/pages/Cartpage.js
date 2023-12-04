import React from "react";
import BagItems from "../components/BagItems"; // Import the BagItems component

const CartPage = ({ cartItems }) => (
  <div>
    <h1>Cart Page</h1>
    {/* Pass cartItems to the BagItems component */}
    <BagItems cartItems={cartItems} />
  </div>
);

export default CartPage;
