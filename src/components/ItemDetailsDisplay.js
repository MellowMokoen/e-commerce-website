/*
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice";
import { Link } from "react-router-dom";
import { itemsData } from "./Data";

const ProductItems = () => {
  const dispatch = useDispatch();

  const onAddToCart = (item) => {
    dispatch(addItem({ ...item, quantity: 1 }));
  };

  return (
    <div className="product-container">
      <div className="row">
        {itemsData.map((item) => (
          <div key={item.id} className="item-card">
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} className="item-image" />
            <p>{item.description}</p>
            <p>Rating: {item.rating}</p>
            <p>Price: {item.price}</p>
            <button onClick={() => onAddToCart(item)}>Add to Cart</button>
            <Link to={`/product-details/${item.id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
      </div>
      <Link to="/cart">
        <button className="review-cart-button">Review Cart</button>
      </Link>
    </div>
  );
};

export default ProductItems;
*/