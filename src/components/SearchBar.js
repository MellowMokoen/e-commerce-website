import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ itemsData, onSearch }) => {
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
    setNotFound(false);
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

    if (searchResults.length === 0) {
      setNotFound(true);
    } else {
      setNotFound(false);
      onSearch(searchResults);
    }
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

      {notFound && <p className="product-not-found">Product not found!</p>}
    </div>
  );
};

export default SearchBar;
