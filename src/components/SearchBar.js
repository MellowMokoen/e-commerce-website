import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ itemsData, onSearch }) => {
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const searchResults = itemsData.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    onSearch(searchResults);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={onSearchChange}
          id="searchbar"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
