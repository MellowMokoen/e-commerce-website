import React from "react";
import BagReview from "../components/BagReview";
import MenuSidebar from "../components/MenuSidebar";
import BagSidebar from "../components/BagSidebar";

const Cartpage = () => {
  return (
    <div className="product-container">
      <MenuSidebar />
      <BagReview />
      <BagSidebar />
    </div>
  );
};

export default Cartpage;

/*
import React from "react";
import MenuSidebar from "../components/MenuSidebar";
import BagSidebar from "../components/BagSidebar";
import BagReview from "../components/BagReview";

const Cartpage = ({ cartItems }) => (
  <div>
    <MenuSidebar />
    <BagReview cartItems={cartItems} />
    <BagSidebar />
  </div>
);

export default Cartpage;


import React from "react";
//import * as images from "../components/images";
import BagReview from "../components/BagReview";


export default function Cartpage() {

// Data array containing information for each item
/*
const cartItems = [
  {
    id: 1,
    name: "Watch",
    image: images.product1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
    price: 199.99,
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

  return (
    <div className="product-container">
      
    <BagReview cartItems={cartItems} />
  </div>
);
    
}

*/

// Cartpage.js





