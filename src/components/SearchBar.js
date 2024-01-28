import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ itemsData, onSearch }) => {
  const [search, setSearch] = useState("");

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const searchResults = itemsData.filter((product) => {
      const includesInName = product.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const isHidden = product.hidden && search.toLowerCase() === "hidden"; // Only show hidden items if the search term is "hidden"
      return includesInName || isHidden;
    });

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
