import React, { useState } from 'react';
import * as images from "./images";
import "../styles/SearchBar.css";
//import ProductItems from "./ProductItems";
import { itemsData } from './Data';

const SearchBar = () => {
 const [search, setSearch] = useState('');
 const [searchResults, setSearchResults] = useState([]);

 const products = [
   
  {
    id: 1,
    name: "Watch",
    image: images.product1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
    price: 529.99,
  },

  {
    id: 2,
    name: "Headphones",
    image: images.product2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.6,
    price: 638.99,
  },

  {
    id: 3,
    name: "Iphone 11- Series Black",
    image: images.product3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.8,
    price: 1219.99,
  },

  {
    id: 4,
    name: "Iphone 11- Series Blue",
    image: images.product4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.8,
    price: 1319.99,
  },

  {
    id: 5,
    name: "Iphone 11- Product Red",
    image: images.product5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5.0,
    price: 1419.99,
  },

  {
    id: 6,
    name: "Iphone 11- Milky White",
    image: images.product6,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.5,
    price: 1219.99,
  },

  {
    id: 7,
    name: "Iphone 13- Product Pink",
    image: images.product7,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4.9,
    price: 1699.99,
  },

  {
    id: 8,
    name: "Iphone 14- Product Blue",
    image: images.product8,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 5.0,
    price: 1899.99,
  }, 
 ];

 const onSearchChange = (e) => {
    setSearch(e.target.value);
 };

 const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchResults(products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())));
 };

 return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Search products..." value={search} onChange={onSearchChange} id='searchbar' />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <div>
            {searchResults.map((product) => (
              
              <div key= {product.name}>
              
               <img src={product.image} alt={product.name} className="item-image" />
                {product.name} - {product.price} 
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
 );
};

export default SearchBar;


