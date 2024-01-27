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
  const { name, color, image, description, rating, price } = selectedProduct;

  // Adds the selected product to the cart with a quantity of 1
  const handleAddToCart = () => {
    dispatch(addItem({ ...selectedProduct, quantity: 1 }));
  };

  return (
    // Container for displaying product details
    <div className="item-card">
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
      <Link to="/cart">
        <button className="review-cart-button">Review Cart</button>
      </Link>
      <div className="item-paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod{" "}
        <br />
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim{" "}
        <br />
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea{" "}
        <br />
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate{" "}
        <br />
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt{" "}
        <br />
        mollit anim id est laborum. commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate <br />
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint <br />
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt{" "}
        <br />
        mollit anim id est laborum.
      </div>
    </div>
  );
};

export default ProductDetails;
