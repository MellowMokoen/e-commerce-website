
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductItems.css";
import { itemsData } from "./Data";

export default function ProductItems() {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    // Navigate to ProductDetails and pass selected item details
    navigate(`/product-details/${item.id}`, {
      image: item.image,
      name: item.name,
      color: item.color,
      description: item.description,
    });
  };

  return (
    <div className="product-container">
      <div className="row">
        {itemsData.map((item) => (
          <div
            key={item.id}
            className="product-item"
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




/*

export default function ProductItems() {
  const navigate = useNavigate();

  const handleItemClick = (item, image, name, description) => {
    // Navigate to ProductDetails and pass selected image details
    navigate(`/product-details/${item.id}`, { image, name, description });
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
            <img src={images.product2} alt="headphones" />
            <p className="product-name">Sony ZX33OBT</p>
            <p className="product-color">Light Grey</p>
            <p className="product-price">R 638.99 </p>

           </div>
           <div className="product-item" onClick={() => handleItemClick(images.product3, "Watch", "Lorem")}>
            <img src={images.product3} alt="watch" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Series Black</p>
            <p className="product-price">R 1 219.99</p>

           </div>
           <div className="product-item" onClick={() => handleItemClick(images.product4, "Watch", "Lorem")}>
            <img src={images.product4} alt="iphone 11" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Series Blue</p>
            <p className="product-price">R 1 319.99 </p>
           </div>
        </div>

        <div className="row" id="row-2">
          <div className="product-item" onClick={() => handleItemClick(images.product5, "Watch", "Lorem")}>
            <img src={images.product5} alt="iphone 11" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Product Red</p>
            <p className="product-price">R 1 419.99</p>
          </div>
          <div className="product-item" onClick={() => handleItemClick(images.product6, "Watch", "Lorem")}>
            <img src={images.product6} alt="iphone 11" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Milky White</p>
            <p className="product-price">R 1 219.99</p>
          </div>
          <div className="product-item" onClick={() => handleItemClick(images.product7, "Watch", "Lorem")}>
            <img src={images.product7} alt="iphone 13" />
            <p className="product-name">Iphone 13</p>
            <p className="product-color">Product Pink</p>
            <p className="product-price">R 1 699.99</p>
          </div>
          <div className="product-item" onClick={() => handleItemClick(images.product8, "Watch", "Lorem")}>
            <img src={images.product8} alt="iphone 14" />
            <p className="product-name">Iphone 14</p>
            <p className="product-color">Product Blue</p>
            <p className="product-price">R 1 899.99</p>
          </div>
         </div>
     </div>
    );
}
*/