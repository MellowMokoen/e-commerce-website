import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { itemsData } from "./Data";
import { addItem } from "../cartSlice";
import "../styles/ProductDetails.css";

// ProductDetails component displays details of a selected product
const ProductDetails = () => {
  // Extracts the 'id' parameter from the URL
  const { id } = useParams();

  // Redux dispatch hook to dispatch actions
  const dispatch = useDispatch();

  // useNavigate hook for navigation
  const navigate = useNavigate();

  // Finds the selected product from itemsData based on the 'id' parameter
  const selectedProduct = itemsData.find((item) => item.id === parseInt(id));

  // If the product is not found, display an error message
  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  // Destructuring properties from the selected product
  const { name, color, image, description, rating, price } = selectedProduct;

  // Adds the selected product to the cart with a quantity of 1
  const handleAddToCart = () => {
    dispatch(addItem({ ...selectedProduct, quantity: 1 }));
  };

  // Handle back button click
  const handleBackButtonClick = () => {
    // Use navigate to go back to the previous page
    navigate(-1);
  };

  return (
    // Container for displaying product details

    <div className="item-card">
      <button className="back-button" onClick={handleBackButtonClick}>
        Back
      </button>
      <div className="item-details">
        <img src={image} alt={name} className="item-image" />

        <div className="details">
          <h2>{name}</h2>
          <p className="item-color">{color}</p>
          <p>{rating}</p>
          <p className="item-price">R {price}</p>
          <p>{description}</p>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
      <hr />

      <div className="item-paragraph-heading">Description</div>
      <div className="item-paragraph">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod
        </p>
        <p>
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        </p>
        <p>
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea
        </p>
        <p>
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        </p>
        <p>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</p>
        <p>
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        </p>
        <p>
          mollit anim id est laborum. commodo consequat. Duis aute irure dolor
          in
        </p>
        <p>
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>{" "}
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
