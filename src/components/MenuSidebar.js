import React, { useState } from "react";
import "../styles/MenuSidebar.css";
import image1 from "../images/Type=Transparent.png";
import image2 from "../images/Name=menu.png";
import image3 from "../images/Name=storefront.png";
import image4 from "../images/Name=bag-handle.png"
import image5 from "../images/Name=log-out.png";

export default function MenuSidebar() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

    return (

        <div className={`menu-container ${isSidebarOpen ? "open" : "closed"}`}>
      
         <button onClick={toggleSidebar}>Toggle Sidebar</button>

        {menuItems.map((item, index) => (
        <div className="menu-sidebar" key={index}>
          <img src={item.image} alt={item.alt} />
        </div>
      ))}
    </div>
    );
}