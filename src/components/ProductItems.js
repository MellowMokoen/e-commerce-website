import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductItems.css";
import { itemsData } from "./Data";

// ProductItems component renders a list of product items
export default function ProductItems() {
  // React Router hook to navigate between pages
  const navigate = useNavigate();

  // Handle click on a product item, navigate to ProductDetails and pass selected item details
  const handleItemClick = (item) => {
    navigate(`/product-details/${item.id}`, {
      image: item.image,
      name: item.name,
      color: item.color,
      description: item.description,
    });
  };

  return (
    // Container for the product items
    <div className="product-container">
      {/* Row to display product items */}
      <div className="row">
        {/* Map through the itemsData array to render each product item */}
        {itemsData.map((item) => (
          <div
            key={item.id} // Unique key for React to efficiently update the DOM
            className="product-item"
            // Call handleItemClick when a product item is clicked
            onClick={() => handleItemClick(item)}
          >
            <img src={item.image} alt={item.name} />
            <p className="product-name">{item.name}</p>
            <p className="product-color">{item.color}</p>
            <p className="product-price">R {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
