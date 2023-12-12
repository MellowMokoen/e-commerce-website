import React from "react";
import { useParams } from "react-router-dom";
import { itemsData } from "./Data";


const ProductDetails = () => {
  const { id } = useParams();

  console.log(itemsData);

  const selectedProduct = itemsData.find((item) => item.id === parseInt(id));

  if (!selectedProduct) {
    return <p>Product not found</p>;
  }

  const { name, image, description, rating, price } = selectedProduct;

  return (
    <div className="item-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="item-image" />
      <p>{description}</p>
      <p>Rating: {rating}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default ProductDetails;
