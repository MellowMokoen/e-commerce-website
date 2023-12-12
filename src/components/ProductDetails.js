import React from "react";
import { useParams } from "react-router-dom";
import { itemsData } from "./Data";


const ProductDetails = () => {
  const { id } = useParams();
  
  const selectedProduct = itemsData.find((item) => item.id === parseInt(id));
  console.log('Product ID:', id);
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



/*
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ItemDetails from "./ItemDetails";
import ItemDetailsDisplay from "./ItemDetailsDisplay";


export default function ProductDetails() {

    const location = useLocation();
    const locationSelectedItem = location.state;
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  const handleBackToItems = () => {
    setSelectedItem(null);
  };

    return (
       <div className="app-container">
      {selectedItem ? (
        <ItemDetails
          image={selectedItem?.image}
          name={selectedItem?.name}
          description={selectedItem?.description}
          onBack={handleBackToItems}
        />

      ) : (
        
        <div className="item-grid">
          <ItemDetailsDisplay
            image={locationSelectedItem?.image} // Replace with the actual logic to get the correct image
            name={locationSelectedItem?.name}
            description={locationSelectedItem?.description}
            onSelect={() => handleItemSelect(locationSelectedItem)}
          />
          
        </div>

        
      )}
      
    </div>
  );
}

*/