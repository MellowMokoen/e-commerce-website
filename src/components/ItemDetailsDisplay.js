import React from "react";
import { useNavigate } from "react-router-dom";

const ItemDetailsDisplay = ({ image, name, description }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    // Navigate to the product-details page with the selected item data
    navigate("/product-details", { state: { image, name, description } });
  };

  return (
    <div className="item-card" onClick={handleItemClick}>
      <h2>{name}</h2>
      <img src={image} alt={name} className="item-image" />
      <p>{description}</p>
      <p>Now it should render properly.</p>
    </div>
  );
};

export default ItemDetailsDisplay;
