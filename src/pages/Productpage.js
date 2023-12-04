import React from "react";
import ProductDetails from "../components/ProductDetails";

export default function Productpage() {
    return (
        <ProductDetails />
    );
}


/*
// ItemDetailsPage.js
import React from "react";
import { useParams } from "react-router-dom";

const Productpage = () => {
  const { itemId } = useParams();

  // Fetch the item details based on itemId from your data
  const selectedItem = itemsData.find((item) => item.id === parseInt(itemId, 10));

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{selectedItem.name}</h2>
      <img src={selectedItem.image} alt={selectedItem.name} />
      <p>{selectedItem.description}</p>
    </div>
  );
};

export default Productpage;

*/
