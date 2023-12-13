import React from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { itemsData } from "./Data";
import { addItem } from "../cartSlice";
import "../styles/ProductDetails.css";

// ProductDetails component displays details of a selected product
const ProductDetails = () => {
  // Extracts the 'id' parameter from the URL
  const { id } = useParams();

  // Redux dispatch hook to dispatch actions
  const dispatch = useDispatch();

  // Finds the selected product from itemsData based on the 'id' parameter
  const selectedProduct = itemsData.find((item) => item.id === parseInt(id));

  // If the product is not found, display an error message
  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  // Destructuring properties from the selected product
  const { name, image, description, rating, price } = selectedProduct;

  // Adds the selected product to the cart with a quantity of 1
  const handleAddToCart = () => {
    dispatch(addItem({ ...selectedProduct, quantity: 1 }));
  };

  return (
    // Container for displaying product details
    <div className="item-card">
      {/* Product details */}
      <h2>{name}</h2>
      <img src={image} alt={name} className="item-image" />
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <p>Price: {price}</p>

      {/* Button to add the product to the cart */}
      <button onClick={handleAddToCart}>Add to Cart</button>

      {/* Link to navigate to the cart page */}
      <Link to="/cart">
        <button className="review-cart-button">Review Cart</button>
      </Link>
    </div>
  );
};

export default ProductDetails;
