import React from "react";
import BagReview from "../components/BagReview";
import MenuSidebar from "../components/MenuSidebar";
import BagSidebar from "../components/BagSidebar";

const Cartpage = () => {
  return (
    <div className="product-container">
      <MenuSidebar />
      <BagReview />
      <BagSidebar />
    </div>
  );
};

export default Cartpage;

