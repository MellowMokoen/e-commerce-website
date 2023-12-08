import React, { useState } from "react";
import "../styles/MenuSidebar.css";
import image1 from "../images/Type=Transparent.png";
import image2 from "../images/Name=menu.png";
import image3 from "../images/Name=storefront.png";
import image4 from "../images/Name=bag-handle.png"
import image5 from "../images/Name=log-out.png";

export default function MenuSidebar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    { image: image1, alt: "logo" },
    { image: image2, alt: "menu" },
    { image: image3, alt: "storefront" },
    { image: image4, alt: "bag-handle" },
    { image: image5, alt: "log-out" },
  ];

   const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
   };

   const openSidebar = () => {
    setIsSidebarOpen(true);
  };

    return (

      <div className={`menu-container ${isSidebarOpen ? "open" : "closed"}`}>
      
         <button className="close-button" onClick={toggleSidebar}>Close</button>

        {menuItems.map((item, index) => (
        <div className="menu-sidebar" key={index}>
          <img src={item.image} alt={item.alt} />
        </div>
       ))}
       {!isSidebarOpen && (
        <button className="open-button" onClick={openSidebar}>
          Open
        </button>
      )}
      </div>
    );
}