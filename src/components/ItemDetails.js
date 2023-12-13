import React from "react";

// ItemDetails component displays details of a specific item
const ItemDetails = ({ image, name, description, onBack }) => (
  // Container for displaying item details
  <div className="item-details">
    {/* Item details */}
    <h2>{image}</h2>
    <h3>{name}</h3>
    <p>{description}</p>

    {/* Button to go back to the items menu */}
    <button className="back-to-menu-button" onClick={onBack}>
      Back to Items
    </button>
  </div>
);

export default ItemDetails;
