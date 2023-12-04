import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductItems.css";
import * as images from "./images";

export default function ProductItems() {
  const navigate = useNavigate();

  const handleItemClick = (image, name, description) => {
    // Navigate to ProductDetails and pass selected image details
    navigate("/product-details", { image, name, description });
  };

    return (
     <div className="product-container">
          
        <div className="row">
          <div className="product-item" onClick={() => handleItemClick(images.product1, "Watch", "Lorem")}>
            <img src={images.product1} alt="watch" />
            <p className="product-name">Apple Watch</p>
            <p className="product-color">Series5 SE</p>
            <p className="product-price">R 529.99 </p>
          </div>
           <div className="product-item" onClick={() => handleItemClick(images.product2, "Watch", "Lorem")}>
            <img src={images.product2} alt="watch" />
            <p className="product-name">Sony ZX33OBT</p>
            <p className="product-color">Light Grey</p>
            <p className="product-price">R 38.99 </p>

           </div>
           <div className="product-item" onClick={() => handleItemClick(images.product3, "Watch", "Lorem")}>
            <img src={images.product3} alt="watch" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Series Black</p>
            <p className="product-price">R 619.99</p>

           </div>
           <div className="product-item" onClick={() => handleItemClick(images.product4, "Watch", "Lorem")}>
            <img src={images.product4} alt="watch" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Series Blue</p>
            <p className="product-price">R 619.99 </p>
           </div>
        </div>

         <div className="row">
          <div className="product-item" onClick={() => handleItemClick(images.product5, "Watch", "Lorem")}>
            <img src={images.product5} alt="watch" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Product Red</p>
            <p className="product-price">R 619.99</p>
          </div>
          <div className="product-item" onClick={() => handleItemClick(images.product6, "Watch", "Lorem")}>
            <img src={images.product6} alt="watch" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Milky White</p>
            <p className="product-price">R 619.99</p>
          </div>
          <div className="product-item" onClick={() => handleItemClick(images.product7, "Watch", "Lorem")}>
            <img src={images.product7} alt="watch" />
            <p className="product-name">Iphone 13</p>
            <p className="product-color">Product Red</p>
            <p className="product-price">R 619.99</p>
          </div>
          <div className="product-item" onClick={() => handleItemClick(images.product8, "Watch", "Lorem")}>
            <img src={images.product8} alt="watch" />
            <p className="product-name">Iphone 14</p>
            <p className="product-color">Product Red</p>
            <p className="product-price">R 619.99</p>
          </div>
         </div>
     </div>
    );
}

