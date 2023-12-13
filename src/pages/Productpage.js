import React from "react";
import ProductDetails from "../components/ProductDetails";
import MenuSidebar from "../components/MenuSidebar";
import BagSidebar from "../components/BagSidebar";

export default function Productpage() {
    return (
      <div>
        <MenuSidebar />
        <ProductDetails />
        <BagSidebar />
      </div>
    );
}

