import React from "react";
import ProductDetails from "../components/ProductDetails";
import MenuSidebar from "../components/MenuSidebar";
import Sidebar from "../components/Sidebar";

export default function Productpage() {
  return (
    <div>
      <MenuSidebar />
      <ProductDetails />
      <Sidebar />
    </div>
  );
}
