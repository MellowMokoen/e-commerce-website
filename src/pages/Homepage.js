import React, { useState } from "react";
import MenuSidebar from "../components/MenuSidebar";
import ProductItems from "../components/ProductItems";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import { itemsData } from "../components/Data";

export default function Homepage() {
  const [filteredItems, setFilteredItems] = useState(itemsData);

  const handleSearch = (searchResults) => {
    setFilteredItems(searchResults);
  };

  return (
    <div className="main-container">
      <SearchBar itemsData={itemsData} onSearch={handleSearch} />
      <MenuSidebar />
      <ProductItems itemsData={filteredItems} />
      <Sidebar />
    </div>
  );
}
