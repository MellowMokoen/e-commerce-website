import React from "react";
import MenuSidebar from "../components/MenuSidebar";
import ProductItems from "../components/ProductItems";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";

export default function Homepage() {
  return (
    <div className="main-container">
      <SearchBar />
      <MenuSidebar />
      <ProductItems />
      <Sidebar />
    </div>
  );
}
