import React from "react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { itemsData } from "./Data";
import { addItem } from "../cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedProduct = itemsData.find((item) => item.id === parseInt(id));

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  const { name, image, description, rating, price } = selectedProduct;

  const handleAddToCart = () => {
    dispatch(addItem({ ...selectedProduct, quantity: 1 }));
  };

  return (
    <div className="item-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="item-image" />
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <p>Price: {price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Link to="/cart">
        <button className="review-cart-button">Review Cart</button>
      </Link>
      
    </div>
  );
};

export default ProductDetails;
