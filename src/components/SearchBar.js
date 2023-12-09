
import React, { useState } from 'react';
import * as images from "./images";
import "../styles/SearchBar.css";
//import ProductItems from "./ProductItems";

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
        price: 199.99,
      },
    
      {
        id: 2,
        name: "Watch",
        image: images.product2,
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


