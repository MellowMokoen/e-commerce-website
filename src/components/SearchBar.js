import React, { useState } from 'react';
import * as images from "./images";
import "../styles/SearchBar.css";


// SearchBar component for searching and displaying product results
const SearchBar = () => {
  // State for handling search input and results
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Sample product data (replace with actual data or fetch from an API)
  const products = [
    {
      id: 1,
      name: "Apple Watch",
      image: images.product1, // Using the imported image for Apple Watch
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.5,
      price: 529.99,
    },
  
    {
      id: 2,
      name: "Headphones",
      image: images.product2, // Using the imported image for Headphones
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.6,
      price: 638.99,
    },
  
    {
      id: 3,
      name: "Iphone 11- Series Black",
      image: images.product3, // Using the imported image for Iphone 11 - Series Black
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 4.8,
      price: 1219.99,
    },
  
    // ... (Repeat the same structure for other items)
  
    {
      id: 8,
      name: "Iphone 14- Product Blue",
      image: images.product8, // Using the imported image for Iphone 14 - Product Blue
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      rating: 5.0,
      price: 1899.99,
    },
  ];

  // Function to handle changes in the search input
  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Function to handle form submission and update search results
  const onFormSubmit = (e) => {
    e.preventDefault();
    setSearchResults(products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase())));
  };

  return (
    <div>
      {/* Search form with input and button */}
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="Search products..." value={search} onChange={onSearchChange} id='searchbar' />
        <button type="submit">Search</button>
      </form>

      {/* Display search results if there are any */}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <div>
            {/* Map through search results and display product information */}
            {searchResults.map((product) => (
              <div key={product.name}>
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
