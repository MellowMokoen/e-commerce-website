import React from "react";
import MenuSidebar from "../components/MenuSidebar";
import BagSidebar from "../components/BagSidebar";
import BagReview from "../components/BagReview";

const Cartpage = ({ cartItems }) => (
  <div>
    <MenuSidebar />
    <BagReview cartItems={cartItems} />
    <BagSidebar />
  </div>
);

export default Cartpage;
