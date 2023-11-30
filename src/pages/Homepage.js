import React from "react";
import MenuSidebar from "../components/MenuSidebar";
import ProductItems from "../components/ProductItems";
import BagSidebar from "../components/BagSidebar";
import SearchBar from "../components/SearchBar";

export default function Homepage() {

    return (
        <div>
            <SearchBar />
            <MenuSidebar />
            <ProductItems />
            <BagSidebar />
        </div>
    );
}