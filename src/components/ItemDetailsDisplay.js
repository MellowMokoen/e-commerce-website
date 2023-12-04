import React, { useState } from "react";
import * as images from "./images";
import BagReview from "./BagReview";

// Data array containing information for each item
const itemsData = [
  {
    id: 1,
    name: "Watch",
    image: images.product1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 2,
    name: "Headphones",
    image: images.product2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 3,
    name: "Iphone 11- Series Black",
    image: images.product3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 4,
    name: "Iphone 11- Series Blue",
    image: images.product4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 5,
    name: "Iphone 11- Product Red",
    image: images.product5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 6,
    name: "Iphone 11- Milky White",
    image: images.product6,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 7,
    name: "Iphone 13- Product Red",
    image: images.product7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },

  {
    id: 8,
    name: "Iphone 14- Product Red",
    image: images.product8,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  
];

export default function ProductItems() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  return (
    <div className="product-container">
      <div className="row">
        {itemsData.map((item) => (
          <ItemDetailsDisplay
            key={item.id}
            name={item.name}
            image={item.image}
            description={item.description}
            onAddToCart={() => addToCart(item)}
          />
        ))}
      </div>
      <BagReview cartItems={cartItems} />
    </div>
  );
}

// Your ItemDetailsDisplay component
const ItemDetailsDisplay = ({ name, image, description, onAddToCart }) => (
  <div className="item-card">
    <h2>{name}</h2>
    <img src={image} alt={name} className="item-image" />
    <p>{description}</p>
    <button onClick={onAddToCart}>Add to Cart</button>
  </div>
);


/*
// Your ProductItems component
export default function ProductItem() {

  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    // Set the selected item when an item is clicked
    setSelectedItem(item);
  };

  return (
    <div className="product-container">
      <div className="row">
        {itemsData.map((item) => (
          <ItemDetailsDisplay
            key={item.id}
            item={item}
            onClick={() => handleItemClick(item)}
          />
        ))}
      </div>
      {selectedItem && (
        <ItemDetailsDisplay
          name={selectedItem.name}
          image={selectedItem.image}
          description={selectedItem.description}
        />
      )}
    </div>
  );
}

// Your ItemDetailsDisplay component
const ItemDetailsDisplay = ({ item, onClick }) => (
  <div className="item-card" onClick={onClick}>
    <h2>{item.name}</h2>
    <img src={item.image} alt={item.name} className="item-image" />
    <p>{item.description}</p>
  </div>
);

*/
