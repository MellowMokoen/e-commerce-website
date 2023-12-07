/*import React from "react";

export default function SearchBar() {
    return (
        <input type="search" placeholder="Apple Watch, Samsung S21, MacBook Pro" />

    );
} */

import React, { useState } from 'react';
import * as images from "./images";

const SearchBar = () => {
 const [search, setSearch] = useState('');
 const [searchResults, setSearchResults] = useState([]);

 const products = [
   /* { name: 'Apple Watch Series 5 SE', price: 529.99 },
    { name: 'iPhone 11 Product RED', price: 619.99 },
    { name: 'Samsung S21', price: 'Not available yet' },
    { name: 'MacBook Pro', price: 'From 1799' }, */
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
        <input type="text" placeholder="Search products..." value={search} onChange={onSearchChange} />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((product) => (
              
              <li key= {product.name}>
              
               <img src={product.image} alt={product.name} className="item-image" />
                {product.name} - {product.price} 
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
 );
};

export default SearchBar;