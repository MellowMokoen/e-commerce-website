import React from "react";
import "../styles/ProductItems.css";
import product1 from "../images/Name=Watch.png";
import product2 from "../images/Name=Headphones.png";
import product3 from "../images/Name=Iphone-12-01.png";
import product4 from "../images/Name=Iphone-12-02.png";
import product5 from "../images/Name=Iphone-12-03.png";
import product6 from "../images/Name=Iphone-12-04.png";
import product7 from "../images/Name=Iphone-12-Pro-01.png";
import product8 from "../images/Name=Iphone-12-Pro-02.png";

export default function ProductItems() {

    return (
     <div className="product-container">
          
        <div className="row">
          <div className="product-item">
            <img src={product1} alt="watch" />
            <p className="product-name">Apple Watch</p>
            <p className="product-color">Series5 SE</p>
            <p className="product-price">R 529.99 </p>
          </div>
           <div className="product-item">
            <img src={product2} alt="watch" />
            <p className="product-name">Sony ZX33OBT</p>
            <p className="product-color">Light Grey</p>
            <p className="product-price">R 38.99 </p>

           </div>
           <div className="product-item">
            <img src={product3} alt="watch" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Series Black</p>
            <p className="product-price">R 619.99</p>

           </div>
           <div className="product-item">
            <img src={product4} alt="watch" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Series Blue</p>
            <p className="product-price">R 619.99 </p>
           </div>
        </div>

         <div className="row">
          <div className="product-item">
            <img src={product5} alt="watch" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Product Red</p>
            <p className="product-price">R 619.99</p>
          </div>
          <div className="product-item">
            <img src={product6} alt="watch" />
            <p className="product-name">Iphone 11</p>
            <p className="product-color">Milky White</p>
            <p className="product-price">R 619.99</p>
          </div>
          <div className="product-item">
            <img src={product7} alt="watch" />
            <p className="product-name">Iphone 13</p>
            <p className="product-color">Product Red</p>
            <p className="product-price">R 619.99</p>
          </div>
          <div className="product-item">
            <img src={product8} alt="watch" />
            <p className="product-name">Iphone 14</p>
            <p className="product-color">Product Red</p>
            <p className="product-price">R 619.99</p>
          </div>
         </div>
     </div>
    );
}